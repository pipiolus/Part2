const CountrysList = ({ countries, show }) => {
  if (countries.length === 0 || countries.length === 250) return null;

  if (countries.length === 1) {
    const country = countries[0];
    const languages = Object.values(country.languages);
    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>
          <p>Continent(s): {country.continents}</p>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area} km²</p>
        </div>
        <div>
          <h3>Languages</h3>
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
        <div className="flag">{country.flag}</div>
      </div>
    );
  } else if (countries.length > 1 && countries.length < 10) {
    return (
      <div>
        {countries.map((country, index) => (
          <div key={index}>
            <p>{country.name.common}</p>
            <button onClick={() => show(country.name.common)}>
              show
            </button>
          </div>
        ))}
      </div>
    );
  } else if (countries.length >= 10) {
    return (
      <div>
        <h4>Too many matches. Please be more specific...</h4>
      </div>
    );
  } else return null;
};
export default CountrysList;
