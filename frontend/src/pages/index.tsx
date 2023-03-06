import Link from 'next/link';

import * as HomeS from '../styles/home.styles';
import { GlobalStyles } from '@/styles/global.styles';
import { PageBody } from '@/ui-kit/page-body';
import { Button } from '@/ui-kit/button/button.component';
import { COLORS } from '@/ui-kit/theme';
import { UsersTable } from '@/components/users-table';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUsers } from '@/slices/users-slice';
import { IndexProps } from '@/interfaces/index.interface';

export default function Home({ users }: IndexProps) {
  const dispatch = useDispatch();
  dispatch(setUsers(users));
  return (
    <>
      <>
        <GlobalStyles />
        <HomeS.HomeWrapper>
          <PageBody
            headerComponent={
              <>
                <HomeS.HeaderTitle>User List</HomeS.HeaderTitle>
                <Link href="/add">
                  <Button title="Add new" buttonColor={COLORS.BLUE} />
                </Link>
              </>
            }
            bodyComponent={<UsersTable />}
          />
        </HomeS.HomeWrapper>
      </>
    </>
  );
}

export async function getServerSideProps() {
  const users = await axios.get('http://localhost:5000/users');

  return {
    props: {
      users: users.data,
    },
  };
}
