interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export function EpisodeList(props: { episodes: Array<IEpisode> }): JSX.Element {
  const { episodes } = props;

  // const [ name, season, number, summary ] = episodes
  // const {image: {medium} = {}} = props.episodes
  // console.log(typeof(episodes))
  // console.log(episodes)
  // console.log(props)
  return (
    <div className="episodes">
      {episodes.map(function (item, index) {
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
  );
}
