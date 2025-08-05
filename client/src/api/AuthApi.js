import { UserApiClient } from "./ApiClient";

export const registerUser = async (userData) => {
    try {
        const response = await UserApiClient.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await UserApiClient.post("/auth/login", userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const logoutUser = async () => {
    try {
        const response = await UserApiClient.post("/auth/logout");
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
