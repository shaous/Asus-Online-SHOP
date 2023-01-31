export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image(Maximum Is 6)',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category Of Product(Monitor , Laptop , Pc . . .)',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'type',
            title: 'Product Category(Rog , Tuf , Strix)',
            type: 'string',
            options: {
                list: [
                    { title: 'Rog', value: 'rog' },
                    { title: 'Tuf', value: 'tuf' },
                    { title: 'Strix', value: 'strix' }
                ]
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}