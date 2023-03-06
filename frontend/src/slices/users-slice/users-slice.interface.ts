export type UserFetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
}

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
}

export interface UsersSliceState {
  users: User[];
  status: UserFetchStatus;
  error: string;
}
