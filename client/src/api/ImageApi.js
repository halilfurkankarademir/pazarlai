import ApiClient from "./ApiClient";

export const uploadImage = async (formData) => {
    try {
        const response = await ApiClient.post(
            "/image/image-generation",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
