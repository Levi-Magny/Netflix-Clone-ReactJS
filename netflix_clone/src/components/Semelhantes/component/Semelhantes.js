import React from 'react';
import { Info, Overview } from '../../UI/Detalhes';
import { ContainerSemelhantes, ContainerSemelhantesItens, CardContainer, MetaData, BotaoRedondo } from '../../UI/ModalComponents';
import AddIcon from '@material-ui/icons/Add';
import { Title } from '../../UI';
import { useState, useEffect } from 'react';
import { getSimilarTitles } from '../../../Tmdb';

function Semelhantes({ movieId, type }) {
    const [titulosSemelhantes, setTitulosSemelhantes] = useState([]);

    useEffect(() => {
        const loadSimilar = async () => {
            let titles = await getSimilarTitles(movieId, type);
            setTitulosSemelhantes(titles.results);
            // console.log(titles.results[0]);
        }

        loadSimilar();
    }, [movieId, type]);

    return (
        <ContainerSemelhantes>
            <Title modal>Títulos Semelhantes</Title>
            <ContainerSemelhantesItens>
                {titulosSemelhantes && titulosSemelhantes.map((item) => (
                    <CardContainer key={item.id}>
                        <div className="img-Wrapper">
                            <img alt="title cover" src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}/>
                        </div>
                        <h3>{item.title || item.original_name}</h3>
                        <MetaData>
                            <Info className="info">
                                <div className="destaque--points">{parseFloat(item.vote_average).toFixed(1)} ponto{item.vote_average !== '1' && 's'}</div>
                                <div className="destaque--year">{date(item.first_air_date || item.release_date)}</div>
                            </Info>
                            <BotaoRedondo><AddIcon /></BotaoRedondo>
                        </MetaData>
                        <Overview className="CarDesc" modal>{item.overview}</Overview>
                    </CardContainer>
                ))}
            </ContainerSemelhantesItens>
        </ContainerSemelhantes>
    );
}
const date = (unFormatedDate) => {
    let firstDate = new Date(unFormatedDate);
    return firstDate.getFullYear();
}

export default Semelhantes;