const API_BASE_URL = "http://localhost:8080";
import axios from 'axios';

export const searchCity = async (cityName) => {
    try {
        const apiURL = `${API_BASE_URL}/api/dados-clima/${cityName}`

        const response = await axios.get(apiURL)

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar a cidade:", error);
        throw error;
    }
}