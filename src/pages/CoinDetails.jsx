import { useParams } from "react-router-dom";

const CoinDetails = () => {

    const {coinId} = useParams();

    return (
        <>
        Coins Details Page {coinId}
        </>
    )
}

export default CoinDetails;