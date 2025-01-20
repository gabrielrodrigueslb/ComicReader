import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import comics from '../data/dados.js';
import Header from '../components/Header/Header';

import './Comic.scss';

export default function Comic() {
  const { id } = useParams();

  const comic = comics.find((comic) => comic.id === id); // Sem parseInt

  if (!comic) {
    return <p>HQ não encontrada!</p>;
  }

  return (
    <div>
      <Header title={comic.title} subtitle="Ótima escolha!" />
        <Link className="btn-back" to={'/'}>
          <FaArrowLeft />
        </Link>
    

      <div className="comic-container">
        <div className="img-container">
          <img src={comic.img} alt={comic.title} />
        </div>

        <div className="card-infos">
          <h3 className="title">{comic.title}</h3>
          <p className="author">{comic.roteiro}</p>
          <p className="description">{comic.dsc}</p>
          <a className="button" href={comic.pdf} target="_blank">
            Ler agora
          </a>
        </div>
      </div>
    </div>
  );
}
