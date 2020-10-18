import React from "react";
import logo from "./amazon.JPG";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__lineOne">Hello</span>
          <span className="header__lineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__lineOne">Returns</span>
          <span className="header__lineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__lineOne">Your</span>
          <span className="header__lineTwo">Prime</span>
        </div>

        <div className="header__basket">
          <ShoppingBasketIcon  />
          <span className="header__lineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
