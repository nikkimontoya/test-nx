export interface ISignAuthPayload {
    username: string;
    password: number;
}

export interface ISignAuthResponse {
    accessToken: string;
    expiresIn: number;
    id: number;
}
