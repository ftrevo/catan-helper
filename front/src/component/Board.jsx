import { useGameData } from '../hooks/useGameData';
import { useDisplayData } from '../hooks/useDisplayData';
import Game from './game/Game';
import PlayerData from './statistics/PlayerData';
import ResourceOdds from './statistics/ResourceOdds'
import Control from './Control'
import './Board.css'

export default function Board() {
  const [{ ready, loading, data }, load] = useGameData()
  const [displayState, toggleBuildings, toggleBlockedVertices] = useDisplayData()

  console.log(data)

  return (
    <div key='board' id='board' className='board'>
      <div key='game-board' id='game-board' className='gameBoard'>
        { ready && <ResourceOdds statistics={data.statistics} /> }
        { ready && <Game tiles={data.board.tiles} vertices={data.board.vertices} vertexOpts={displayState} /> }
      </div>
      <div key='data-board' id='data-board' className='dataBoard'>
        <Control 
          showBuildings={displayState.showBuildings} 
          toggleBuildings={toggleBuildings}
          showBlockedVertices={displayState.showBlockedVertices}
          toggleBlockedVertices={toggleBlockedVertices}
          loading={loading}
          load={load}
        />
        <div key='player-board' id='player-board' className='playerBoard'>
          { ready && <PlayerData players={data.playerData}/>}
        </div>
      </div>
    </div>
  )
}
