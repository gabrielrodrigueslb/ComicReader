/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import './ComicCard.scss';

export default function ComicCard({ id, title, img }) {
  return (
    <div className="comic-card">
      <Link to={`/comic/${id}`}>
        <div className="img-container">
          <img src={img} alt={title} />
        </div>
      </Link>

      <div className="card-infos">
        <p className="title">{title}</p>
      </div>
    </div>
  );
}
