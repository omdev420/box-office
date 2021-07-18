import { useReducer, useEffect } from 'react';

function showsReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }
    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }
    default:
      return prevState;
  }
}

function usePresistedReducer(reducer, initialState, key) {
  const { state, dispatch } = useReducer(reducer, initialState, initial => {
    const presisted = localStorage.getItem(key);

    return presisted ? JSON.parse(presisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useShow(key = 'shows') {
  return usePresistedReducer(showsReducer, [], key);
}
