const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      console.log(action);
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames
      };
    default:
      return { ...state };
  }
};


export default gamesReducer;