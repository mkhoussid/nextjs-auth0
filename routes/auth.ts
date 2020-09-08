import auth0 from '../utils/initAuth0';
import { Router } from 'express';

const router = Router();

router.get('/login', async (req, res) => {
    try {
        console.log('Entered!');
        // @ts-ignore
        await auth0.handleLogin(req, res);
    } catch (error) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
});

router.get('/callback', async (req, res) => {
    try {
        // @ts-ignore
        await auth0.handleCallback(req, res, { redirectTo: '/' });
    } catch (error) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
});

export default router;
