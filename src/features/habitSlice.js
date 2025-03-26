import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getHabits, postHabit } from "../api/habits/route";

const initialState = {
  habits: [],
  isLoading: false,
  error: null,
};

export const getAllHabit = createAsyncThunk("habits/getHabits", async () => {
  const habits = await getHabits();

  return habits.habits;
});

export const postNewHabit = createAsyncThunk(
  "habit/postHabit",
  async (payload) => {
    const habits = await postHabit(payload);
    console.log("after posting");

    return habits;
  }
);

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
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
  extraReducers(builder) {
    builder
      .addCase(getAllHabit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllHabit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      })
      .addCase(getAllHabit.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message | "fetch to failed!";
      })

      .addCase(postNewHabit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postNewHabit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      })
      .addCase(postNewHabit.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.payload?.message || "failed to post!";
      });
  },
});

export const { addHabit, removeHabit, toggleHabit } = habitSlice.actions;
export default habitSlice.reducer;
