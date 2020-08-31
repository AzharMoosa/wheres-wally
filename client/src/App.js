import React, { Fragment } from "react";
import Home from "./components/layout/Home";
import Game from "./components/game/Game";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact component={Home} path='/' />
          <Route exact component={Game} path='/play' />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
