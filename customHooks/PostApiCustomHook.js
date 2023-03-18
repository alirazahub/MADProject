import { useState } from "react";
import axios from "axios";
const usePostApi = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const postRequest = async (postData) => {
        setLoading(true);
        try {
            const response = await axios.post(url, postData);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, postRequest };
};

export default usePostApi;