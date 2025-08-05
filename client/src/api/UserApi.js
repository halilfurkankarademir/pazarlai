import { UserApiClient } from "./ApiClient";

export const getCurrentUser = async () => {
    try {
        const response = await UserApiClient.get("/users/me");
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getGenerationsByCurrentUser = async () => {
    try {
        const response = await UserApiClient.get("/generations/me");
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getGenerationById = async (id) => {
    try {
        const response = await UserApiClient.get(`/generations/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
export const deleteGenerationById = async (id) => {
    try {
        const response = await UserApiClient.delete(`/generations/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
