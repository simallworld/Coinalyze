import axiosInstance from "../utils/axiosInstance"

export async function fetchCoinData(){
try {
    const response = await axiosInstance.get('/coins/markets?vs_currency=usd');
    console.log("Coin data fetched successfully:", response);
    return response;
 }
  catch (error) {
    console.error("Error fetching coin data:", error); 
}
}