import { searchString } from "../utils/searchString";
import { IEpisode } from "./IEpisode";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

export function EpisodeList(props: { episodes: Array<IEpisode> }): JSX.Element {
  const { episodes } = props;

  const [searchText, setSearchText] = useState("");

  const searchResults = searchString(episodes, searchText);
  const matches = searchResults.length > 0;

  const noMatches = (
    <p className="no-matches">No episodes were found that matched your query!</p>
  );

  // const [ name, season, number, summary ] = episodes
  // const {image: {medium} = {}} = episodes

  return (
    <>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        results={searchResults.length}
        totalEpisodes={episodes.length}
      />
      <div className="episodes">
        {matches
          ? searchResults.map(function (item, index) {
              return (
                <>
                  <div className="episode">
                    <h2 className="title" key={index}>
                      {" "}
                      {item.name} - S{String(item.season).padStart(2, "0")}E
                      {String(item.number).padStart(2, "0")}{" "}
                    </h2>
                    <img
                      className="medium-image"
                      src={item.image.medium}
                      alt=""
                    />
                    <p className="summary">
                      {item.summary.replace(/<[^>]+>/g, "")}
                    </p>
                  </div>
                </>
              );
            })
          : noMatches}
      </div>
    </>
  );
}
