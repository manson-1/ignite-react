import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../API";

// action creator

export const loadGames = () => async (dispatch) => {
  // async fetch
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
