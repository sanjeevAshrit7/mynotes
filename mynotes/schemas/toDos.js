export default {
    name: 'toDos',
    title: 'To Do s',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'significance',
            title: 'Significance',
            type: 'text'
        },
        {
            name: 'dueDate',
            title: 'Due Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        }
    ]
}