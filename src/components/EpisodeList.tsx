import { searchString } from "../utils/searchString";
import { IEpisode } from "./IEpisode";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { DropdownMenu } from "./DropdownMenu";
import { Episodes } from "./Episodes";

export function EpisodeList({episodes}: { episodes: Array<IEpisode> }): JSX.Element {

  const [searchText, setSearchText] = useState("");

  const searchResults = searchString(episodes, searchText);

  return (
    <>
      <div className="form">
        <DropdownMenu episodes={episodes} setSearchText={setSearchText} />
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          results={searchResults.length}
          totalEpisodes={episodes.length}
        />
        <Episodes episodes={episodes} searchResults={searchResults} />
      </div>
    </>
  );
}
