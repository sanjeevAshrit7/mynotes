export default {
    name: 'ubiqueSolutions',
    title: 'Unique Solutions',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'solution',
            type: 'string'
        },
        {
            name: 'tech',
            title: 'Tech',
            type: 'string'
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    name: 'link',
                    title: 'Link',
                    type: 'string'
                }
            ]
        }
    ]
}