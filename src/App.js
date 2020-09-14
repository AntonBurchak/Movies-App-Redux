import React from 'react';

import './App.scss';


import { Films } from './components/Films/Films';
import { FilmInfo } from './components/FilmInfo/FilmInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: null,
      _sortedFilms: null,
      _originalFilms: null,
      viewed: null
    }
  }

  async getFilmsFromServer() {

    return await fetch('http://127.0.0.1:5500/data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    })
      .then(response => response.json())
      .then(data => {
        this.setState(() => ({
          films: data.movies,
          _originalFilms: data.movies
        }))
      });

  }

  searchByText = (text) => {
    const { _originalFilms } = this.state;
    let filteredFilms;

    filteredFilms = _originalFilms.filter(film => {
      const filmTitle = film.title.toLocaleLowerCase();
      const inputTitle = text.toLocaleLowerCase();

      return filmTitle.indexOf(inputTitle) !== -1 ? true : false
    });

    if (text.length === 0) {
      filteredFilms = _originalFilms;
    }
    this.setState(() => ({
      films: filteredFilms
    }))
  }

  sortByLiked = () => this.sortBy('likes');

  sortByRating = () => this.sortBy('stars');

  sortBy = (property) => {
    const { films } = this.state;
    const sorted = [...films].sort((a, b) => b[property] - a[property]);

    this.setState(() => ({
      films: sorted
    }))
  }

  resetSorting = () => {
    this.setState(({ _originalFilms }) => ({
      films: _originalFilms
    }))
  }


  setLikedFilm = (id) => {
    const { films } = this.state;
    const film = films.find(film => film.id === id);

    let maxLikes = film.likes;
    if (!film.liked) {
      ++maxLikes
      film.disliked = false
    } else {
      --maxLikes
    }

    return this.updateFilmsArray(id, 'likes', maxLikes, 'like');
  }

  setDislikedFilm = (id) => {
    const { films } = this.state;
    const film = films.find(film => film.id === id);

    let maxLikes = film.likes;
    if (film.liked) {
      --maxLikes
      film.liked = !film.liked
    }
    return this.updateFilmsArray(id, 'likes', maxLikes, 'dis');
  }

  setStarsOnFilm = (id, stars) => {
    return this.updateFilmsArray(id, 'stars', stars);
  }

  updateFilmsArray = (id, property, propertyValue, type) => {
    const { films, _originalFilms } = this.state;
    const film = films.find(film => film.id === id);

    const newFilm = { ...film, [property]: propertyValue };
    const updateFilmsArray = [...films];
    const index = updateFilmsArray.indexOf(film);

    switch (type) {
      case 'dis':
        newFilm.disliked = !newFilm.disliked;
        break;
      case 'like':
        newFilm.liked = !newFilm.liked;
        break;
      default:
        break;
    }

    newFilm[property] = propertyValue;
    updateFilmsArray[index] = newFilm;

    const copyModifiedFilms = [..._originalFilms];
    copyModifiedFilms[index] = newFilm;

    this.setState(() => ({
      films: updateFilmsArray,
      _originalFilms: copyModifiedFilms
    }))
  }

  componentDidMount() {
    this.getFilmsFromServer()
  }

  generateHash() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  insertFilmInfo = (id = 1) => {
    const { films } = this.state;
    const film = films.find(film => film.id === id);

    this.setState(() => ({
      viewed: film
    }), console.log(this.state))
  }

  insertFilmsList = () => {
    if (this.state.films) {
      return (
        <Films onSortLiked={this.sortByLiked}
          onSortRating={this.sortByRating}
          resetSorting={this.resetSorting}
          filmsList={this.state.films}
          hash={this.generateHash}
          setLikedFilm={this.setLikedFilm}
          setDislikedFilm={this.setDislikedFilm}
          setStarsOnFilm={this.setStarsOnFilm}
          searchByText={this.searchByText}
          insertFilmInfo={this.insertFilmInfo} />
      )
    }
  }

  render() {
    const { viewed } = this.state;

    return (
      <div className="app">
        <div className="app__list">
          {this.insertFilmsList()}
        </div>
        <div className="app__filminfo">
          {viewed ? <FilmInfo film={viewed} /> : <h3>Выберите фильм</h3>}
        </div>

      </div>
    );
  }
}

export { App };
