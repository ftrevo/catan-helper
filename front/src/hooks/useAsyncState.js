import { useReducer } from 'react';

const INITIAL_STATE = {
  ready: false,
  loading: false,
  error: null,
  data: null,
};

const handlers = {
  loading: () => ({ ...INITIAL_STATE, loading: true }),
  loaded: ({ payload }) => ({ ...INITIAL_STATE, ready: true, data: payload }),
  error: ({ payload }) => ({ ...INITIAL_STATE, error: payload }),
};

const reducer = (state, action) => {
  if (action.type in handlers) {
    return handlers[action.type](action);
  }

  return state;
};

export function useAsyncState(fn) {
  const [state, dispatch] = useReducer(reducer, { ...INITIAL_STATE });

  const load = () => {
    dispatch({ type: 'loading' });
    Promise.resolve(fn())
      .then((data) => dispatch({ type: 'loaded', payload: data }))
      .catch((error) => dispatch({ type: 'error', payload: error }));
  };

  return [state, load];
}
