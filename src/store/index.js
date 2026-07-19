import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';
import ordersReducer from './slices/ordersSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    orders: ordersReducer,
  },
});