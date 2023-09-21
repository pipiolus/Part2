import CapitalWeather from "./CapitalWeather";

const CountryDetails = ({ country }) => {
  const languages = Object.values(country.languages);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <p>Continent: {country.continents}</p>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km²</p>
      </div>
      <div>
        <h2>Languages:</h2>
        <div>
          {languages.map((lang, index) => (
            <p key={index}>{lang}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>Flag:</h2>
        <div className="flag">{country.flag}</div>
        <CapitalWeather country={country} />
      </div>
    </div>
  );
};
export default CountryDetails;
