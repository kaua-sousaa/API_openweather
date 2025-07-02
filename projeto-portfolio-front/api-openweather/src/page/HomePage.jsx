import { Search, Wind } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 to-slate-200 p-4">
            <div className="w-1/3 rounded-xl bg-white/70 p-8 shadow-lg backdrop-blur-lg border border-slate-200">
                <form action="" className="flex items-center gap-4">
                    <input type="text" placeholder="Digite uma cidade..."className="w-full rounded-lg border-2 border-slate-300 p-3 text-slate-700 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500"/>
                    <button type="submit" className="rounded-lg bg-sky-500 px-3 py-3 font-semibold text-white transition-colors duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 cursor-pointer">
                        <Search size={20} className="mx-2 inline-block"/>
                    </button>
                </form>

                <div className="mt-8 flex flex-col items-center gap-4 text-center">
                    <div className="text-7xl">                       
                        <Wind size={80} className="text-sky-500" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-slate-800">Rio de Janeiro</h1>
                        <p className="mt-1 text-lg text-slate-500">Névoa</p>
                    </div>
                    <div className="text-7xl font-extrabold text-slate-900">
                        25<span className="align-top text-3xl font-medium text-slate-600">°C</span>
                    </div>
                    <p className="text-lg text-slate-600">Sensação térmica: 19°C</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;