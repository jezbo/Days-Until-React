import React from 'react';
import dates from '../../Data/dates';
import ResultItem from './ResultItem';

const ResultsList = ({listIsActive}:any) => {

     //list state affects the className and consequentially CSS 
    const listSwitch = () => {
        if(listIsActive) return 'active';
    }

    /* -----JSX----- */
    return(
        <ul
            className={`all-results ${listSwitch()}`}
        >
            {ResultItem(dates[0])}
            {ResultItem(dates[1])}
            {ResultItem(dates[2])}
        </ul>
    )
}

export default ResultsList;
