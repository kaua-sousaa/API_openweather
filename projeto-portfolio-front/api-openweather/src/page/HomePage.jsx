import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { searchCity } from '../services/searchCityService';
import TemperatureDisplay from '../components/TemperatureDisplay';

const HomePage = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null)

    const handleSearch = async (city) => {
        setLoading(true);
        setError(null);
        setWeatherData(null);
        try {
            const data = await searchCity(city);
            console.log("Dados do clima:", data);
            if (data) {
                setWeatherData({
                    city: data.name,
                    description: data.weather[0].description,
                    temperature: Math.round(data.main.temp),
                    temperature_max: Math.round(data.main.temp_max),
                    temperature_min: Math.round(data.main.temp_min),
                    feelsLike: Math.round(data.main.feels_like),
                    icon: data.weather[0].icon
                });
            }
        } catch (error) {
            console.error("Erro ao buscar dados do clima:", error);
            setError("Não foi possível encontrar a cidade. Por favor, verifique o nome e tente novamente.");
        } finally{
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 to-slate-200 p-4">
            <div className="w-1/3 rounded-xl bg-white/70 p-8 shadow-lg backdrop-blur-lg border border-slate-200">
                <SearchForm onSubmit={handleSearch}/>
                {loading && <p className="text-sky-600">Buscando...</p>}
                {error && <p className="text-red-600">{error}</p>}
                
                {!loading && !error && !weatherData && (
                    <div className="mt-8 text-center">
                        <p className="text-lg text-slate-600">Digite o nome de uma cidade para ver o clima.</p>
                    </div>
                )}
                {weatherData && (
                    <div className="mt-8 flex flex-col items-center gap-4 text-center">          
                        <div className="text-7xl">                       
                            <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-slate-800">{weatherData.city}</h1>
                            <p className="mt-1 text-lg text-slate-500">{weatherData.description}</p>
                        </div>
                        
                        <div className='flex items-center space-x-14'>
                            <TemperatureDisplay label="Mínima" weatherData={weatherData.temperature_min}/>
                            <TemperatureDisplay label="Atual"weatherData={weatherData.temperature} tempPrincipal={true}/>
                            <TemperatureDisplay label="Máxima" weatherData={weatherData.temperature_max}/>                      
                        </div>
                        <p className="text-lg text-slate-600">Sensação térmica: {weatherData.feelsLike}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;