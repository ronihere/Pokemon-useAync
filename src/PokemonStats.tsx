
import ProgressBar from "./components/progressbar";

const PokemonStats = ({ stats }: any) => {
  return (
    <>
      <div className="row_flex pokemon_stats">
        {stats && stats.map((stat: any , index :  number) => {
          return (
            <div key = {index} className="stat">
              <p className="stat_name">{stat.stat?.name}</p>: <ProgressBar width={stat.base_stat}/>
            </div>
          )
        })}
      </div>
    </>
  );
};
export default PokemonStats;
