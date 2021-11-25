import jsonDataPopularGames from "../json_data_mocks/populargames.json";

// action creator
export const loadGames = () => async (dispatch) => {
  const loadData = () => JSON.parse(JSON.stringify(jsonDataPopularGames));

  // async fetch
  // const popularData = await axios.get(popularGamesURL());
  const popularData = loadData();
  const upcomingData = loadData();
  const newGamesData = loadData();

  // console.log(popularData.results);

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.results,
      upcoming: upcomingData.results,
      newGames: newGamesData.results,
    },
  });
};
