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
`;