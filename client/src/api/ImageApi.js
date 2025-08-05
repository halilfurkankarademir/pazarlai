import { ImageApiClient } from "./ApiClient";

export const uploadImage = async (formData) => {
    try {
        const response = await ImageApiClient.post("/pazarlai", formData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
