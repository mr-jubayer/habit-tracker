import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { postNewHabit } from "../features/habitSlice";

const InputBox = () => {
  const [habit, setHabit] = useState({
    name: "",
    frequency: "Daily",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      postNewHabit({
        id: Date.now().toString(),
        name: habit.name,
        frequency: habit.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      })
    );
  };
  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 rounded-md p-4">
      <input
        type="text"
        className=" w-full shadow border border-gray-200 px-4 py-1.5 bg-white rounded"
        placeholder="Habit Name"
        onChange={(e) =>
          setHabit((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <fieldset className="fieldset">
        <select
          defaultValue="Pick a browser"
          className="select w-full"
          onChange={(e) =>
            setHabit((prev) => {
              return { ...prev, frequency: e.target.value };
            })
          }
        >
          <option value={"Daily"}>Daily</option>
          <option value={"Weekly"}>Weekly</option>
          <option value={"Monthly"}>Monthly</option>
        </select>
      </fieldset>
      <Button type="filledPrimary" className={"w-full mt-1"}>
        Add Habit
      </Button>
    </form>
  );
};

export default InputBox;
