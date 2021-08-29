import { useState } from "react";
import episodes from "../../src/episodes.json";

export function SearchBar(): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const totalEpisodes = episodes.length;
  const handleSearch = () => setSearchText("");
  return (
    <>
      <input
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <button className="search-button" onClick={handleSearch}>
        {" "}
        Search!
      </button>
      <p className="search-results">
        Displaying {}/{totalEpisodes} episodes
      </p>
      <h1>Hello</h1>
    </>
  );
}
