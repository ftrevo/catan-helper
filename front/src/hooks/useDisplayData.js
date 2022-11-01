import { useState } from 'react';

const INITIAL_STATE = {
  showBuildings: true,
  showBlockedVertices: false,
};

export function useDisplayData() {
  const [state, setState] = useState(INITIAL_STATE);

  const toggleBuildings = () =>
    setState((state) => ({
      ...state,
      showBuildings: !state.showBuildings,
    }));

  const toggleBlockedVertices = () =>
    setState((state) => ({
      ...state,
      showBlockedVertices: !state.showBlockedVertices,
    }));

  return [state, toggleBuildings, toggleBlockedVertices];
}
