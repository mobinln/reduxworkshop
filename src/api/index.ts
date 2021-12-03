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

export const post = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const onSuccess = (response: AxiosResponse) => {
        return response.data;
    };

    const onError = (error: AxiosResponse) => {
        throw error;
    };

    try {
        const response = await apiAgent.post(url, data, config);
        return onSuccess(response);
    } catch (error:any) {
        throw onError(error);
    }
};
