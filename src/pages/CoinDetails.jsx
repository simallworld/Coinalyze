import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import currencyStore from "../zustand/store";
import parse from "html-react-parser";
import PageLoader from "../components/PageLoader/PageLoader";
import CoinInfoContainer from "../components/CoinInfo/CoinInfoContainer";

const CoinDetails = () => {
  const { coinId } = useParams();
  const { currency } = currencyStore();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery({
    queryKey: ["coinId", coinId],
    queryFn: () => fetchCoinDetails(coinId),
    cacheTime: 1000 * 60 * 2, // Cache for 2 minutes
    staleTime: 1000 * 60 * 2, // Data is fresh for 2 minutes
    enabled: !!coinId, // Prevents query if coinId is undefined
  });

  if (isLoading) {
    return <PageLoader />;
  }
  if (isError) {
    return (
      <Alert
        message="Error fetching data (Too many requests, try after a while)"
        type="error"
      />
    );
  }

  return (
    <div className="flex flex-col md:flex-row select-none">
      <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
        <img src={coin?.image?.large} alt={coin.name} className="h-52 mb-5" />
        <h1 className="text-4xl font-bold mb-5">{coin?.name}</h1>
        <p className="w-full px-6 py-4 text-justify">
          {parse(coin?.description?.en)}
        </p>

        <div className="w-full flex flex-col md:flex-row justify-around mb-5">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Rank</h2>
            <span className="ml-3 text-xl">{coin?.market_cap_rank}</span>
          </div>

          <div className="flex items-between mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-yellow-400">Current Price</h2>
            <span className="ml-3 text-xl">
              {currency === "usd" ? "$" : "₹"}
              {coin?.market_data?.current_price[currency]}
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full p-6 flex flex-col items-center">
        <CoinInfoContainer coinId={coinId} />
      </div>
    </div>
  );
};

export default CoinDetails;
