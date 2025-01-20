import { useEffect, useState } from "react";
import ComicCard from '../ComicCard/ComicCard';
import './ComicList.scss';
import comics from '../../data/dados.js'

export function ComicList() {

    const [comicsList, setComicList] = useState([]);

    useEffect(() => {
        // Simulando um fetch a partir do arquivo local
        setTimeout(() => {
          setComicList(comics); // "Simulando" uma resposta de API
        }, 1000); // Adicionando um delay para parecer uma requisição
      }, []);



  return (
    <div className="comic-list">
      <h1 className="title-category">HQS</h1>
      <div className='container-list'>
        {comicsList.length === 0 ? (<p>Carregando...</p>): (
            comicsList.map((comic) => (
                <ComicCard
                key={comic.id}
                id={comic.id}
                title={comic.title}
                img={comic.img}
                />
            ))
        )}
        </div>
    </div>
  );
}
