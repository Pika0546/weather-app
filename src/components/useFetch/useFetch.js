import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
    // const [isError, setIsError] = useState(false);


	const getData = useCallback(async () => {
        let response = "";
        let isError = false;
		 try {
            response = await fetch(url);
         } catch (error) {
            isError = true;
         }
         const tempWeather = await response.json();
         if(isError){
            setData({});
         }else{
             setData(tempWeather);
         }
         setLoading(false);
	}, [url]);

	useEffect(() => {
		getData();
	}, [url, getData]);
	return { loading, data };
};
