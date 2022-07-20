import { Box, Button, Typography } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { destroyCookie, parseCookies } from 'nookies';
import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

const PrivateSSRPage: NextPage = () => {
  const { push } = useRouter();

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    destroyCookie(null, 'token', { path: '/' });
    push('/auth/login');
  };

  return (
    <Layout title="Auth | PrivateSSR" color="white">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        padding={3}
        gap={3}
      >
        <Typography variant="h4">You are logged in</Typography>
        <Button variant="contained" onClick={onClick}>
          Logout
        </Button>
      </Box>
    </Layout>
  );
};

export default PrivateSSRPage;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { token } = parseCookies(ctx);

  if (!token) {
    return {
      props: {},
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
