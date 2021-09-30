import React, {useEffect, useState} from 'react'
import categoryData from 'api/categories'
import Category from './Category'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setCategories(categoryData);
    }, [])
    return (
        <div className="bg-white w-full shadow-lg">
            <div className="container mx-auto py-5">
                <h3 className="text-sm text-gray-600 font-semibold mb-3">Kategoriler</h3>
                <div className="grid grid-cols-10">
                    {
                        categories && categories.map((category,index) => <Category key={index} category={category} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories
