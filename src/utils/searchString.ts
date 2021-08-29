import { IEpisode } from "../components/IEpisode";

export function searchString(episodes: IEpisode[], query: string | null): IEpisode[] {

    if (!query) {
        return episodes;
    }
  
    return episodes.filter((episode) => {
        const episodeName = episode.name.toLowerCase();
        const episodeSummary = episode.summary.toLowerCase();
        return episodeName.includes(query) && episodeSummary.includes(query);
    });
}