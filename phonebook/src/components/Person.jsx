const Person = ({ person, handleDelete }) => {
  return (
    <div className="person">
      <b>
        {person.name} : {person.number} {" -- "}
      </b>
      <button className="btn delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Person;
