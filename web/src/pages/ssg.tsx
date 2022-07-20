import type { GetStaticProps, NextPage } from 'next';
import { ImagesBase, ImagesResponse } from '../components/ImagesBase';
import { api } from '../services/api';

type SSGPageProps = ImagesResponse;

const SSGPage: NextPage<SSGPageProps> = ({ date, images }) => {
  return <ImagesBase date={date} images={images} title="SSG" />;
};

export default SSGPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get<ImagesResponse>('/images');

    return {
      props: {
        ...data,
      },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};
