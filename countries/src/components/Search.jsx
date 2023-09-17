const Search = ({ handleValue }) => {
  return (
    <div>
      Find countries: <input onChange={handleValue} />
    </div>
  );
};
export default Search;
