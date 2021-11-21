import axios from 'axios';
import {popularGamesURL} from '../API';

// action creator

export const loadGames = () => async (dispatch) => {
    // async fetch
    const popularData = await axios.get(popularGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results
        }
    })
}