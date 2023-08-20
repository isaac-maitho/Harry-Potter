const initialState = {
    characters: [],
    error: null,
  };
  
  const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CHARACTERS_SUCCESS':
        return { ...state, characters: action.payload, error: null };
      case 'FETCH_CHARACTERS_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  