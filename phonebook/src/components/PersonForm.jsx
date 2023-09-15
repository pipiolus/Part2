const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <div className="form">
      <form onSubmit={addPerson}>
        <div className="input">
          <b>name:</b>
          <input
            value={newName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="input">
          <b>number:</b>
          <input
            value={newNumber}
            onChange={handleNumberChange}
            minLength={7}
            maxLength={12}
            required
          />
        </div>
        <div>
          <button className="input add btn" type="submit">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
