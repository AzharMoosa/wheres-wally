import React, { useReducer } from "react";
import GameContext from "./gameContext";
import gameReducer from "./gameReducer";
import axios from "axios";
import { CREATE_PLAYER, USER_ERROR, END_GAME, GET_PLAYERS } from "./types.js";

const GameState = (props) => {
  const initialState = {
    player: null,
    players: null,
    game: true,
    time: new Date(0, 0, 0, 0, 0, 0, 0),
    loading: true,
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Create Player
  const createPlayer = async (player) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/player", player, config);
      dispatch({
        type: CREATE_PLAYER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  // Get Players
  const getPlayers = async (id) => {
    try {
      const res = await axios.get("api/player");
      dispatch({
        type: GET_PLAYERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  // End Game
  const endGame = () => {
    dispatch({ type: END_GAME });
  };

  return (
    <GameContext.Provider
      value={{
        player: state.player,
        players: state.players,
        loading: state.loading,
        game: state.game,
        time: state.time,
        createPlayer,
        endGame,
        getPlayers,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
