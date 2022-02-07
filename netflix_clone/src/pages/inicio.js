import React from "react";
import homeImage from'../assets/images/Tela-Login.jpg'
import { HeaderContainer, ContainerFullScreen, Shadows } from "../components/UI";

function Inicio() {

    return (
        <>
            <HeaderContainer>
                <div className="header--logo">
                    <a href="/browse">
                        <img alt="logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"/>
                    </a>
                </div>
            </HeaderContainer>
            <ContainerFullScreen style={{
                backgroundImage: `url(${homeImage})`
            }}>
                <Shadows />
            </ContainerFullScreen>
        </>
    );
}

export default Inicio;