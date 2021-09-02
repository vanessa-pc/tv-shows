import { EpisodeList } from "./components/EpisodeList";

import episodes from "./episodes.json";

// console.log(typeof(episodes))
// console.log(episodes)

function App(): JSX.Element {
  return <EpisodeList episodes={episodes} />
}

export default App;
