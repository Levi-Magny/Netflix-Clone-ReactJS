import React from 'react';
import { DescriptionDestaque, NomeFilme, Info, Overview } from '../../UI/Detalhes';
import './FilmeDestaque.css'

function FilmeDestaque({item}){

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push( item.genres[i].name );
    }

    return(
        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="destaque--vertical">
                <DescriptionDestaque>
                    <NomeFilme>{item.original_name}</NomeFilme>
                    <Info className="destaque--info">
                        <div className="destaque--points">{item.vote_average} pontos</div>
                        <div className="destaque--year">{firstDate.getFullYear()}</div>
                        <div className="destaque--seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 && 's'}</div>
                    </Info>
                    <Overview className="destaque--description">{item.overview}</Overview>
                    <div className="destaque--buttons">
                        <a className="destaque--watchButton" href={`/watch/${item.id}`}>&#9658; Assistir</a>
                        <a className="destaque--myListButton" href={`/list/add/${item.id}`}>&#x2b; Minha Lista</a>
                    </div>
                    <div className="destaque--genres">
                        <strong>Gêneros:</strong> {genres.join(', ')}
                    </div>
                </DescriptionDestaque>
            </div>
        </section>
    );
}

export default FilmeDestaque;