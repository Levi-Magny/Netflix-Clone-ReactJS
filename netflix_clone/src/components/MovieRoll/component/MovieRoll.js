import React from 'react';
import './MovieRoll.css'

/**
 * 
 * @param { object } info_movies Objeto contendo o titulo da lista e os itens que vieram da API 
 * @returns Retorna um  component react que será uma lista contendo os filmes/séries dessa categoria
 */
function MovieRoll({title, items}){
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => {
                        return(
                            <div key={key} className="movieRow--item">
                                <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default MovieRoll;