import Search from "./components/Search";
import { useState } from "react";
import axios from "axios";

function App() {
  axios
    .get(
      "https://studies.cs.helsinki.fi/restcountries/api/name/Argentina"
    )
    .then((response) => {
      const country = response.data;
      console.log(
        country.name.common,
        country.capital[0],
        country.languages
      );
    });

  return (
    <>
      <div>
        <h1>Data For Countries</h1>
        <Search />
      </div>
    </>
  );
}

export default App;
