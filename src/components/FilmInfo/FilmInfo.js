import React from 'react';
import './filminfo.scss';

export function FilmInfo(props) {
    const { film } = props;
    const { likes, stars, title, posterUrl, director, description, actors, genres } = film;

    return (
        <React.Fragment>
            <div className="app__filminfo-left">
                <b>{title}</b> <br />
                likes: {likes} <br />
                stars: {stars}
            </div>
            <div className="app__filminfo-right">
                <img src={posterUrl} alt={title} />
                <p><b>Director:</b> {director}</p>
                <p><b>Actors:</b> {actors.join(', ')}</p>
                <p><b>Genres:</b> {genres.join(', ')}</p>
                <p><b>Description:</b> {description}</p>
            </div>
        </React.Fragment>
    )
}