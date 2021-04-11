import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
function Header() {
    const [{basket,user},dispatch]= useStateValue();

    const handleAuthentication =()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            {/* src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" */}
            <Link to="/">
                <img className="header__logo" src="https://cdn.dribbble.com/users/2986805/screenshots/7203314/media/b60ec8b50cbade9c17ff50e461cb8d72.jpg?compress=1&resize=400x300" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
                {/* Logo */}
            </div>

            <div className="header__nav">

                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header__option">    
                    <span className="header__optionOne">
                        Hello Geaust
                    </span>
                    <span className="header__optionTwo">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>              
                <div className="header__option">
                    <span className="header__optionOne">
                        Returns
                    </span>
                    <span className="header__optionTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">
                        Your
                    </span>
                    <span className="header__optionTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
                </Link>
                


            </div>

        </div>
        
    )
}

export default Header
