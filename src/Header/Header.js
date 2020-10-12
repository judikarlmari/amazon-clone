import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon clone"
            />
            <div
                className="header__search">
                <input type="text" className="header__input" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">Order</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Yout</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header
