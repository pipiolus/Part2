import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState(null);

  return (
    <div>
      <h1>Data For Countries</h1>
    </div>
  );
}

export default App;
