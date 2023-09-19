const Country = ({ countries }) => {
  if (countries.length === 0 || countries.length === 250) return null;

  if (countries.length >= 10) {
    return (
      <div>
        <h4>Too many matches. Try being more specific...</h4>
      </div>
    );
  } else if (countries.length > 1 && countries.length < 10) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.idd.suffixes[0]}>
            <b>{country.name.common}</b>
          </li>
        ))}
      </ul>
    );
  } else {
    const country = countries[0];
    const languages = Object.values(country.languages);
    return (
      <>
        <h2>{country.name.common}</h2>
        <div>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area} km²</p>
        </div>
        <div>
          <h3>Languages:</h3>
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
          <div>
            <h3>Flag:</h3>
            <div className="flag">{country.flag}</div>
          </div>
        </div>
      </>
    );
  }
};
export default Country;
