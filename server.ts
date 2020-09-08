import express, { Application } from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import { authRouter } from './routes';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const applyMiddleware = (app: Application) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
};

const applyRoutes = (app: Application) => {
    app.use(authRouter);
};

const startServer = async () => {
    await nextApp.prepare();
    const app = express();

    applyMiddleware(app);
    applyRoutes(app);

    app.get('*', (req, res) => handle(req, res));

    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
};

startServer();
