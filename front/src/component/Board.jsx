import { useReducer } from 'react';
import { fetchData } from '../repository/repository';
import {ACTIONS,  IDLE_STATE, fetchDataReducer } from '../reducer/fetchData';
import Game from './game/Game';
import PlayerData from './statistics/PlayerData';
import ResourceOdds from './statistics/ResourceOdds'

import './Board.css'

const Board = () => {
  const [state, dispatch] = useReducer(fetchDataReducer, IDLE_STATE);
  
  const handleFetch = () => {
    dispatch({ type: ACTIONS.fetching });
    fetchData()
      .then((data) => {
        dispatch({ type: ACTIONS.success, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.error, error });
      });
    };
  
  return (
       <div key='board' id='board' className='board'>
        <div key='game-board' id='game-board' className='gameBoard'>
          { state.ready && < ResourceOdds statistics={state.data.statistics} /> }
          { state.ready && <Game tiles={state.data.board.tiles} vertices={state.data.board.vertices} /> }
        </div>
        <div key='player-board' id='player-board' className='playerBoard'>
          <button key='button' className='button' disabled={state.loading} onClick={handleFetch}>Fetch game data</button>
          { state.ready && <PlayerData players={state.data.playerData}/>}
        </div>
      </div>
  )
}

export default Board;