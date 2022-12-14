import { useGameData, useDisplayData } from '../../hooks';
import { Game } from './Game';
import { PlayerData } from './PlayerData';
import { ResourceOdds } from './ResourceOdds';
import { Control } from './Control'

export const Board = () => {
  const [{ ready, loading, data }, load] = useGameData()
  const [
    { showBuildings, showBlockedVertices },
    toggleBuildings,
    toggleBlockedVertices,
  ] = useDisplayData()

  console.log(data)

  return (
    <div key='board' id='board' className='board'>
      <div key='game-board' id='game-board' className='gameBoard'>
        { ready && <ResourceOdds statistics={data.statistics} /> }
        { ready && <Game tiles={data.board.tiles} vertices={data.board.vertices} vertexOpts={{showBuildings, showBlockedVertices}} /> }
      </div>
      <div key='data-board' id='data-board' className='dataBoard'>
        <Control 
          showBuildings={showBuildings}
          toggleBuildings={toggleBuildings}
          showBlockedVertices={showBlockedVertices}
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
