import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistoricData } from "../services/fetchCoinHistoricData";
import currencyStore from "../zustand/store";

function useFetchCoinHistory(coinId) {
  const { currency } = currencyStore();
  const [days, setDays] = useState(1);
  const [interval, setCoinInterval] = useState("");

  const {
    data: historicData,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ["coinHistoricData", coinId, currency, days, interval],
    queryFn: async () =>
      await fetchCoinHistoricData(coinId, interval, days, currency),
    cacheTime: 1000 * 60 * 2, // Cache for 2 minutes
    staleTime: 1000 * 60 * 2, // Data is fresh for 2 minutes
  });
  return {
    historicData,
    isLoading,
    isError,
    setDays,
    setCoinInterval,
    days,
    currency,
  };
}

export default useFetchCoinHistory;
