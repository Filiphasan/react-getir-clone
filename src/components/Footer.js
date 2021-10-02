import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="bg-white pt-10 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-5">
                    <div>
                        <h6 className="text-lg text-primary-brand-color mb-4">Getiri İndir</h6>
                        <nav className="flex flex-col gap-4">
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
                    <div>
                        <h6 className="text-lg text-primary-brand-color mb-4">Getiri İndir</h6>
                        <ol className="list-none flex flex-col justify-between">
                            <li className="pb-4 text-sm">
                                <a href="#">Hakkımızda</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">Kariyer</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">İletişim</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">COVID-19 Duyuru</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">Sosyal Sorumluluk Projeleri</a>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h6 className="text-lg text-primary-brand-color mb-4">Yardıma mı ihtiyacınız var?</h6>
                        <ol className="list-none flex flex-col justify-between">
                            <li className="pb-4 text-sm">
                                <a href="#">Sıkça Sorulan Sorular</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">Kişisel Verilerin Korunması</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">Gizlilik Politikası</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">Kullanım Koşulları</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">Çerez Politikası</a>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h6 className="text-lg text-primary-brand-color mb-4">İş Ortağımız Olun</h6>
                        <ol className="list-none flex flex-col justify-between">
                            <li className="pb-4 text-sm">
                                <a href="#">Bayimiz Olun</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">Deponuzu Kiralayın</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">GetirYemek Restoranı Olun</a>
                            </li>
                            <li className="pb-4 text-sm">
                                <a href="#">GetirÇarşı İşletmesi Olun</a>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <img className="p-4" src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png" alt="QR Code" />
                    </div>
                </div>
                <div className="flex py-6">
                    <span className="text-sm pr-3" >&copy; 2021 Getir</span>
                    <div className="text-sm pr-3">
                        <a href="#">Bilgi Toplumu Hizmetleri</a>
                    </div>
                    <ol className="list-none flex items-center ml-auto">
                        <li className="text-gray-500 px-3"><FaFacebook size="24" /></li>
                        <li className="text-gray-500 px-3"><FaTwitter size="24" /></li>
                        <li className="text-gray-500 px-3"><FaInstagram size="24" /></li>
                        <li className="text-gray-500 px-3 flex items-center"><FaGlobe size="20" /> <span className="pl-2">Türkçe (TR)</span></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Footer
