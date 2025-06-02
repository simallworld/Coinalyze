import CoinInfo from "./CoinInfo";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../Hooks/useFetchCoinHistory";

const CoinInfoContainer = ({ coinId }) => {
  const {
    historicData,
    isLoading,
    isError,
    setDays,
    setCoinInterval,
    days,
    currency,
  } = useFetchCoinHistory(coinId);

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
    <CoinInfo
      historicData={historicData}
      setDays={setDays}
      setCoinInterval={setCoinInterval}
      days={days}
      currency={currency}
    />
  );
};

export default CoinInfoContainer;
