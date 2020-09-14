import React from 'react';
import { Film } from '../Film/Film'

import './films.scss'

function FilmsList(props) {


    const { filmsList, hash, setLikedFilm, setStarsOnFilm, setDislikedFilm, insertFilmInfo } = props;

    return (
        <div className="app__films">
            {filmsList.map((film) => {
                return (
                    <Film film={film}
                        hash={hash}
                        key={hash()}
                        setLikedFilm={() => setLikedFilm(film.id, 'like')}
                        setDislikedFilm={() => setDislikedFilm(film.id, 'dislike')}
                        setStarsOnFilm={setStarsOnFilm}
                        insertFilmInfo={insertFilmInfo}
                    />
                )
            })}

        </div>
    )

}

export { FilmsList };