import { useState } from "react";
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

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      <div className="w-full bg-orange-600 flex flex-row justify-center text-black py-4 px-4 font-semibold items-center rounded-sm">
        {/* Header of the table */}
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24h Change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-[80vw] mx-auto">
        {isLoading && <div>Loading...</div>}
        {data &&
          data.map((coin) => {
            return (
              <div
                key={coin.id}
                className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
              >
                {/*Coin row*/}
                <div className="flex flex-row items-center justify-start gap-3 basis-[35%]">
                  {/*Coin name and image*/}
                  <div className="w-[5rem] h-[5rem]">
                    <img
                      src={coin.image}
                      alt="coinSymbol"
                      className="w-full h-full"
                    />
                    {/*Coin image*/}
                  </div>
                  <div className="flex flex-col">
                    {/*Coin name*/}
                    <span className="text-2xl">{coin.name}</span>
                    <span className="text-xl text-gray-400">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="basis-[25%]">
                  {/*Coin Price*/}
                  {coin.high_24h}
                </div>
                <div className="basis-[20%]">
                  {/*Coin price_change_24h*/}
                  {coin.price_change_24h}
                </div>
                <div className="basis-[20%]">
                  {/*Coin market_cap*/}
                  {coin.market_cap}
                </div>
              </div>
            );
          })}
      </div>

      {/* Buttons */}

      <div className="flex gap-4 justify-center items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary btn-wide text-white text-2xl"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-secondary btn-wide text-white text-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CoinTable;
