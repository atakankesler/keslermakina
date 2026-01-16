import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#1a202c] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <Link to="/">
                            <img
                                src="/images/logo.jpg"
                                alt="Kesler Makina"
                                className="h-12 bg-white p-2 rounded mb-6"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            1988'den beri tekstil sektöründe güvenin adresi. Kaliteli yedek parça ve profesyonel hizmet.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Hızlı Bağlantılar</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Hakkımızda</Link></li>
                            <li><Link to="/#products" className="hover:text-white transition-colors">Ürünlerimiz</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Ürün Grupları</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/products/kureha-apron" className="hover:text-white transition-colors">Kureha Ring/Fitil Apron</Link></li>
                            <li><Link to="/products/hokushin-vortex-apron" className="hover:text-white transition-colors">Hokushin Vortex Apron</Link></li>
                            <li><Link to="/products/brooksbank-combi" className="hover:text-white transition-colors">Brooksbank Combi</Link></li>
                            <li><Link to="/products/unispin-trutzchler" className="hover:text-white transition-colors">Unispin Fırça Telleri</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div id="contact">
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">İletişim</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start">
                                <span className="mr-3 text-primary">📍</span>
                                <span>Perpa Ticaret Merkezi B Blok Kat:12 No:2128 OKMEYDANI - 34384 / ISTANBUL</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-primary">📞</span>
                                <span>+90 (532) 636 4486</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-primary">✉️</span>
                                <span>info@keslermakina.com.tr</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kesler Makina. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
