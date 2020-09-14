import React from 'react';

import { Header } from '../Header/Header'
import { Sort } from '../Sort/Sort'
import { FilmsList } from '../FilmsList/FilmsList'
import { SearchField } from '../SearchField/SearchField'

class Films extends React.Component {

    render() {
        const { onSortRating, onSortLiked, resetSorting, filmsList,
            hash, setLikedFilm, setStarsOnFilm, setDislikedFilm, searchByText, insertFilmInfo } = this.props;

        return (
            <React.Fragment>

                <Header />
                <SearchField searchByText={searchByText} />
                <Sort onSortLiked={onSortLiked}
                    onSortRating={onSortRating}
                    resetSorting={resetSorting}
                />

                <FilmsList filmsList={filmsList}
                    hash={hash}
                    setLikedFilm={setLikedFilm}
                    setStarsOnFilm={setStarsOnFilm}
                    setDislikedFilm={setDislikedFilm}
                    insertFilmInfo={insertFilmInfo}
                />

            </React.Fragment>
        )
    }
}

export { Films };