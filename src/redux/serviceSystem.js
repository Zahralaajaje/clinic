import { createSlice } from "@reduxjs/toolkit";

const serviceSystem = createSlice({
  name: "serviceSystem",
  initialState: {
    services: [],
  },
  reducers: {
    // check if the service is already in the list
    addService: (state, action) => {
      const service = action.payload;
      const serviceExists = state.services.find(
        (service) => service.src === action.payload.src
      );
      if (!serviceExists) {
        state.services.push(service);
      }
    },

    removeService: (state, action) => {
      // remove service
      state.services = state.services.filter(
        (service) => service.src !== action.payload.src
      );
    },
  },
});

export const { addService, removeService } = serviceSystem.actions;

export default serviceSystem.reducer;
