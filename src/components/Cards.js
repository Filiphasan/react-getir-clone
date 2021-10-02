import React, { useEffect, useState } from 'react'
import cardsData from 'api/cards.json'

const Cards = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(cardsData);
    }, [])

    return (
        <div className="container mx-auto my-6 grid grid-cols-3 gap-x-5 rounded-lg">
            {
                cards.length && cards.map((card, index) => (
                    <div key={card.id} className="bg-white rounded-lg shadow-md flex flex-col items-center gap-y-2 text-center px-10 py-14">
                        <img src={card.image} alt={card.title} className="mb-3" />
                        <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
                        <p className="text-sm text-gray-700" >{card.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards
