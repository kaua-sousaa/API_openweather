//const API_BASE_URL = "http://localhost:8080";
const API_BASE_URL = import.meta.env.VITE_API_URL;
import axios from 'axios';

export const searchCity = async (cityName) => {
    try {
        if (!API_BASE_URL){
            console.error("API_BASE_URL não está definido. Verifique as variáveis de ambiente.");
            throw new Error("API_BASE_URL não está definido.");
        }
        const apiURL = `${API_BASE_URL}/api/dados-clima/${cityName}`

        const response = await axios.get(apiURL)

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar a cidade:", error);
        throw error;
    }
}