import React from 'react';
import { connect } from 'react-redux';

import { sortBy, resetSorting } from '../../core/actions';
class Sort extends React.Component {

    render() {
        const { sortBy, resetSorting } = this.props;

        return (
            <div className="app__sort">
                <h4>Sort movies</h4>
                <button onClick={() => sortBy('likes')}>by likes</button>
                <button onClick={() => sortBy('stars')}>by rating</button>
                <button onClick={resetSorting}>reset</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
  })
  const mapDispatchToProps = ({
    sortBy,
    resetSorting
  })
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  export default withConnect(Sort);
  