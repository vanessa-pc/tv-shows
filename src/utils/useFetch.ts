import { useState, useEffect } from "react";
import { IEpisode } from "../components/IEpisode";

export function useFetch(url: string): IEpisode[] {
  const [data, setData] = useState<IEpisode[]>([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return data;
}
