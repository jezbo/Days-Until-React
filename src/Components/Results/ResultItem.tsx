import React from 'react';

//Data Validation
interface dateData {
    name: string;
    date:Date
}
interface Date {
    year: number;
    month: number;
    day: number;
}

/** Function Component */
const ResultItem = ({name, date}:dateData) => {

    //CALCULATE DAYS UNTIL:

    //format the given date
    const givenDate = () => {
        return new Date(date.year, date.month, date.day).getTime();
    }

    //get todays date
    const dateToday = () => {
        return new Date().getTime();
    }

    //calculate time until the given date in ms
    const millisecondsUntilDate = () => {
        return givenDate()-dateToday();
    }
    
    //calculate milliseconds in a day
    const millisecondsInADay = () => {
        return (24*60*60*1000);
    }

    //convert milliseconds until date, to days until date
    const millisecondsToDays = () => {
        return millisecondsUntilDate() / millisecondsInADay();
    }
      
    //correct result for the remainder of current day
    const daysUntil = () => {
        return Math.ceil(millisecondsToDays());
    }

    /* -----JSX----- */
    return(

        <li className='result-item'>
           {daysUntil()} days until {name} 
        </li>

    )
    
}

export default ResultItem;