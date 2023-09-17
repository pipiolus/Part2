import Search from "./components/Search";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => console.log(response.data));
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Data For Countries</h1>
        <Search value={value} handleValue={handleChange} />
      </div>
    </>
  );
}

export default App;
