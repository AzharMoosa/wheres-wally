import {
  CREATE_PLAYER,
  UPDATE_USER,
  USER_ERROR,
  END_GAME,
  GET_PLAYERS,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_PLAYER:
      return {
        ...state,
        player: action.payload,
        loading: false,
      };
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        player: state.player,
        loading: false,
      };
    case END_GAME:
      return {
        ...state,
        game: false,
      };
    case USER_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
