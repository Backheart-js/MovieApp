import axios from "axios";
import queryString from 'query-string';

import apiConfig from "./apiConfig";

const httpRequest = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString({...params, api_key: apiConfig.apiKey}),
})

export const get = async (path) => {
    const response = await httpRequest.get(path)

    return response.data;
}

export default httpRequest;