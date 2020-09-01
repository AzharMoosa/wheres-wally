import React from "react";
import Wally from "../../images/wally-img.png";
import Oswald from "../../images/oswald-img.png";
import Wenda from "../../images/wenda-img.png";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='characters'>
        <div className='character'>
          <h3>Wally</h3>
          <img src={Wally} alt='wally' />
        </div>

        <div className='character'>
          <h3>Oswald</h3>
          <img src={Oswald} alt='oswald' />
        </div>

        <div className='character'>
          <h3>Wenda</h3>
          <img src={Wenda} alt='wenda' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
