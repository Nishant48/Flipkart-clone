import React from 'react';
import './CSS/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header_div1" />

            <div className="header_div2">
                <Link to="/home">
                <div className="header_logospan">
                    <img className="header_logo" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" alt="flipkart" />
                    <div className="header_logobelow">
                        <i>Explore</i>
                        <div className="header_logoplus"><i>Plus</i>➕</div>
                    </div>
                </div>
                </Link>
                <div className="header_search">
                    <input type="text" placeholder="Search for products, brands and more" />
                    <IconButton>
                        <SearchIcon />
                    </IconButton> 
                </div>

                <div className="header_links">
                        <div className="header_dropdownLogin" >
                            <button className="header_login"> 
                                Login 
                            </button>
                            <div className="header_loginDropdown">
                                <div className="header_loginDropdown_header">
                                    <a href="#" className="new_customer">New Customer?</a>
                                    <a href="#" className="signin">Sign In</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <AccountCircleIcon className="svg" />
                                    <a href="#">My Profile</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <AddRoundedIcon className="svg" />
                                    <a href="#">flipkart Plus Zone</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <AccountBalanceWalletRoundedIcon  className="svg" />
                                    <a href="#">Order</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <FavoriteRoundedIcon  className="svg" />
                                    <a href="#">WishList</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <ReceiptRoundedIcon className="svg" />
                                    <a href="#">Rewards</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <CardGiftcardRoundedIcon  className="svg" />
                                    <a href="#">Gift Cards</a>
                                </div>
                            </div>
                        </div>
                        <div className="header_dropdownMore" >
                            <button className="header_button toflex"> 
                                <ArrowDropDownIcon className="header_shoppingCart" /> 
                                More 
                            </button>
                            <div className="header_moreDropdown">
                                <div className="header_loginDropdown_row">
                                    <NotificationsRoundedIcon className="svg" />
                                    <a href="#">Notification Preferances</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <CardGiftcardRoundedIcon className="svg" />
                                    <a href="#">Sale on Filpkart</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <AccessTimeRoundedIcon  className="svg" />
                                    <a href="#">24x7 Customer Care</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <TrendingUpIcon  className="svg" />
                                    <a href="#">Advertise</a>
                                </div>
                                <div className="header_loginDropdown_row">
                                    <GetAppIcon className="svg" />
                                    <a href="#">Download App</a>
                                </div>
                            </div>
                        </div>
                        <div className="header_dropdownDiv" >
                            <Link to="/cart" >
                                <button className="header_button toflex">
                                    <ShoppingCartIcon className="header_shoppingCart" />
                                    Cart
                                </button>
                            </Link>
                        </div>
                        
                </div>
            </div>
            <div className="header_div3" />
    
            
        </div>
    )
}

export default Header;
