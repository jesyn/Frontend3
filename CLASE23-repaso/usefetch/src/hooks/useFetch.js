import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios(url);
                setApiData(response.data.quote)
            } 
            catch (error) {
                setErrorMessage(error.message);
            }
            finally{
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { isLoading, apiData, errorMessage };

};

export default useFetch;