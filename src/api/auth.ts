import { post } from ".";

export interface loginInterface {
    username: string;
    password: string;
}

export const login = (data: loginInterface) => {
    return post("/auth/login", data);
};
