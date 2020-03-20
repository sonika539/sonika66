function addReducer(state, action) {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return { ...state, userData: action.payload };
    case 'SEARCHED_TEXT':
      return { ...state, text: action.payload };
    case 'SAVE_SUGGESTIONS':
      return { ...state, suggestions: action.payload };
    default:
      return state;
  }
}

export default addReducer;
