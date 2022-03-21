import Player from "./Player";
import matchData from '../data/MatchData';
// import playerData from '../data/PlayerData';
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers"


function PlayerList(props) {
  const { playerData } = props;
  const playerDataArray = preparePlayerData(playerData);
  console.log("playerDataArray", playerDataArray)
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  console.log("parsedPlayerdata", parsedPlayerData)
  // const onePlayer = parsedPlayerData[0];

  const players = parsedPlayerData.map(player => {
    return (
    <Player
      key={player.gamerTag}
      gamerTag={player.gamerTag} 
      firstName={player.firstName} 
      lastName={player.lastName} 
      wins={player.wins} />)
  });



  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players} 
    </section>
  );
}

export default PlayerList;