import datesData from '../Data/datesData';
import calculateDaysUntil from './calculateDaysUntil'

type daysUntilResults = {
    stateSetter: (prev:[string, number]) => void 
}

const calculateForAllDates = (stateSetter:daysUntilResults) => {

    datesData.forEach(element => {
        calculateDaysUntil(stateSetter, element.name, element.date)
    })
}

export default calculateForAllDates;