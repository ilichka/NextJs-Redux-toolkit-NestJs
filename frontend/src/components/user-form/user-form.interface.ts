import { User } from '@/slices/users-slice';

export interface UserFormProps {
  user?: User;
  onSubmitCb?: (data: User) => void;
}
