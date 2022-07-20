import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';

const PublicPage: NextPage = () => {
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
        <Typography variant="h4">This is a public page</Typography>
        <Link href="/auth/login" passHref>
          <Button variant="outlined" component="a">
            Go To Login
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default PublicPage;
