import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const FavoriteItem = ({ favorite: { id, title, alt, image, price } }) => {
    return (
        <div className="flex flex-col items-center p-3 relative text-center">
            <img src={image} alt={title} />
            <div className="text-sm text-primary-brand-color font-semibold">{price}</div>
            <div className="text-sm font-semibold" >{title}</div>
            <div className="text-sm text-gray-700">{alt}</div>
            <button className="absolute w-8 h-8 rounded-lg top-5 right-5 border border-gray-200 shadow-sm flex items-center justify-center text-gray-600">
                <AiOutlinePlus />
            </button>
        </div>
    )
}

export default FavoriteItem
