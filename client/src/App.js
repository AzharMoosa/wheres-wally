import React, { Fragment } from "react";
import Home from "./components/layout/Home";
import Game from "./components/game/Game";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameState from "./context/GameState";
import "./App.css";

function App() {
  return (
    <GameState>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact component={Home} path='/' />
            <Route exact component={Game} path='/play' />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </GameState>
  );
}

export default App;
