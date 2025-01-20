/* eslint-disable react/prop-types */
import ComicCard from "../ComicCard/ComicCard";
import "./ComicList.scss";

export function ComicList({ comics }) {
  return (
    <div className="container-list">
      {comics.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        comics.map((comic) => (
          <ComicCard
            key={comic.id}
            id={comic.id}
            title={comic.title}
            img={comic.img}
          />
        ))
      )}
    </div>
  );
}
