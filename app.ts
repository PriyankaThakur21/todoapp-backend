import express from 'express';
const app = express();

import todoRoutes from './routes/todo'

app.use(express.json());

app.use(todoRoutes);

app.listen(8080);