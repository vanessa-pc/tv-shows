import { EpisodeList } from "./components/EpisodeList";
import "./components/Episodes.css";
import { useFetch } from "./utils/useFetch";

function App(): JSX.Element {
  const episodes = useFetch("https://api.tvmaze.com/shows/7/episodes");

  return <EpisodeList episodes={episodes} />;
}

export default App;
