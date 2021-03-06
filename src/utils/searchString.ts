import { IEpisode } from "../components/IEpisode";

export function searchString(episodes: IEpisode[], query: string): IEpisode[] {
  return query.length === 0
    ? episodes
    : episodes.filter(
        (episode) =>
          episode.summary.toLowerCase().includes(query.toLowerCase()) ||
          episode.name.toLowerCase().includes(query.toLowerCase())
      );
}
