function SearchTag({ searchTags, setTagSearchInput }) {
  return (
    <div className="search-tag">
      <input
        type="text"
        placeholder="Search by tag"
        onChange={(e) => {
          searchTags(e.target.value);
          setTagSearchInput(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchTag;
