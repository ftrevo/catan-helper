import { useGameData } from '../hooks/useGamaData';
import Game from './game/Game';
import PlayerData from './statistics/PlayerData';
import ResourceOdds from './statistics/ResourceOdds'
import './Board.css'

export default function Board() {
  const [{ ready, loading, data }, load] = useGameData()
  
  return (
    <div key='board' id='board' className='board'>
      <div key='game-board' id='game-board' className='gameBoard'>
        { ready && <ResourceOdds statistics={data.statistics} /> }
        { ready && <Game tiles={data.board.tiles} vertices={data.board.vertices} /> }
      </div>
      <div key='player-board' id='player-board' className='playerBoard'>
        <button key='button' className='button' disabled={loading} onClick={load}>Fetch game data</button>
        { ready && <PlayerData players={data.playerData}/>}
      </div>
    </div>
  )
}
