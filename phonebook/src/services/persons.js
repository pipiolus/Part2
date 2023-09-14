import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPerson = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  axios.delete(`${baseUrl}/${id}`);
};

const updateNumber = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request.then((response) => response.data);
};

const checkIfPersonExist = (arr, obj) => {
  return arr.some(
    (person) =>
      JSON.stringify(person.name) ===
      JSON.stringify(obj.name)
  );
};

export default {
  getAllPersons,
  createPerson,
  deletePerson,
  updateNumber,
  checkIfPersonExist,
};
