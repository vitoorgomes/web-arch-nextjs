import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MouseEvent, useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';

const PrivateCSRPage: NextPage = () => {
  const { push } = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.clear();
    push('/auth/login');
  };

  useEffect(() => {
    const isLogged = localStorage.getItem('token');
    setIsLoggedIn(!!isLogged);

    if (!isLogged) {
      push('/auth/login');
    }
  }, [push]);

  return (
    <Layout title="Auth | PrivateCSR" color="white">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        padding={3}
        gap={3}
      >
        {isLoggedIn && (
          <>
            <Typography variant="h4">This a private page</Typography>
            <Button variant="contained" onClick={onClick}>
              Logout
            </Button>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default PrivateCSRPage;
