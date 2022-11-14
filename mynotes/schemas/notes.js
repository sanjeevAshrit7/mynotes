export default {
    name: 'notes',
    title: 'Notes',
    type: 'document',
    fields: [
        {
            name: 'notesName',
            title: 'Notes Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'detail',
            title: 'Details',
            type: 'array',
            of: [
                {
                    name: 'qandA',
                    type: 'object',
                    title: "QandA",
                    fields: [
                        {
                            name: 'qestion',
                            type: 'string',
                            title: 'Qestion'
                        },
                        {
                            name: 'answer',
                            type: 'array',
                            title: 'Answer',
                            of: [{type: 'block'}]
                        },
                        {
                            name: 'links',
                            title: "Links",
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
                },
            ]
        },
        {
            title: "Note Image",
            name: "noteImage",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "subject",
            title: "Subject",
            type: "reference",
            to: {
                type: "subjects"
            }
        },
        {
            title: 'Related Doc',
            name: 'relatedDocs',
            type: 'file',
            fields: [
                {
                    name: 'description',
                    type: 'string',
                    title: 'Description'
                },
            ]
        }
    ],
}