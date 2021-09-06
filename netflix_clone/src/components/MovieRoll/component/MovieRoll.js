import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './MovieRoll.css'

/**
 * 
 * @param { object } info_movies Objeto contendo o titulo da lista e os itens que vieram da API 
 * @returns Retorna um  component react que será uma lista contendo os filmes/séries dessa categoria
 */
function MovieRoll({title, items}){
    const [scrollX, setScrollX] = useState(0);

    function handleLeftArrow(){
        let x = scrollX + Math.round(window.innerWidth)/2; // pegando largura da tela
        
        if(x > 0){
            x = 0;
        }

        setScrollX(x);
    }

    function handleRightArrow(){
        let x = scrollX - Math.round(window.innerWidth)/2;
        let length = -Math.round(window.innerWidth);

        console.log(items.results.length)

        if (x < length){
            x = length;
        }
        setScrollX(x);
    }

    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
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