import styled from "styled-components";

const fundo = "#181818";
const card = "#2f2f2f";

export const ModalBack = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    overflow-y: scroll;
`;
export const OuterContainer = styled.div`
    width: 50vw;
    padding-top: 2rem;

    @media (max-Width: 760px){
        width: 90vw;
    }
`;

export const ContainerDetails = styled.div`
    position: relative;
    background-color: ${fundo};
    border-radius: .5rem;
    width: 100%;
`;
export const ContainerCover = styled.div`
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-size: cover;
    background-position-x: center;
    height: 65vh;

    .blur {
        height: inherit;
        background: linear-gradient(to top, ${fundo} 7%, transparent 90%);
        width: 100%;
    }
`;

export const BotaoFecharModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    padding: 2px;
    background-color: ${fundo};
    cursor: pointer;
    opacity: .9;
    
    img {
        width: 36px;
    }
`;

export const ContainerSemelhantes = styled.div`
    box-sizing: inherit;
    background-color: ${fundo};
`;

export const ContainerSemelhantesItens = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    align-items: stretch;
    justify-items: stretch;
`;
export const CardContainer = styled.div`
    margin: .1em;
    height: 100%;
    min-height: 22em;
    cursor: pointer;
    flex: 0 0 40%;
    position: relative;
    overflow: hidden;
    border-radius: .25em;
    background-color: ${card};

    .img-Wrapper {
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            display: block;
            border: 0;
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        padding: 16px;
        margin: 0;
        line-height: 1.2;
    }
`;