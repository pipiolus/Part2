import { useState, useEffect } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import Error from "./components/Error";
import personService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService
      .getAllPersons()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (!personService.checkIfPersonExist(persons, newPerson)) {
      personService.createPerson(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
      setMessage(`"${newPerson.name}" added successfully`);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } else {
      if (
        window.confirm(
          `${newName} is already added in your notebook. Replace old number with a new one?`
        )
      ) {
        const id = persons.find(
          (person) => person.name === newName
        ).id;
        const person = persons.find((person) => person.id === id);
        const changedPerson = {
          ...person,
          number: newNumber,
        };
        personService
          .updateNumber(id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== id ? p : returnedPerson))
            );
            setNewName("");
            setNewNumber("");
            setMessage(
              `${changedPerson.name} was updated succesfully`
            );
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          })
          .catch(() => {
            setErrorMessage(
              `ERROR: ${newPerson.name} was already deleted from server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000);
            setPersons(persons.filter((person) => person.id !== id));
            setNewName("");
            setNewNumber("");
          });
      }
    }
  };

  const handleNameChange = (e) => setNewName(e.target.value);

  const handleNumberChange = (e) => setNewNumber(e.target.value);

  const handleFilterChange = (e) => setFilter(e.target.value);

  const handleDeletePerson = (id, person) => {
    if (window.confirm(`Delete "${person}" from your contacts?`)) {
      personService.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().match(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <Error message={errorMessage} />
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
          <Person
            key={person.id}
            person={person}
            handleDelete={() =>
              handleDeletePerson(person.id, person.name)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
