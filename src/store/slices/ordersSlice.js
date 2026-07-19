import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    { id: '#ORD-001', customer: 'John Doe', product: 'Premium Plan', amount: 299.00, status: 'completed', date: '2026-07-18' },
    { id: '#ORD-002', customer: 'Sarah Smith', product: 'Basic Plan', amount: 99.00, status: 'pending', date: '2026-07-17' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Enterprise', amount: 999.00, status: 'completed', date: '2026-07-16' },
    { id: '#ORD-004', customer: 'Emily Brown', product: 'Premium Plan', amount: 299.00, status: 'cancelled', date: '2026-07-15' },
    { id: '#ORD-005', customer: 'David Wilson', product: 'Basic Plan', amount: 99.00, status: 'completed', date: '2026-07-14' },
    { id: '#ORD-006', customer: 'Lisa Anderson', product: 'Enterprise', amount: 999.00, status: 'pending', date: '2026-07-13' },
    { id: '#ORD-007', customer: 'Tom Harris', product: 'Premium Plan', amount: 299.00, status: 'completed', date: '2026-07-12' },
    { id: '#ORD-008', customer: 'Anna Lee', product: 'Basic Plan', amount: 99.00, status: 'completed', date: '2026-07-11' },
  ],
  filter: 'all',
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = ordersSlice.actions;
export default ordersSlice.reducer;