export const ACTIONS = {
  fetching: 'fetching',
  success: 'success',
  error: 'error',
};

export const IDLE_STATE = {
  loading: false,
  ready: false,
};

export const fetchDataReducer = (state, action) => {
  if (ACTIONS.fetching === action.type) {
    console.log('Reducer with Loading Action', action);
    return { ...IDLE_STATE, loading: true };
  }

  if (ACTIONS.success === action.type) {
    console.log('Reducer with Success Action', action);
    return {
      ...IDLE_STATE,
      data: action.payload,
      ready: true,
    };
  }

  if (ACTIONS.error === action.type) {
    console.log('Reducer with Error Action', action);
    return {
      ...IDLE_STATE,
      error: action.error,
    };
  }

  console.log('Reducer with Unknown Action', state, action);
  return state;
};
