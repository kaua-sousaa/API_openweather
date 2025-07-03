import { useState } from "react";
import { Search } from "lucide-react";

const SearchForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Por favor, digite o nome de uma cidade.");
      return;
    }
    onSubmit(city)
    console.log(`Buscando clima para: ${city}`);
  }

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Digite uma cidade..."
        className="w-full rounded-lg border-2 border-slate-300 p-3 text-slate-700 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
      />
      <button
        type="submit"
        className="rounded-lg bg-sky-500 px-3 py-3 font-semibold text-white transition-colors duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 cursor-pointer"
      >
        <Search size={20} className="mx-2 inline-block" />
      </button>
    </form>
  );
};

export default SearchForm;
