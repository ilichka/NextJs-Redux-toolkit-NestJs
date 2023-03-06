import * as AddS from '@/styles/add.styles';
import { UserFormComponent } from '@/components/user-form';
import { PageBody } from '@/ui-kit/page-body';
import { createUserThunk, User } from '@/slices/users-slice';
import { useDispatch } from 'react-redux';

export default function AddComponent() {
  const dispatch = useDispatch();

  const onSubmit = (data: User) => {
    dispatch(createUserThunk(data));
  };
  return (
    <AddS.AddWrapper>
      <PageBody
        headerComponent={<AddS.HeaderTitle>Add Form</AddS.HeaderTitle>}
        bodyComponent={<UserFormComponent onSubmitCb={onSubmit} />}
      />
    </AddS.AddWrapper>
  );
}
