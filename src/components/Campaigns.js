import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import bannersData from 'api/banners.json'


const Campaigns = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        setBanners(bannersData);
    }, [])
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className="container mx-auto py-8" >
            <h3 className="text-sm font-semibold">Kampanyalar</h3>
            <Slider className="-mx-5" {...carouselSettings}>
                {
                    banners.length && banners.map((banner,index) => ( 
                        <div key={index} className="p-5">
                            <img className="rounded-lg" src={banner.image} alt={banner.id} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Campaigns