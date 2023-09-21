import CountryDetails from "./CountryDetail";

const CountrysList = ({ countries, show }) => {
  if (countries.length === 0 || countries.length === 250) return null;

  if (countries.length === 1) {
    const country = countries[0];
    return (
      <>
        <CountryDetails country={country} />
      </>
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
