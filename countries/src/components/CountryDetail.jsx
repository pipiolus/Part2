const CountryDetails = ({ country }) => {
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
};
export default CountryDetails;
