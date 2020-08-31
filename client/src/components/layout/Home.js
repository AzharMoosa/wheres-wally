import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <h1>Wheres Wally?</h1>
        <button className='btn-play'>
          <Link to='/play' className='link'>
            Play Game
          </Link>
        </button>
        <h3>Created By Azhar Moosa</h3>
      </div>
    </div>
  );
};

export default Home;
