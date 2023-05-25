import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./DisplayNav";

const store = configureStore({
    reducer: { display: displaySlice.reducer },
  });
  export default store;
