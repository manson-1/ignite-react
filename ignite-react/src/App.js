import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>contanGOD</h1>
    </div>
  );
}

export default App;
