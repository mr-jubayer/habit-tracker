import { useSelector } from "react-redux";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeHabit, toggleHabit } from "../features/habitSlice";

const HabitList = () => {
  const { habits } = useSelector((state) => state.habits);

  return (
    <div>
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;

const HabitCard = ({ habit }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeHabit(id));
  };

  const today = new Date().toISOString().split("T")[0];

  const handleToggle = (id) => {
    dispatch(toggleHabit({ id, date: today }));
  };

  const getStreak = (habit) => {
    let streak = 0;

    let currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];

      if (habit.completedDates.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  };
  return (
    <div className="p-5 rounded shadow bg-white my-2">
      <div className=" flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold"> {habit.name} </h2>
          <p> {habit.frequency} </p>
        </div>
        <div className="flex gap-2 ">
          <Button type="success" onClick={() => handleToggle(habit.id)}>
            {habit.completedDates.includes(today)
              ? "Completed"
              : "Mark Complete"}
          </Button>
          <Button type="danger" onClick={() => handleRemove(habit.id)}>
            Remove
          </Button>
        </div>
      </div>
      <p>
        {" "}
        Current Streak: {getStreak(habit)} {habit.frequency.slice(0, -2)}s
      </p>
      <progress
        className="progress progress-info w-full"
        value={(getStreak(habit) / 30) * 100}
        max="100"
      ></progress>
    </div>
  );
};
