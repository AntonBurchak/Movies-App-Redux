import React from 'react';
import { connect } from 'react-redux';

import { setLikedFilm, setDislikedFilm, insertFilmInfo, setStarsOnFilm } from '../../core/actions';
class Film extends React.Component {

    onStarsChange = (e) => {
        const value = e.target.getAttribute('data-value')
        const { setStarsOnFilm, film } = this.props;
        setStarsOnFilm(film.id, value);
    }

    renderStars(currentQuantity, defaultQuantity = 5) {
        const items = [];
        const { film } = this.props;

        for (let i = 0; i < defaultQuantity; i++) {
            if (i < film.stars) {
                items.push(
                    <button className="star-btn"
                        data-value={i + 1}
                        onClick={this.onStarsChange}
                        key={i}>

                        <i className="fa fa-star star-active"
                            data-value={i + 1}></i>
                    </button>
                )
            } else {
                items.push(
                    <button className="star-btn"
                        data-value={i + 1}
                        onClick={this.onStarsChange}
                        key={i}>

                        <i className="fa fa-star"
                            data-value={i + 1}></i>
                    </button>
                )
            }
        }

        return (
            <React.Fragment>
                {items}
            </React.Fragment>
        )
    }

    render() {
        const { film, setLikedFilm, setDislikedFilm, insertFilmInfo } = this.props;


        return (
            <div className="app__films-item film" data-id={film.id}>
                <div className="film__main">
                    <div className="film__likes">
                        <div className="film__btns">
                            <button className={"film__likes-btn like" + (film.liked ? " active" : "")}
                                onClick={() => setLikedFilm(film.id)}>

                                <i className="fa fa-thumbs-up"></i>

                            </button>

                            <button className={"film__likes-btn dislike" + (film.disliked ? " active" : "")}
                                onClick={() => setDislikedFilm(film.id)}>

                                <i className="fa fa-thumbs-down"></i>

                            </button>
                        </div>
                        <div className="film__likes-main">
                            <span>{film.likes}</span>
                            <span>likes</span>
                        </div>
                    </div>
                    <div className="film__preview">

                        <h3 className="film__title" onClick={() => insertFilmInfo(film.id)}>{film.title}</h3>

                        <div className="film__image">

                            <img src={film.posterUrl}
                                alt={film.title} />

                        </div>
                    </div>
                </div>
                <div className="film__stars">
                    <span>Stars: {film.stars}</span>
                    {this.renderStars()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
  })
  const mapDispatchToProps = ({
    setLikedFilm, 
    setDislikedFilm, 
    insertFilmInfo, 
    setStarsOnFilm 
  })
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  export default withConnect(Film);
  