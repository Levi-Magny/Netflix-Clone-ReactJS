import React, { useEffect, useState } from 'react';
import {getHomeList, getMovieInfo} from '../Tmdb'
import MovieRoll from '../components/MovieRoll';
import FilmeDestaque from '../components/FilmeDestaque';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function Browse() {
    const [movieList, setMovieList] = useState([]);
    const [dadosDestaques, setDadosDestaque] = useState(null);
    const [detalhes, setDetalhes] = useState({filme:{}, mostrar:false});
  
    const [headerBlack, setHeaderBlack] = useState(false);
    
    useEffect(()=>{
      const loadAll = async () => {
        // pegando a lista inteira
        let list = await getHomeList();
        setMovieList(list);
  
        // pegando destaques.
        let originals = list.filter(i => i.slug === 'Originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1 ));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await getMovieInfo(chosen.id, 'tv');
  
        setDadosDestaque(chosenInfo);
      }
  
      loadAll();
    },[]);
  
    useEffect(() => {
      const scrollListener = () => {
        if(window.scrollY > 10) {
          setHeaderBlack(true);
        } else {
          setHeaderBlack(false);
        }
      }
  
      window.addEventListener('scroll', scrollListener);
  
      return () => {
        window.removeEventListener('scroll', scrollListener);
      }
    },[])
  
    function onClickMovie(movie){
      // console.log(movie);
      setDetalhes({filme:movie, mostrar:true});
      document.body.classList.add("hideOverflow")
    };
  
    function onCloseModal(){
      setDetalhes({filme:{}, mostrar:false});
      document.body.classList.remove("hideOverflow");
    }
  
    return (
      <div >
        {/* Header */}
        <Header black={headerBlack} />
        
        {/* Destaques */}
        {dadosDestaques && 
          <FilmeDestaque item={dadosDestaques}/>
        }
  
        {/* Modal (quando usu??rio clicar em um filme) */}
        {detalhes.mostrar &&
          <Modal
            onClose={onCloseModal}
            detalhesFilme={detalhes.filme}
          />
        }
  
        {/* Lista de Filmes por categoria */}
        <section className="lists">
          {movieList.map((item, key) => {
            return (
              <MovieRoll key={key} title={item.title} items={item.items} onClickMovie={onClickMovie}/>
            );
          })}
        </section>
  
        {/* Footer */}
        <footer>
          Feito por <a rel="noreferrer" target="_blank" href="https://github.com/Levi-Magny"><strong>Levi Magny</strong></a><br/>
          Direitos de imagem para <a rel="noreferrer" target="_blank" href="https://netflix.com/"><strong>Netflix</strong></a> <br/>
          Dados obtidos do site Themoviedb.org.
        </footer>
  
        {/* Gif para carregamento da p??gina */}
        {movieList.length === 0 && 
          <div className="loading">
            <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="carregando" />
          </div>
        }
      </div>
    );
}