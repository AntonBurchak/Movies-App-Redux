import React from 'react';
import './App.scss';


import FilmInfo from './components/FilmInfo/FilmInfo';

import { connect } from 'react-redux';
import { getFilmsList } from './core/actions';


import { Header } from './components/Header/Header'
import Sort from './components/Sort/Sort'
import FilmsList from './components/FilmsList/FilmsList'
import SearchField from './components/SearchField/SearchField'

class App extends React.Component {

  generateHash() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }


  render() {

    return (
      <div className="app">
        <div className="app__list">
          <Header />
          <SearchField />
          <Sort />
          <FilmsList />
        </div>
        <div className="app__filminfo">
          <FilmInfo />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.filmlistReducer.films
})
const mapDispatchToProps = ({
  getFilmsList,
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default withConnect(App);
