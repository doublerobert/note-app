import 'dotenv/config';
import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import notesRoutes from './routes/notes.ts';
import userRoutes from './routes/users.ts';
import morgan from 'morgan';
import createHttpError, { isHttpError } from 'http-errors';
import session from 'express-session';
import env from './util/validateEnv.ts';
import MongoStore from 'connect-mongo';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: env.MONGO_CONNECTION_STRING,
    }),
  }),
);

app.use('/api/users', userRoutes);
app.use('/api/notes', notesRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createHttpError(404, 'Endpoint not found'));
});

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: unknown, req: Request, res: Response, next: NextFunction): void => {
    console.error(error);
    let errorMessage = 'An unknown error occurred';
    let statusCode = 500;
    // if (error instanceof Error) errorMessage = error.message;
    if (isHttpError(error)) {
      statusCode = error.status;
      errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
  },
);

export default app;
