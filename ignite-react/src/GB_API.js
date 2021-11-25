// guide: https://www.giantbomb.com/forums/api-developers-3017/quick-start-guide-to-using-the-api-1427959/
// api ressources: https://www.giantbomb.com/api/documentation/#toc-0-16

// working example single-game: https://www.giantbomb.com/api/game/3030-4725/?api_key=9b08fb32f66dec894c34b5430c87bd0a6cb512a9&format=json&field_list=genres,name
// working example gamelist: https://www.giantbomb.com/api/games/?api_key=9b08fb32f66dec894c34b5430c87bd0a6cb512a9&format=json&field_list=name,id,date_added,api_detail_url&limit=10&sort=date_added

const base_url = " https://www.giantbomb.com/api/";

const popular_games = `games/?api_key=${process.env.REACT_APP_GIANTBOMB_API_KEY}&format=jsonp&json_callback=popularData&field_list=name,id,date_added,api_detail_url&limit=10&sort=date_added`;
const upcoming_games = `games/?api_key=${process.env.REACT_APP_GIANTBOMB_API_KEY}&format=jsonp&json_callback=popularData&field_list=name,id,date_added,api_detail_url&limit=10&sort=date_added`;
const new_games = `games/?api_key=${process.env.REACT_APP_GIANTBOMB_API_KEY}&format=jsonp&json_callback=popularData&field_list=name,id,date_added,api_detail_url&limit=10&sort=date_added`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// could not solve CORS policy issues, therefore using local JSON now.
