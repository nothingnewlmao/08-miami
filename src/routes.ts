import * as express from 'express';

import {
    createTheme,
    findTheme,
    updateUserThemeById,
} from 'models/UserTheme/controllers';
import { createUser } from 'models/User/controllers';

const router = express.Router();

router.post('/user-theme', (req, res) => {
    const { userid } = req.body;

    findTheme(userid.toString())
        .then((el) => res.json(el))
        .catch(() => res.sendStatus(400));
});

router.post('/add-user', async (req, res) => {
    const { first_name, second_name, login, email, phone, identifier } =
        req.body;

    await createUser(first_name, second_name, login, email, phone, identifier);
    await createTheme('light', identifier);

    await res.sendStatus(200);
});

router.post('/change-theme', async (req, res) => {
    const { theme, id } = req.body;
    const userTheme = await findTheme(id.toString());
    console.log('hello', userTheme);
    updateUserThemeById(userTheme!.id, { theme });
    res.sendStatus(200);
});

export default router;
