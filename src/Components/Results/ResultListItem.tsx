import React from 'react';


type resultArray = {
    results: {name:string, days:number}[]
}

const ResultListItem = ({results}: resultArray) => {
    const component:any = results.map((element, index) => {
        return (

            <li
                className='result-item'
                key={index.toString()}
            >
                {element.days} days until {element.name}
            </li>

        )
    })
    return component;
}

export default ResultListItem;