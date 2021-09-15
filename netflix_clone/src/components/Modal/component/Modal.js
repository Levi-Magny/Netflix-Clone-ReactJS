import React, { useEffect, useState } from 'react';
import { ButtonsDetalhes, ContainerButtonsModal, DescriptionContainer, Info, NomeFilme, Overview } from '../../UI/Detalhes';
import { getMovieInfo } from '../../../Tmdb';
import { ModalBack, OuterContainer, ContainerDetails, ContainerCover, BotaoFecharModal, ContainerSemelhantes, ContainerSemelhantesItens, CardContainer, MetaData, BotaoRedondo } from '../../UI/ModalComponents';
import CloseIcon from '../../../assets/images/CloseIcon.svg';
import AddIcon from '@material-ui/icons/Add';
import { Title } from '../../UI';


function Modal({detalhesFilme, onClose}){
    const [movieInfos, setMovieInfos] = useState({});

    useEffect(() => {
        const loadInfos = async () =>{
            let movieInfo = await (detalhesFilme.first_air_date ? getMovieInfo(detalhesFilme.id, 'tv') : getMovieInfo(detalhesFilme.id, 'movie'));
            setMovieInfos(movieInfo);
            // console.log(movieInfo);
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
                        <div className="blur" >
                            <BotaoFecharModal onClick={() => {onClose()}}>
                                <img src={CloseIcon} alt="Fechar modal"/>
                            </BotaoFecharModal>
                        </div>
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
                        <ContainerSemelhantes>
                            <Title modal>Títulos Semelhantes</Title>
                            <ContainerSemelhantesItens>
                                <CardContainer>
                                    <div className="img-Wrapper">
                                        <img alt="title cover" src={`https://image.tmdb.org/t/p/original${detalhesFilme.backdrop_path}`}/>
                                    </div>
                                    <h3>La la land</h3>
                                    <MetaData>
                                        <Info className="info">
                                            <div className="destaque--points">7 pontos</div>
                                            <div className="destaque--year">2021</div>
                                        </Info>
                                        <BotaoRedondo><AddIcon/></BotaoRedondo>
                                    </MetaData>
                                    <Overview className="CarDesc" modal>Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.</Overview>
                                </CardContainer>
                            </ContainerSemelhantesItens>
                        </ContainerSemelhantes>
                    </DescriptionContainer>
                </ContainerDetails>
            </OuterContainer>
        </ModalBack>
    );
}

export default Modal;