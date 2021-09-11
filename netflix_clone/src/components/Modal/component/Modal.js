import React from 'react';
import { DescriptionContainer, Info, NomeFilme, Overview } from '../../UI/Detalhes';
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
    padding-top: 2rem;
`;

const ContainerDetails = styled.div`
    background-color: #2f2f2f;
    border-radius: .5rem;
    width: 100%;
`;
const ContainerCover = styled.div`
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-size: cover;
    height: 65vh;

    .blur {
        height: inherit;
        background: linear-gradient(to top, #2f2f2f 7%, transparent 90%);
        width: 100%;
    }
`;

function Modal({detalhesFilme, onClose}){

    const handleOutsideClick = (e)=>{
        if(e.target.id === "ModalBack"){
            onClose();
        }
    };

    let firstDate = new Date(detalhesFilme.first_air_date || detalhesFilme.release_date);
    let genres = [];

    for(let i in detalhesFilme.genres){
        genres.push( detalhesFilme.genres[i].name );
    }

    return(
        <ModalBack id="ModalBack" onClick={handleOutsideClick}>
            <OuterContainer>
                <ContainerDetails>
                    <ContainerCover style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${detalhesFilme.backdrop_path})`}}>
                        <div className="blur" >
                            {/* <img alt="Detalhes Imagem" src={`https://image.tmdb.org/t/p/original${detalhesFilme.backdrop_path}`}/> */}
                        </div>
                    </ContainerCover>
                    <DescriptionContainer modal>
                        <NomeFilme modal>{detalhesFilme.name || detalhesFilme.original_title}</NomeFilme>
                        <Info>
                            <div className="destaque--points">{detalhesFilme.vote_average} pontos</div>
                            <div className="destaque--year">{firstDate.getFullYear()}</div>
                            {detalhesFilme.number_of_seasons && <div className="destaque--seasons">{detalhesFilme.number_of_seasons} temporada{detalhesFilme.number_of_seasons > 1 && 's'}</div>}
                        </Info>
                        <Overview modal>{detalhesFilme.overview}</Overview>
                    </DescriptionContainer>
                </ContainerDetails>
            </OuterContainer>
        </ModalBack>
    );
}

export default Modal;