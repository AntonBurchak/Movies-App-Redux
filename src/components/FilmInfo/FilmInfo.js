import React from 'react';
import { connect } from 'react-redux';

import './filminfo.scss';

function FilmInfo(props) {
    const { viewed } = props;

    return (
        <React.Fragment>
            {viewed ? (
                <React.Fragment>
                    <div className="app__filminfo-left">
                        <b>{viewed.title}</b> <br />
                        likes: {viewed.likes} <br />
                        stars: {viewed.stars}
                    </div>
                    <div className="app__filminfo-right">
                        <img src={viewed.posterUrl} alt={viewed.title} />
                        <p><b>Director:</b> {viewed.director}</p>
                        <p><b>Actors:</b> {viewed.actors.join(', ')}</p>
                        <p><b>Genres:</b> {viewed.genres.join(', ')}</p>
                        <p><b>Description:</b> {viewed.description}</p>
                    </div>
                </React.Fragment>
            ) : <h3>Выберите фильм</h3>}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    viewed: state.filmlistReducer.viewed
})

const withConnect = connect(
    mapStateToProps
)
export default withConnect(FilmInfo);