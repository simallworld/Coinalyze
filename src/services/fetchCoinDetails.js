import axiosInstance from "../utils/axiosInstance"

export async function fetchCoinDetails(id){
try {
    const response = await axiosInstance.get(`/coins/${id}`);
    return response.data;
 }
  catch (error) {
    console.error("Error fetching coin data:", error); 
}
}