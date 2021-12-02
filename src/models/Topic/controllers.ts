import { Topic, dbConnect } from 'initSequelize';

export async function createTopic(title: string) {
    return Topic.create({ title });
}

export async function getTopics() {
    return Topic.findAll({
        attributes: ['title'],
    });
}

export function dispatchOrmTopicActions() {
    dbConnect()
        .then(async () => {
            await createTopic('some topic');
            await createTopic('some topic2');
            await createTopic('some topic3');

            await getTopics().then((res) => {
                console.log(res);
            });
        })
        .catch((e) => {
            console.log(`creating topic error: ${e}`);
        });
}
