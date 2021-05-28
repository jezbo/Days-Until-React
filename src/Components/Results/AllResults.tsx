import React from 'react';
import ResultListItem from './ResultListItem';

const AllResults = (results) => {
    return(

        <ul
            className='all-results-container'
        >
            {ResultListItem}
        </ul>
    )
}

export default AllResults;