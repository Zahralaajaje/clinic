import { configureStore } from "@reduxjs/toolkit";
import serviceSystem from "./serviceSystem";

const store = configureStore({
  reducer: {
    serviceSystem: serviceSystem,
  },
});

export default store;
