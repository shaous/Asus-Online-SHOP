import React from 'react'
import { useRouter } from 'next/router'

const Category = () =>
{

    const categoryName = useRouter()

    return (
        <div>Category - {categoryName.query}</div>
    )
}

export default Category