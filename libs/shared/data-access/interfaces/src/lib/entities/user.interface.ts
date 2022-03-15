export interface IUser {
    id: number;
    created: string;
    updated: string;
    email: string;
    phone?: string;
    password: string;
    username: string;
    nickname?: string;
}
