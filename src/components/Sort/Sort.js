import React from 'react';

class Sort extends React.Component {

    render() {
        const { onSortRating, onSortLiked, resetSorting } = this.props;

        return (
            <div className="app__sort">
                <h4>Sort movies</h4>
                <button onClick={onSortLiked}>by likes</button>
                <button onClick={onSortRating}>by rating</button>
                <button onClick={resetSorting}>reset</button>
            </div>
        )
    }
}

export { Sort }