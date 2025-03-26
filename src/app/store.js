import { configureStore } from "@reduxjs/toolkit";
import habitReduce from "../features/habitSlice";

const store = configureStore({
  reducer: {
    habits: habitReduce,
  },
});

export default store;
