import { useEffect, useState } from "react";
import FetchData from './../../../custom_hook/src/Components/FetchData';

export function useFetch(fetchFn, initialData) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialData);


  useEffect(() => {
    async function fetchData() {
        
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({message: error.message || "Failed to fetch data."});
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  }
}
