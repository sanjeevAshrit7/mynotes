export default {
    name: 'peopleToFollow',
    title: 'People To Follow',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'reason',
            title: 'Reason',
            type: 'text'
        },
        {
            name: 'links',
            title: 'Social media Links',
            type: 'array',
            of: [{type: 'url'}]
        }
    ]
}