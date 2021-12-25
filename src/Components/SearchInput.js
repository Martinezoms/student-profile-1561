function SearchInput({ searchItems }) {
  return (
    <div className="search-input">
      <input type="text" placeholder="Search by name" onChange={(e) => searchItems(e.target.value)} />
    </div>
  );
}

export default SearchInput;
