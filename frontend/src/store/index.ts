import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import usersReducer from '../slices/users-slice/users-slice.slice';

import type {} from 'redux-thunk/extend-redux';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
