import axios from "axios";

const APIKey = '9afc6b1c';
const baseUrl = `https://www.omdbapi.com/?apikey=${APIKey}`;


export const FetchData = async (title) => {
  const response = await axios.get(`${baseUrl}&t=${title}`)
  return response.data
}