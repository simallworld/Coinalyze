import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

const CoinTable = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoinData(page, "usd"),
    retry: 2, // Retry fetching data 2 times on failure
    retryDelay: 1000, // Retry after 1 second
    cacheTime: 1000 * 60 * 2, // Cache for 2 minutes
  });

  useEffect(() => {
    console.log("Coin data fetched:", data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      Coin Table <button onClick={() => setPage(page + 1)}>Click</button> {page}
    </>
  );
};

export default CoinTable;
