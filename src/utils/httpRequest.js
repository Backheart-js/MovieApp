import axios from "axios";
import qs from "qs";

import apiConfig from "../config/apiConfig";

const httpRequest = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        "Content-Type": "application/json",
    },

    paramsSerializer: function (params) {
        return qs.stringify({ ...params, ...{ api_key: apiConfig.apiKey } });
    },
});

httpRequest.interceptors.request.use(async (config) => config);

httpRequest.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        throw error;
    },
);

export default httpRequest;
