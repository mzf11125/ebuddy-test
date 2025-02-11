import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    // Add reducers here
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type { } from '@reduxjs/toolkit/query/react'; // Fix TS isolatedModules error