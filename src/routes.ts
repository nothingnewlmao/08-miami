import * as express from 'express';

import { dispatchOrmUserActions } from 'models/User/controllers';

const router = express.Router();

router.get('/orm-actions', (_, res) => {
    dispatchOrmUserActions();

    res.send("orm-actions' response");
});

router.get('/topics', (_, res) => {
    res.send('topics');
});

export default router;
