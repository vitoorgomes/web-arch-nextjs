import type { GetServerSideProps, NextPage } from 'next';
import { ImagesBase, ImagesResponse } from '../components/ImagesBase';
import { api } from '../services/api';

type SSRPageProps = ImagesResponse;

const SSRPage: NextPage<SSRPageProps> = ({ date, images }) => {
  return <ImagesBase date={date} images={images} title="SSR" />;
};

export default SSRPage;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get<ImagesResponse>('/images');

    return {
      props: {
        ...data,
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};
