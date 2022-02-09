import React from 'react';
import homeImage from'../assets/images/Tela-Login.jpg';
import { HeaderContainer, ContainerFullScreen, Shadows, FormContainer, EnterButton, HomeFormContainer, FlexDiv } from "../components/UI";
import { FormH1, FormInput, FormLoginContainer } from '../components/UI/Forms';

function Login() {
    return(
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
                <FormContainer>
                    <FormLoginContainer>
                        <form 
                            onSubmit={(event)=>{
                                event.preventDefault();
                            }}
                        >
                            <FormH1>Entrar</FormH1>
                            <FormInput placeholder={'Email'} type={'email'} name={'email'}/>
                            <FormInput placeholder={'Senha'} type={'password'} name={'password'}/>
                            <EnterButton className='form' type={'submit'} name={'entrar'}>Entrar</EnterButton>
                            <HomeFormContainer>
                                <input type={'checkbox'} defaultChecked/>
                                <label style={{color: '#8c8c8c'}}>Lembre-se de mim</label>
                            </HomeFormContainer>
                            <FlexDiv>
                                <p>Novo por Aqui?</p>
                                <a href='/'>Assine agora</a>
                            </FlexDiv>
                        </form>
                    </FormLoginContainer>
                </FormContainer>
                <Shadows />
            </ContainerFullScreen>
        </>
    );
}

export default Login;