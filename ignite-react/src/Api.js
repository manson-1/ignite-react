// Base URL
const base_url = "https://api.rawg.io/api/";

// use api key: process.env.REACT_APP_RAWG_API_KEY
// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

let getCurrentMonth = () => {
  let month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

let getCurrentDay = () => {
  let day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// get day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

console.log(`${base_url}${popular_games}`);

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
