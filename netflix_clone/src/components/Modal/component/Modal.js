import React from 'react';
import styled from 'styled-components';

const ModalBack = styled.div`
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
const OuterContainer = styled.div`
    width: 50vw;
    padding-top: 1rem;
`;

const ContainerDetails = styled.div`
    background-color: #2f2f2f;
    border-radius: 1rem;
    width: 100%;
`;
const ContainerCover = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    img {
        width: 100%;
    }
`;

function Modal({detalhesFilme, onClose}){

    const handleOutsideClick = (e)=>{
        if(e.target.id === "ModalBack"){
            onClose();
        }
    };

    return(
        <ModalBack id="ModalBack" onClick={handleOutsideClick}>
            <OuterContainer>
                <ContainerDetails>
                    <ContainerCover>
                        {detalhesFilme.name || detalhesFilme.original_title}
                        <img alt="Detalhes Imagem" src={`https://image.tmdb.org/t/p/original${detalhesFilme.backdrop_path}`}/>
                    </ContainerCover>
                </ContainerDetails>
            </OuterContainer>
        </ModalBack>
    );
}

export default Modal;