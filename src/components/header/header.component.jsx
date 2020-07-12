import React from 'react';
//import './header.style.scss';
//import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/home-icon.svg";
import { auth} from '../../firebase/firebase.util.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/shop'>
                Contact
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
                :
                <OptionLink to='/signin'>
                Sign In
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>  
        {hidden ? null : <CartDropDown />}
    </HeaderContainer>
);

const mapStateToProp = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProp)(Header);
