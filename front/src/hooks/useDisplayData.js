import { useReducer } from 'react';

const INITIAL_STATE = { showBuildings: true, showBlockedVertices: false };

const handlers = {
  buildings: (state) => {
    // console.log('buildings', state);
    return { ...state, showBuildings: !state.showBuildings };
  },
  showBlockedVertices: (state) => {
    // console.log('showBlockedVertices', state);
    return { ...state, showBlockedVertices: !state.showBlockedVertices };
  },
};

const reducer = (state, action) => {
  // console.log('reducer', state, action);
  if (action in handlers) {
    return handlers[action](state);
  }

  return state;
};

export function useDisplayData() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const toggleBuildings = () => {
    // console.log('tb', state);
    dispatch('buildings');
  };

  const toggleBlockedVertices = () => {
    // console.log('tbv', state);
    dispatch('showBlockedVertices');
  };

  return [state, toggleBuildings, toggleBlockedVertices];
}
