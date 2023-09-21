const Search = ({ handleSearch }) => {
  return (
    <div style={{ fontSize: "1.5rem" }}>
      Find countries: <input onChange={handleSearch} />
    </div>
  );
};
export default Search;
