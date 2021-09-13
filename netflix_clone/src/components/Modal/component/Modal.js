import React, { useEffect, useState } from 'react';
import { ButtonsDetalhes, ContainerButtonsModal, DescriptionContainer, Info, NomeFilme, Overview } from '../../UI/Detalhes';
import { getMovieInfo } from '../../../Tmdb';
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
    const [movieInfos, setMovieInfos] = useState({});

    useEffect(() => {
        const loadInfos = async () =>{
            let movieInfo = await (detalhesFilme.first_air_date ? getMovieInfo(detalhesFilme.id, 'tv') : getMovieInfo(detalhesFilme.id, 'movie'));
            setMovieInfos(movieInfo);
            console.log(movieInfo);
        };
        loadInfos();
    }, [detalhesFilme.first_air_date, detalhesFilme.id]);

    const convertMinToHours = (min)=>{
        let minutes = parseInt(min);
        let hours = Math.floor(minutes / 60);
        let format = `${hours > 0 ? hours + 'h' : ''} ${minutes % 60}min`;

        return format;
    }

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
                        <div className="blur" ></div>
                    </ContainerCover>
                    <DescriptionContainer modal>
                        <NomeFilme modal>{detalhesFilme.name || detalhesFilme.title || detalhesFilme.original_title}</NomeFilme>
                        <ContainerButtonsModal>
                            <ButtonsDetalhes primary href={`/watch/${detalhesFilme.id}`}>&#9658; Assistir</ButtonsDetalhes>
                        </ContainerButtonsModal>
                        <Info>
                            <div className="destaque--points">{detalhesFilme.vote_average} pontos</div>
                            <div className="destaque--year">{firstDate.getFullYear()}</div>
                            {movieInfos.number_of_seasons && <div className="destaque--seasons">{movieInfos.number_of_seasons} temporada{movieInfos.number_of_seasons > 1 && 's'}</div>}
                            {movieInfos.runtime && <div className="destaque--seasons">{convertMinToHours(movieInfos.runtime)}</div>}
                        </Info>
                        <Overview modal>{detalhesFilme.overview}</Overview>
                    </DescriptionContainer>
                </ContainerDetails>
            </OuterContainer>
        </ModalBack>
    );
}

export default Modal;