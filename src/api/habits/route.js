import getStorage from "../storage";

const postHabit = async (payload) => {
  console.log("at route", payload);

  await setTimeout(() => {}, 100);

  const data = getStorage("habits", {
    habits: [],
    isLoading: false,
    error: null,
  });

  data.habits.push(payload);
  localStorage.setItem("habits", JSON.stringify(data));
};

const getHabits = async () => {
  await setTimeout(() => {}, 3000);

  const data = localStorage.getItem("habits");
  return JSON.parse(data);
};

export { postHabit, getHabits };
