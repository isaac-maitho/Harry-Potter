export const fetchCharacters = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      const data = await response.json();
      dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_CHARACTERS_ERROR', payload: error.message });
    }
  };
};

