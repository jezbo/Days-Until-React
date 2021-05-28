import React from 'react';
import calculateDaysUntil from '../../Functions/calculateDaysUntil';

//Data Validation
export interface dateData {
    date: Date;
    name: string;
}

/** Function Component */
const ResultItem = ({date, name}:dateData) => {

    /* -----JSX----- */
    return(

        <li className='result-item'>
           {calculateDaysUntil(date)} days until {name} 
        </li>

    )
    
}

export default ResultItem;