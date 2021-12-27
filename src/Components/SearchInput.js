function SearchInput({ searchItems, setNameSearchInput }) {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => {
          searchItems(e.target.value);
          setNameSearchInput(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchInput;
