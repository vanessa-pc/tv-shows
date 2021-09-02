import { IEpisode } from "./IEpisode";
import { image } from "../../src/images/mauricio-santos-N1gFsYf9AI0-unsplash"

export function Episodes(props: {
  episodes: IEpisode[];
  searchResults: IEpisode[];
}): JSX.Element {
  const { searchResults } = props;

  const matches = searchResults.length > 0;

  const noMatches = (
    <p className="no-matches">
      No episodes were found that matched your query!
    </p>
  );

  return (
    <div className="episodes">
      {matches
        ? searchResults.map(function (episode, index) {
            return (
              <>
                <div className="episode">
                  <h2 className="title" key={index}>
                    {" "}
                    {episode.name} - S{String(episode.season).padStart(2, "0")}E
                    {String(episode.number).padStart(2, "0")}{" "}
                  </h2>
                  <img
                    className="medium-image"
                    src={episode.image.medium || "https://images.unsplash.com/photo-1515255384510-23e8b6a6ca3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"}
                    alt=""
                  />
                  <p className="summary">
                    {episode.summary.replace(/<[^>]+>/g, "")}
                  </p>
                </div>
              </>
            );
          })
        : noMatches}
    </div>
  );
}
