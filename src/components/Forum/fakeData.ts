import { IForumProps } from './types';

export const fakeElements: IForumProps[] = [
    {
        title: 'Животные',
        data: [
            {
                id: 1,
                name: 'Алла',
                title: 'Пингвины',
                date: new Date(Date.now()).toLocaleString(),
            },
            {
                id: 2,
                name: 'Данна',
                title: 'Грифон',
                date: new Date(Date.now()).toLocaleString(),
            },
            {
                id: 3,
                name: 'Малафей',
                title: 'Выдры',
                date: new Date(Date.now()).toLocaleString(),
            },
        ],
    },
    {
        title: 'Насекомые',
        data: [
            {
                id: 4,
                name: 'Данил',
                title: 'Жук',
                date: new Date(Date.now()).toLocaleString(),
            },
        ],
    },
];
