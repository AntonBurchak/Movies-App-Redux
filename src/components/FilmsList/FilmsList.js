import React from 'react';
import Film from '../Film/Film'
import { connect } from 'react-redux';
import { getFilmsList } from '../../core/actions';


import './films.scss'

class FilmsList extends React.Component {


    componentDidMount() {
        const {getFilmsList} = this.props;
        getFilmsList();
    }

    render () {
        const { films } = this.props;
        
        return (
            
            <div className="app__films">
                {films.map((film, index) => {
                    return (
                        <Film key={index} film={film}/>
                    )
                })}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})
const mapDispatchToProps = ({
    getFilmsList
})

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)
export default withConnect(FilmsList);