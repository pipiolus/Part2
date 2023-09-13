import { useState, useEffect } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data);
      });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (checkIfPersonExist(persons, newPerson)) {
      window.alert(
        `${newName} is already added in your phonebook`
      );
      setNewName("");
      setNewNumber("");
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const checkIfPersonExist = (arr, obj) => {
    return arr.some(
      (person) =>
        JSON.stringify(person.name) ===
        JSON.stringify(obj.name)
    );
  };

  const handleNameChange = (e) =>
    setNewName(e.target.value);

  const handleNumberChange = (e) =>
    setNewNumber(e.target.value);

  const handleFilterChange = (e) =>
    setFilter(e.target.value);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().match(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <h2>Add new contact</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <div>
        <h2>Numbers</h2>
        {filteredPersons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default App;
