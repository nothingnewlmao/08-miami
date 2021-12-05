import * as express from 'express';

import { findTheme, updateUserThemeById } from 'models/UserTheme/controllers';
import { createUser } from 'models/User/controllers';

const router = express.Router();

router.post('/user-theme', (req, res) => {
    const data = req.body;
    console.log(data);
    findTheme(64).then((el) => res.json(el));
});

router.post('/add-user', (req, res) => {
    const data = req.body;
    console.log('user', data);

    createUser('Mr', 'Brown'); // { ...data }

    res.sendStatus(200);
});

router.post('/change-theme', (req, res) => {
    const data = req.body;
    console.log(data);
    updateUserThemeById(1, { theme: 'light' });
    res.sendStatus(200);
});

export default router;
