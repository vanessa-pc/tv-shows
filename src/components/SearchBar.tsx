import episodes from '../../src/episodes.json'

export function SearchBar(searchText: string, setSearchText: React.Dispatch<React.SetStateAction<string>>): JSX.Element {

 
  const totalEpisodes = episodes.length;

  const handleSearch = () => setSearchText("");


  return (
    <>
      <form className="search-results">
      <input className="search-input"
        type="text"
        value={searchText}
        placeholder="Enter a keyword"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      {" "}
      <label className="search-label">Displaying {}/{totalEpisodes} episodes</label>
      {" "} 
      <button className="search-button" onClick={handleSearch} type="submit">
        Reset searchbar
      </button>
      </form>
    </>
  );
}
