import { useParams } from "react-router-dom";

const CoinDetails = () => {

    const {coinId} = useParams();

    return (
        <>
        CoinsDetails Page {coinId}
        </>
    )
}

export default CoinDetails;