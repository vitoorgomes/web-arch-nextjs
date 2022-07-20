/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';
import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  title: string;
  color?: any;
};

export const Layout: FC<LayoutProps> = ({ children, title, color }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: color ?? 'black',
          gap: 2,
          py: 2,
        }}
      >
        {children}
      </Box>
    </>
  );
};
