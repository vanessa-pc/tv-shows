import { IEpisode } from "./IEpisode";

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
                    src={episode.image.medium || ''}
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
