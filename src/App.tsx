import { EpisodeList } from "./components/EpisodeList";
import { SearchBar } from "./components/SearchBar";
import episodes from "./episodes.json";

// console.log(typeof(episodes))
// console.log(episodes)

function App(): JSX.Element {
  return (
    <>
    <SearchBar episodes={episodes}/>
    <EpisodeList episodes={episodes} />;
    </>)
}

export default App;
