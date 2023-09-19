import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Country from "./components/Country";

function App() {
  const [value, setValue] = useState("");
  const [all, setAll] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => response.data)
      .then((allCountries) => {
        setAll(allCountries);
      });
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filterArray = (arr, str) => {
    return arr.filter((obj) =>
      obj.name.common.toLowerCase().match(str.toLowerCase())
    );
  };

  console.log(filterArray(all, value));
  return (
    <div>
      <h1>Data For Countries</h1>
      <div>
        <Search value={value} handleValue={handleChange} />
      </div>
      <div>
        <Country countries={filterArray(all, value)} />
      </div>
    </div>
  );
}

export default App;
