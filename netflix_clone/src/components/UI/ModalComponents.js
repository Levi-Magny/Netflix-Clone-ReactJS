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
`;

export const ContainerDetails = styled.div`
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
    height: 65vh;

    .blur {
        height: inherit;
        background: linear-gradient(to top, ${fundo} 7%, transparent 90%);
        width: 100%;
    }
`;
