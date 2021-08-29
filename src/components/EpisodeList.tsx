import { searchString } from "../utils/searchString";
import { IEpisode } from "./IEpisode";
import { useState } from "react";
import { SearchBar } from "./SearchBar";



export function EpisodeList(props: { episodes: Array<IEpisode> }): JSX.Element {

    const { episodes } = props;
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');

    const [searchText, setSearchText] = useState(query || "");

    const searchResults = searchString(episodes, searchText);

  // const [ name, season, number, summary ] = episodes
  // const {image: {medium} = {}} = props.episodes
  // console.log(typeof(episodes))
  // console.log(episodes)
  // console.log(props)
  return (
    <>
    <SearchBar searchText={searchText} setSearchText={setSearchText} />
    <div className="episodes">
      {searchResults.map(function (item, index) {
        return (
          <>
            <div className="episode">
              <h2 className="title" key={index}>
                {" "}
                {item.name} - S{String(item.season).padStart(2, "0")}E
                {String(item.number).padStart(2, "0")}{" "}
              </h2>
              <img className="medium-image" src={item.image.medium} alt="" />
              <p className="summary">{item.summary.replace(/<[^>]+>/g, "")}</p>
            </div>
          </>
        );
      })}
    </div>
  </>
  );
}
