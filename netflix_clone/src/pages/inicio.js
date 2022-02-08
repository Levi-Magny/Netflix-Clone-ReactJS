import React from "react";
import homeImage from'../assets/images/Tela-Login.jpg'
import { HeaderContainer, ContainerFullScreen, Shadows, EnterButton, HomeContainer, HomeHead, FormContainer, HomeSubhead, FormTitle, HomeFormContainer, HomeInput, HomeButton } from "../components/UI";

function Inicio() {

    return (
        <>
            <HeaderContainer>
                <div className="header--logo">
                    <a href="/browse">
                        <img alt="logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"/>
                    </a>
                </div>
                <EnterButton href={'/browse'}>Entrar</EnterButton>
            </HeaderContainer>
            <ContainerFullScreen style={{
                backgroundImage: `url(${homeImage})`
            }}>
                <HomeContainer>
                    <FormContainer>
                        <HomeHead>Filmes, séries e muito mais. Sem limites.</HomeHead>
                        <HomeSubhead>Assista onde quiser. Cancele quando quiser.</HomeSubhead>
                        <form 
                            onSubmit={(event)=>{
                                event.preventDefault();
                            }}
                        >
                            <FormTitle>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</FormTitle>
                            <HomeFormContainer>
                                <HomeInput type={'email'} name={'email'} placeholder={'Email'} autoComplete="email"></HomeInput>
                                <HomeButton type="submit"><span>Vamos Lá</span></HomeButton>
                            </HomeFormContainer>
                        </form>
                    </FormContainer>
                </HomeContainer>
                <Shadows />
            </ContainerFullScreen>
        </>
    );
}

export default Inicio;