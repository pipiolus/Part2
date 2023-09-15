const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <em>
        <b>Filter shown with:</b>
      </em>
      <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
