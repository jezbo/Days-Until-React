const calculateDaysUntil = (date:Date) => {

    //CALCULATE DAYS UNTIL:

    //format the given date
    //get todays date
    const dateToday = new Date();

    //convert our dates to number:  milliseconds since epoch
    const givenDateInMS = date.getTime();

    const dateTodayInMS = dateToday.getTime()

    //calculate time until the given date in ms
    const millisecondsUntilGivenDate = () => {
        return givenDateInMS - dateTodayInMS;
    }
    
    //calculate milliseconds in a day
    const millisecondsInADay = () => {
        return (24*60*60*1000);
    }

    //convert milliseconds until date, to days until date
    const millisecondsToDays = () => {
        return millisecondsUntilGivenDate() / millisecondsInADay();
    }
      
    //return correct result for the remainder of current day
    return Math.ceil(millisecondsToDays());
}

export default calculateDaysUntil;