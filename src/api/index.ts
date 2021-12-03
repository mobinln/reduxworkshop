import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BaseUrl } from "./config";

export const apiAgent = Axios.create({
    baseURL: BaseUrl,
});

export const get = async (url: string, config?: AxiosRequestConfig) => {
    const onSuccess = (response: AxiosResponse) => {
        return response.data;
    };

    const onError = (error: AxiosResponse) => {
        throw error;
    };

    try {
        const response = await apiAgent.get(url, config);
        return onSuccess(response);
    } catch (error: any) {
        return onError(error);
    }
};
