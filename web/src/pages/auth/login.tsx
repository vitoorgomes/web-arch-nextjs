import { Box, Button, TextField, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import { v4 } from 'uuid';
import { destroyCookie, setCookie } from 'nookies';
import { Layout } from '../../components/Layout';

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('email@email.com');
  const [password, setPassword] = useState('password123');

  const { push } = useRouter();

  const onClickLocalStorage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    destroyCookie(null, 'token', { path: '/' });
    localStorage.setItem('token', v4());
    push('/auth/private-csr');
  };

  const onClickCookies = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.clear();
    setCookie(null, 'token', v4(), { path: '/' });
    push('/auth/private-ssr');
  };

  return (
    <Layout title="Auth | Public" color="white">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        padding={3}
        gap={3}
      >
        <Typography variant="h4">Login</Typography>
        <TextField
          value={email}
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
          sx={{ borderColor: 'white' }}
        />
        <TextField
          value={password}
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <Button variant="contained" onClick={onClickLocalStorage}>
          Submit LocalStorage
        </Button>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          onClick={onClickCookies}
        >
          Submit Cookies
        </Button>
      </Box>
    </Layout>
  );
};

export default LoginPage;
