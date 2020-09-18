import React from 'react';
import { connect } from 'react-redux'

import { searchByText } from '../../core/actions'
class SearchField extends React.Component {

    search = (e) => {   
        const {searchByText} = this.props;
        searchByText(e.target.value)   
    }

    render() {
        
        return (
            <div className="app__search">
                <input type="text" onInput={this.search} placeholder="Введите название фильма"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})

const mapDispatchToProps = ({
    searchByText
})

const withProps = connect(
    mapStateToProps,
    mapDispatchToProps
)
export default withProps(SearchField);