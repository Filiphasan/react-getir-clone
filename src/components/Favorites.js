import React, { useEffect, useState } from 'react'
import favoritesData from 'api/favorites.json'
import FavoriteItem from 'components/FavoriteItem'

const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        setFavorites(favoritesData);
    }, [])
    return (
        <div className="container mx-auto">
            <h3 className="text-sm font-semibold">Favorites</h3>
            <div className="grid grid-cols-8 bg-white rounded-lg p-4">
                {
                    favorites.length && favorites.map((favorite, index) => (
                        <FavoriteItem key={favorite.id} favorite={favorite} />
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites
