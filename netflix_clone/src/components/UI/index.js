import styled from 'styled-components';

export const ItemMovie = styled.div`
    display: inline-block;
    width: 150px;

    img {
        width: 100%;
        transform: scale(.9);
        transition: ease .2s;
    }

    img:hover {
        transform: scale(1);
        cursor: pointer;
    }
`;
export const Title = styled.h2`
    margin: ${props => (!props.modal ? '0px' : '30px')} 0px ${props => (!props.modal ? '0px' : '20px')} ${props => (!props.modal ? '30px' : '0px')};
`; 

export const HeaderContainer = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: transparent;
    transition: all ease-in .3s;

    &.black {
        background-color: #141414;
    }

    .header--logo {
        height: 30px;
    }

    .header--logo img {
        height: 100%;
    }
`;

export const ContainerFullScreen = styled.section`
    background-size: cover;
    background-position: center;
    height: 100vh;
`;

export const Shadows = styled.div`
    position: absolute;
    background: rgba(0,0,0,.5);
    background-image: -webkit-gradient(linear,left bottom,left top,color-stop(50%,rgba(0,0,0,0)),to(rgba(0,0,0,.7))),radial-gradient(50% 100%,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%);
    background-image: -webkit-linear-gradient(bottom,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%),-webkit-radial-gradient(50% 100%,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%);
    background-image: -moz- oldlinear-gradient(bottom,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%),-moz- oldradial-gradient(50% 100%,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%);
    background-image: -o-linear-gradient(bottom,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%),-o-radial-gradient(50% 100%,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%);
    background-image: linear-gradient(to top,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%),radial-gradient(50% 100%,rgba(0,0,0,0) 50%,rgba(0,0,0,.7) 100%);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
`;

export const EnterButton = styled.a`
    font-size: 1rem;
    background-color: #e50914;
    padding: 0.4rem 1rem;
    border-radius: .2rem;
    cursor: pointer;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 400;

    &.form {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 100%;
        min-width: 314px;
        padding: 0 16px;
        outline: none;
        font-size: 1.125rem;
        font-weight: 600;
        margin: 24px 0 12px;
    }
`;

export const HomeContainer = styled.div`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem 0;
    width: 100%;
    height: 100%;
`;

export const FormContainer = styled.div`
    padding: 0 20%;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 950px) {
        padding: 0 10%;
    }
`;

export const HomeHead = styled.h1`
    z-index: 4;
    max-width: 640px;
    margin: 0 auto;
    font-size: 3.8rem;
    margin: 0;
    text-align: center;
    
    @media (max-width: 950px) {
        font-size: 2rem;
    }
`;

export const HomeSubhead = styled.h2`
    font-size: 1.625rem;
    z-index: 4;
    margin: 10px 0;
    font-weight: 100;
    text-align: center;

    @media (max-width: 950px) {
        font-size: 1.125rem;
    }
`;

export const HomeFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 756px) {
        flex-wrap: wrap;
    }
`;

export const FormTitle = styled.h3`
    text-align: center;
    font-weight: 100;
`;

export const HomeInput = styled.input`
    height: 80px;
    width: 100%;
    min-width: 500px;
    outline: none;
    padding: 0 10px;
    font-size: 1rem;
    border: solid 2px #333;
    border-radius: 3px 0 0 3px;

    &:focus {
        border: solid 1px #46d369;
    }

    @media (max-width: 950px) {
        height: 60px;
        font-size: 1rem;
        min-width: 200px;
    }
`;

export const HomeButton = styled.button`
    height: 80px;
    padding: 0 1em;
    background-color: #e50914;
    outline: none;
    border: solid 1px #333;
    border-left: 0;
    border-radius: 0 3px 3px 0;
    font-size: 1.875rem;
    font-weight: 400;
    color: #fff;
    display: inline-flex;
    min-width: 200px;
    align-items: center;
    margin: 0 auto;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    cursor: pointer;

    @media (max-width: 950px) {
        height: 60px;
        font-size: 1rem;
        min-width: 110px;
    }
    @media (max-width: 756px) {
        border-radius: 3px;
        margin-top: 5px;
    }
`;