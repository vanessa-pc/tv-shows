export function SearchBar(props: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  results: number;
  totalEpisodes: number;
}): JSX.Element {
  const handleSearch = () => props.setSearchText("");

  return (
    <div className="form">
      <form className="search-results">
        <input
          className="search-input"
          type="text"
          value={props.searchText}
          placeholder="Enter a keyword"
          onChange={(event) => {
            props.setSearchText(event.target.value);
          }}
        />{" "}
        <label className="search-label">
          Displaying {props.results}/{props.totalEpisodes} episodes
        </label>{" "}
        <button className="search-button" onClick={handleSearch} type="submit">
          Back to full episode list
        </button>
      </form>
    </div>
  );
}
