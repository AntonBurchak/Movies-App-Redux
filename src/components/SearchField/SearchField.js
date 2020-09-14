import React from 'react';

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

export {SearchField};