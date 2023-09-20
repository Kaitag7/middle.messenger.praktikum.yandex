import express from 'express';
import { join, resolve } from 'path';

const app = express();
const PORT = 3000;
const path = resolve('dist');

app.use(express.static(path));

app.get('/', (req, res) => {
  res.sendFile(join(path, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}!`);
});
