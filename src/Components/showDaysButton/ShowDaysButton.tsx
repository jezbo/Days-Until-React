import React from 'react';
import showDaysButtonHandler from '../../Functions/showDaysButtonHandler';

const ShowDaysButton = ({stateSetter}: any) => {
    
    /* -----Event Handler----- */
    const onClick = () => {
        showDaysButtonHandler(stateSetter);
    }
        
    /* -----JSX------ */
    return(

        <div className='showDaysButtonContainer'>
            <button 
                className='show'
                onClick={onClick}
            >
                Show Days Until
            </button>
        </div>

    )
}

export default ShowDaysButton;