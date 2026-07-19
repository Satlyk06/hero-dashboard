import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stats: {
    totalRevenue: 45231.89,
    orders: 2350,
    customers: 12234,
    conversionRate: 3.24,
  },
  revenueData: [
    { name: 'Jan', revenue: 4000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 2000, profit: 9800 },
    { name: 'Apr', revenue: 2780, profit: 3908 },
    { name: 'May', revenue: 1890, profit: 4800 },
    { name: 'Jun', revenue: 2390, profit: 3800 },
    { name: 'Jul', revenue: 3490, profit: 4300 },
    { name: 'Aug', revenue: 4200, profit: 2100 },
    { name: 'Sep', revenue: 5100, profit: 3200 },
    { name: 'Oct', revenue: 4800, profit: 4100 },
    { name: 'Nov', revenue: 5600, profit: 3900 },
    { name: 'Dec', revenue: 6100, profit: 5200 },
  ],
  loading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;