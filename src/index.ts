import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import UserRouter from './user/user.route';
import {port, log, v1} from './config';
import { ErrorHandler, NotFoundHandler } from './handler';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use(v1, UserRouter);
app.use(ErrorHandler);
app.use(NotFoundHandler);

app.listen(port, (): void => log(`Server running on port ${port}`));

export default app;