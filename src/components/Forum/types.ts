export interface IDataProps {
    id: number;
    name: string;
    title: string;
    date: string;
}

export interface IForumProps {
    title: string;
    data: IDataProps[];
}
