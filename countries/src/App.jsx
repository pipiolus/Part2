import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import CountrysList from "./components/CountrysList";
import CountryDetails from "./components/CountryDetail";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => response.data)
      .then((allCountries) => setCountries(allCountries))
      .catch((err) =>
        alert(
          `ERROR:${err}. It seems that a problem has ocurred. Try reloading the page`
        )
      );
  }, []);

  useEffect(() => {
    setCountryDetails(null);
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filterArr = (arr, str) => {
    return arr.filter((obj) =>
      obj.name.common.toLowerCase().match(str.toLowerCase())
    );
  };
  const filteredCountries = filterArr(countries, search);

  const showCountryDetails = (country) => {
    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
      )
      .then((response) => setCountryDetails(response.data));
  };

  return (
    <div>
      <h1>Data For Countries</h1>
      <Search value={search} handleSearch={handleChange} />
      {countryDetails !== null ? (
        <CountryDetails country={countryDetails} />
      ) : (
        <CountrysList
          countries={filteredCountries}
          show={showCountryDetails}
        />
      )}
    </div>
  );
}

export default App;
