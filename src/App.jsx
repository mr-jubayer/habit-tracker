import HabitList from "./components/HabitList";
import InputBox from "./components/InputBox";

function App() {
  return (
    <div className="p-5">
      <h2 className="text-3xl text-center  my-4 font-semibold">
        Habit Tracker
      </h2>
      <InputBox />
      <HabitList />
    </div>
  );
}

export default App;
