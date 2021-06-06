type dataObject = {
    id:string,
    name: string,
    subItems: dataObject | []
}[]


const sidebarData: dataObject = [
    {
        id: 'daysUntil',
        name: 'Days Until',
        subItems: [
            {
                id: 'lookForwardTo',
                name: 'Dates to look forward to',
                subItems: [],
            },
            {
                id: 'uk2022BankHolidays',
                name: 'UK 2022 bank holidays',
                subItems: [],
            }
        ]
    }
]
export default sidebarData;




