import React from 'react'

const MobileApp = () => {
    return (
        <div className="bg-mobile-app text-white bg-primary-brand-color container mx-auto rounded-lg my-6 flex justify-between items-center">
            <div className="flex flex-col gap-y-4 pl-10">
                <h3 className="font-bold text-2xl tracking-tight">Getir'i indirin</h3>
                <p className="font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                <nav className="flex gap-2 items-center">
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="App Store" />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="Play Store" />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="App Gallery" />
                    </a>
                </nav>
            </div>
            <picture>
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
            </picture>
        </div>
    )
}

export default MobileApp
