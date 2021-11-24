import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

import Game from "../components/Game";

const Home = () => {
  // fetch data and store in redux store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  // pull data back from redux store
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          ></Game>
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
