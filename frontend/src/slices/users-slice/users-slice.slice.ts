import {
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

import { adaptUserResponse } from '@/slices/users-slice/users-slice.adapter';
import {
  User,
  UsersSliceState,
} from '@/slices/users-slice/users-slice.interface';
import { toast } from 'react-toastify';

export const updateUserThunk = createAsyncThunk(
  'users/createAsyncThunk',
  async (data: User) => {
    const response = await axios.put(
      `http://localhost:5000/users/${data.id}`,
      data,
    );
  },
);

export const createUserThunk = createAsyncThunk(
  'users/createUserThunk',
  async (data: User) => {
    const response = await axios.post(`http://localhost:5000/users`, data);
  },
);

export const deleteUserThunk = createAsyncThunk(
  'users/deleteUserThunk',
  async (id: number) => {
    const response = await axios.delete(`http://localhost:5000/users/${id}`);
    return adaptUserResponse(response.data);
  },
);

const initialState: UsersSliceState = {
  users: [],
  status: 'idle',
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (
      state: Draft<UsersSliceState>,
      action: PayloadAction<User[]>,
    ) => {
      return {
        ...state,
        users: action.payload,
      };
    },
    sortByUsername: (state: Draft<UsersSliceState>, action) => {
      state.users.sort((a: User, b: User) => {
        if (action.payload === 'up') {
          return a.username.localeCompare(b.username);
        } else {
          return b.username.localeCompare(a.username);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.users = action.payload;
        toast.success('User deleted.');
      })
      .addCase(deleteUserThunk.rejected, (state) => {
        toast.error('Error during request');
      })
      .addCase(createUserThunk.fulfilled, (state, action) => {
        toast.success('User created.');
      })
      .addCase(createUserThunk.rejected, (state) => {
        toast.error('Error during request');
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        toast.success('User updated.');
      })
      .addCase(updateUserThunk.rejected, (state) => {
        toast.error('Error during request');
      });
  },
});

export const { setUsers, sortByUsername } = usersSlice.actions;
export default usersSlice.reducer;
