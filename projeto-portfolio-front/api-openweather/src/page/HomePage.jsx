import { Wind } from 'lucide-react';
import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { searchCity } from '../services/searchCityService';

const HomePage = () => {
    const [weatherData, setWeatherData] = useState({
        city: '',
        description: '',
        temperature: 0,
        feelsLike: 0,
        icon: ''
    })

    const handleSearch = async (city) => {
        try {
            const data = await searchCity(city);
            console.log("Dados do clima:", data);
            if (data) {
                setWeatherData({
                    city: data.name,
                    description: data.weather[0].description,
                    temperature: Math.round(data.main.temp),
                    feelsLike: Math.round(data.main.feels_like),
                    icon: data.weather[0].icon
                });
            }
        } catch (error) {
            console.error("Erro ao buscar dados do clima:", error);
            alert("Não foi possível obter os dados do clima. Tente novamente.");
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 to-slate-200 p-4">
            <div className="w-1/3 rounded-xl bg-white/70 p-8 shadow-lg backdrop-blur-lg border border-slate-200">
                <SearchForm onSubmit={handleSearch}/>

                <div className="mt-8 flex flex-col items-center gap-4 text-center">
                    <div className="text-7xl">                       
                        <Wind size={80} className="text-sky-500" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-slate-800">{weatherData.city}</h1>
                        <p className="mt-1 text-lg text-slate-500">{weatherData.description}</p>
                    </div>
                    <div className="text-7xl font-extrabold text-slate-900">
                        {weatherData.temperature}<span className="align-top text-3xl font-medium text-slate-600">°C</span>
                    </div>
                    <p className="text-lg text-slate-600">Sensação térmica: {weatherData.feelsLike}</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;