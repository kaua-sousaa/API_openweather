const TemperatureDisplay = ({ label, weatherData, tempPrincipal = false }) => {
  const divFontPrincipal = "text-slate-500";  
  const pPrincipal = "text-7xl font-extrabold";
  const pSpamPrincipal = "text-xl";

  return (
    <div className={`${tempPrincipal ? divFontPrincipal : 'text-color-500'}`}>
      <p className={`${tempPrincipal ? pPrincipal : 'text-4xl font-extrabold'}`}>
        {weatherData}<span className={`"${tempPrincipal ? pSpamPrincipal: "text-sm"} font-normal text-slate-600"`}>°C</span>
      </p>
      <p>{label}</p>
    </div>
  );
};

export default TemperatureDisplay;
