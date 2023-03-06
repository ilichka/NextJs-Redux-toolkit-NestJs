import * as S from './users-table.styles';
import Link from 'next/link';
import { Button } from '@/ui-kit/button/button.component';
import { COLORS } from '@/ui-kit/theme';
import { DeleteRowModal } from '@/modals/delete-row-modal/delete-row-modal.component';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteUserThunk,
  sortByUsername,
} from '@/slices/users-slice/users-slice.slice';
import { toast } from 'react-toastify';
import { RootState } from '@/store';
import { User } from '@/slices/users-slice';
import { useState } from 'react';
import { SortStates } from '@/components/users-table/users-table.interface';

export const UsersTable = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState<SortStates>('up');
  const users = useSelector((state: RootState) => state.users.users);
  const status = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);

  const handleDelete = async (user: User) => {
    await dispatch(deleteUserThunk(user.id));
  };

  const handleSort = () => {
    dispatch(sortByUsername(sort));
    setSort((prevState) => (prevState === 'up' ? 'down' : 'up'));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <S.TableWrapper>
      <S.TableHeader>
        <S.StyledTR>
          <S.StyledTH>ID</S.StyledTH>
          <S.StyledTH>Name</S.StyledTH>
          <S.StyledTH onClick={handleSort} sorting>
            Username
          </S.StyledTH>
          <S.StyledTH>Email</S.StyledTH>
          <S.StyledTH>City</S.StyledTH>
          <S.StyledTH>Edit</S.StyledTH>
          <S.StyledTH>Delete</S.StyledTH>
        </S.StyledTR>
      </S.TableHeader>
      <S.StyledTbody>
        {users.map((user) => (
          <S.StyledTR key={user.id}>
            <S.StyledTD>{user.id}</S.StyledTD>
            <S.StyledTD>{user.name}</S.StyledTD>
            <S.StyledTD>{user.username}</S.StyledTD>
            <S.StyledTD>{user.email}</S.StyledTD>
            <S.StyledTD>{user.city}</S.StyledTD>
            <S.StyledTD>
              <Link href={`/edit/${user.id}`}>
                <Button buttonColor={COLORS.ORANGE} title="Edit" />
              </Link>
            </S.StyledTD>
            <S.StyledTD>
              <DeleteRowModal
                buttonColor={COLORS.RED}
                buttonTitle="Delete"
                user={user.name}
                actionCb={() => handleDelete(user)}
              />
            </S.StyledTD>
          </S.StyledTR>
        ))}
      </S.StyledTbody>
    </S.TableWrapper>
  );
};
