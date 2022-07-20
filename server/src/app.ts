import express from 'express';
import cors from 'cors';

import { imagesDb } from 'db/images.db';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/images', (_, res) => {
  setTimeout(
    () => res.status(200).json({ date: new Date(), images: imagesDb }),
    500
  );
});

app.listen(8080, () => console.log('Server started on port 8080'));
