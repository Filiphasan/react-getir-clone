import React from 'react'

const Category = ({ category: { id, title, image } }) => {
    return (
        <a href="#" className="flex flex-col items-center p-4 group hover:bg-primary-brand-color hover:bg-opacity-20 transition-all rounded" >
            <img src={image} alt={title} className="w-12 h-12 rounded-md border-2 border-gray-100" />
            <span className="text-sm tracking-tight pt-3 group-hover:text-primary-brand-color" >{title}</span>
        </a>
    )
}

export default Category
