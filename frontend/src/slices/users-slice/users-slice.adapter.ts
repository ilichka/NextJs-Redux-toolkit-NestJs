import { User, UserResponse } from '@/slices/users-slice/users-slice.interface';

export const adaptUserResponse = (users: UserResponse[]): User[] =>
  users.map(
    (user: UserResponse): User => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.city,
    }),
  );
