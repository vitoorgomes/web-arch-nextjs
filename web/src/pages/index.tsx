import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { ImagesBase, ImagesResponse } from '../components/ImagesBase';
import { api } from '../services/api';

const Home: NextPage = () => {
  const [imagesData, setImagesData] = useState<ImagesResponse>();

  const fetchImages = useCallback(async () => {
    try {
      const { data } = await api.get<ImagesResponse>('/images');
      setImagesData(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <ImagesBase
      date={imagesData?.date}
      images={imagesData?.images}
      title="Client"
    />
  );
};

export default Home;
