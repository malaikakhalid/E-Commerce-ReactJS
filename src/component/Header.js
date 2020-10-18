import React from "react";
import logo from "./amazon.JPG";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider'

function Header() {

  const[{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
    <Link to="/">
      <img className="header__logo" src={logo} />
</Link>
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

<Link to="/checkout">
        <div className="header__basket">
          <ShoppingBasketIcon  />
          <span className="header__lineTwo header__basketCount">
          {/* ? in basket refer as a optional chaining for any reason basket comes undefined it wont freakout gracefully terminated */}
           {basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
