import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from 'react-flags-select';
import { FaFacebook } from 'react-icons/fa'

const Carousel = () => {
    const [selected, setSelected] = useState('TR');

    const phones ={
        US: '+1',
        DE: '+50',
        TR: '+90'
    }

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    
    return (
        <div className="h-[500px] overflow-hidden relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:w-full before:h-full before:absolute before:z-10">
            <Slider {...carouselSettings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt="Getir Resim" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="Getir Resim" />
                </div>
            </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div className="">
                    <img className="" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="Header Resmi" />
                    <h3 className="text-white text-4xl mt-8 font-semibold">Dakikalar içinde <br />kapınızda</h3>
                </div>
                <div className="w-[400px] rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold text-base">Giriş yap veya kayıt ol</h4>
                    <div className="flex mt-4 w-full justify-between">
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            placeholder="Select Language"
                            onSelect={code => setSelected(code)}
                            selected={selected}
                            className="flag-select"
                        />
                        <div className="flex relative">
                            <input required type="text" className="h-14 px-4 border-2 peer border-gray-200 hover:border-primary-brand-color focus:border-primary-brand-color bg-white rounded focus: outline-none" />
                            <span className="absolute top-0 left-0 h-full px-4 flex peer-focus:h-5 peer-focus:text-xs peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-xs peer-valid:text-primary-brand-color transition-all items-center text-gray-400 text-sm">Telefon Numarası</span>
                        </div>
                    </div>
                    <button className="w-full bg-secondary-brand-color h-14 rounded-md text-primary-brand-color hover:text-secondary-brand-color hover:bg-primary-brand-color font-semibold mt-4 transition-colors">
                        Telefon numarası ile devam et
                    </button>
                    <hr className="my-4 border-b-2 border-gray-100"/>
                    <button className="w-full bg-blue-100 text-blue-600 px-4 h-14 rounded-md flex items-center"> <FaFacebook size="24" /> <span className="mx-auto">Facebook ile devam et</span></button>
                </div>
            </div>
        </div>
    )
}

export default Carousel
