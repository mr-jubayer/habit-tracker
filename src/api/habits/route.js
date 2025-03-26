import getStorage from "../storage";

const postHabit = async (payload) => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const data = getStorage("habits", {
    habits: [],
    isLoading: false,
    error: null,
  });

  data.habits.push(payload);
  localStorage.setItem("habits", JSON.stringify(data));

  console.log("end");

  return data.habits;
};

const getHabits = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const data = localStorage.getItem("habits");
  return JSON.parse(data);
};

export { postHabit, getHabits };
