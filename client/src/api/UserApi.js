import ApiClient from "./ApiClient";

export const getCurrentUser = async () => {
    try {
        const response = await ApiClient.get("/users/me");
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
