import React from 'react';

const Header = () => {

    /* -----Variables----- */
    const headerText='This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day.';

    /* -----JSX----- */
    return(

        <div className='headerContainer'>
            <h2 className='header'>{headerText}</h2>
        </div>

    )
}

export default Header;