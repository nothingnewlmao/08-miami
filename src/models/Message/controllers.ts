import { Message, dbConnect } from 'initSequelize';

export async function createMsg(text: string, UserId: number, TopicId: number) {
    return Message.create({ text, UserId, TopicId });
}

export function dispatchOrmMsgActions() {
    dbConnect()
        .then(async () => {
            await createMsg('some message', 1, 1);
        })
        .catch((e) => {
            console.log(`creating msg error: ${e}`);
        });
}
