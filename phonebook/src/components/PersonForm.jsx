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
            placeholder="Min of 3 letters"
          />
        </div>
        <div className="input">
          <b>number:</b>
          <input
            maxLength={13}
            value={newNumber}
            onChange={handleNumberChange}
            placeholder="xxx-xxxxxxx or xx-xxxxxxxx"
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
