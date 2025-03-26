import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  habits: [],
  isLoading: false,
  error: null,
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit(state, action) {
      const newHabit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };

      state.habits.push(newHabit);
    },
    removeHabit(state, action) {
      const habitIndex = state.habits.indexOf(action.payload.id);

      state.habits.splice(habitIndex, 1);
    },
    toggleHabit(state, action) {
      const habit = state.habits.find((h) => h.id === action.payload.id);

      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);

        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
  },
});

export const { addHabit, removeHabit, toggleHabit } = habitSlice.actions;
export default habitSlice.reducer;
