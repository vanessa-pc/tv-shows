import { IEpisode } from "./IEpisode";

export function DropdownMenu(props: {
  episodes: Array<IEpisode>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  const { episodes, setSearchText } = props;

  return (
    <>
      <select
        className="episodes-dropdown"
        id="dropdown"
        onChange={(event) => setSearchText(event.target.value)}
      >
        <option placeholder="select an episode">Select an episode</option>
        {episodes.map(function (episode, index) {
          return (
            <option
              key={index}
              value={episode.name}
              className="dropdown-options"
            >
              S{String(episode.season).padStart(2, "0")}E
              {String(episode.number).padStart(2, "0")} - {episode.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
