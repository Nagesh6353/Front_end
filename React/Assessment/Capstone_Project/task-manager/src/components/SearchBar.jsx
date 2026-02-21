const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <input
          type="text"
          className="form-control form-control-sm shadow-sm"
          placeholder="Search by task title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;