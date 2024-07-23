import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>order your favourite food here</h2>
        <p>
          Healthy eating is not about strict limitations, staying
          unrealistically thin, or depriving yourself of the foods you love
        </p>
        <button>view menu</button>
      </div>
    </div>
  );
};

export default Header;
