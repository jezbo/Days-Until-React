import calculateAllDates from './calculateAllDates'

const showDaysButtonHandler = (stateSetter:any) => {
    //clear state for new calculations
    stateSetter([]);
    calculateAllDates(stateSetter);
} 

export default showDaysButtonHandler;