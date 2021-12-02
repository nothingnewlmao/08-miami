import * as express from 'express';

import { dispatchOrmUserActions } from 'models/User/controllers';
import { dispatchOrmMsgActions } from 'models/Message/controllers';
import { dispatchOrmTopicActions } from 'models/Topic/controllers';

const router = express.Router();

router.get('/users', (_, res) => {
    dispatchOrmUserActions();
    res.send('users');
});

router.get('/topics', (_, res) => {
    dispatchOrmTopicActions();
    res.send('topics');
});

router.get('/messages', (_, res) => {
    dispatchOrmMsgActions();
    res.send('messages');
});

export default router;
