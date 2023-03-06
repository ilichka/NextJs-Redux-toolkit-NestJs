import * as Edit from '@/styles/edit.styles';
import { PageBody } from '@/ui-kit/page-body';
import { UserFormComponent } from '@/components/user-form';
import axios from 'axios';
import { updateUserThunk, User } from '@/slices/users-slice';
import { useDispatch } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import { EditProps } from '@/interfaces/edit.interface';

export default function EditComponent({ user }: EditProps) {
  const dispatch = useDispatch();

  const onSubmit = (data: User) => {
    dispatch(updateUserThunk({ ...data, id: user.id }));
  };
  return (
    <Edit.EditWrapper>
      <PageBody
        headerComponent={<Edit.HeaderTitle>Edit Form</Edit.HeaderTitle>}
        bodyComponent={<UserFormComponent user={user} onSubmitCb={onSubmit} />}
      />
    </Edit.EditWrapper>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const user = await axios.get(
    `http://localhost:5000/users/${context?.params?.id}`,
  );
  if (!user.data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user: user.data,
    },
  };
};
