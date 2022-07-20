import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import { FC } from 'react';
import { Layout } from '../Layout';

export type ApiImageData = {
  id: string;
  alt: string;
  src: string;
};

export type ImagesResponse = {
  date: string;
  images: ApiImageData[];
};

type ImagesBaseProps = {
  images?: ApiImageData[];
  date?: string;
  title: string;
};

export const ImagesBase: FC<ImagesBaseProps> = ({ images, date, title }) => {
  return (
    <Layout title={title}>
      <Typography variant="h4" color="white">{`Timestamp: ${
        date && format(new Date(date), 'HH:mm:ss:SSS')
      }`}</Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        maxWidth="1000px"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        {images?.map(({ id, src, alt }) => (
          <Grid item key={id}>
            <Image src={src} alt={alt} width={300} height={300} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};
