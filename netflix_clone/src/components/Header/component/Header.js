import React from 'react';
import { HeaderContainer } from '../../UI/index';
import './Header.css'

function Header({black}){
    return(
        <HeaderContainer className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/browse">
                    <img alt="logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/browse">
                    <img alt="Usuario" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                </a>
            </div>
        </HeaderContainer>
    );
}

export default Header;