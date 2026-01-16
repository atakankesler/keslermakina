import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Ana Sayfa', href: '/' },
        { name: 'Hakkımızda', href: '/about' },
        { name: 'Ürünlerimiz', href: '/#products' }, // Scrolls to products section
        { name: 'İş Ortaklarımız', href: '/partners' },
        { name: 'İletişim', href: '/contact' },
    ];

    return (
        <nav className={`sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 transition-all duration-300 ${scrolled ? 'py-2' : ''}`}>
            <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src="/images/logo.jpg" alt="Kesler Makina" className="h-12 md:h-14 object-contain" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                to={link.href}
                                className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-primary transition-colors py-4 inline-block"
                            >
                                {link.name}
                                <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>

                            {/* Mega Menu for Products */}
                            {link.name === 'Ürünlerimiz' && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[800px] bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden top-full">
                                    <div className="grid grid-cols-2 gap-4 p-6 overflow-y-auto max-h-[600px]">
                                        <Link to="/products/kureha-apron" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/msbapr1b.jpg" alt="Kureha" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">KUREHA Ring ve Fitil Apronları</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/kureha-manson" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/msbman2b.jpg" alt="Kureha" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">KUREHA Ring ve Fitil Manşonları</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/kureha-texture" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/msbtex1b.jpg" alt="Kureha" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">KUREHA Texture Apron ve Manşon</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/hokushin-vortex-apron" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/hokapr1b.png" alt="Hokushin" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">HOKUSHIN Vortex (Airjet) Apron</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/hokushin-vortex-manson" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/hokman1b.jpg" alt="Hokushin" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">HOKUSHIN Vortex (Airjet) Manşon</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/hokushin-pu-disk" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/hokpu1b.jpg" alt="PU Disk" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">HOKUSHIN Texture PU Diskleri</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/unispin-trutzchler" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/unifil1b.jpg" alt="Unispin" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">UNISPIN Trutzchler Fırça Telleri</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/unispin-rieter" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/unifil2b.jpg" alt="Unispin" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">UNISPIN Rieter Fırça Telleri</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/brooksbank-combi" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/brook17.jpg" alt="Brooksbank" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">BROOKSBANK Combi Penye Apron</h4>
                                            </div>
                                        </Link>
                                        <Link to="/products/kureha-vortex-yedek" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                            <img src="/images/gallery/vortexyedek1.jpg" alt="Yedek" className="w-12 h-12 object-cover rounded-md border border-gray-200" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover/item:text-primary text-sm">MSB KUREHA Vortex Yedekleri</h4>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                                        <Link to="/#products" className="text-sm font-semibold text-primary hover:text-blue-700">Tüm Ürünleri Gör →</Link>
                                    </div>
                                </div>
                            )}
                            {/* Mega Menu for Hakkımızda */}
                            {link.name === 'Hakkımızda' && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[450px] bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden top-full">
                                    <div className="p-6">
                                        <div className="flex items-start gap-5">
                                            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                                                <img src="/images/slider/02-clean.png" alt="Hakkımızda" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2 text-lg">Biz Kimiz?</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                    1988'den beri tekstil makineleri ve yedek parça sektöründe, dünya markalarıyla Türk sanayisini buluşturuyoruz.
                                                </p>
                                                <Link to="/about" className="text-xs font-bold text-primary hover:text-blue-700 uppercase tracking-widest transition-colors flex items-center">
                                                    Şirket Profilini İncele
                                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Mega Menu for İş Ortaklarımız */}
                            {link.name === 'İş Ortaklarımız' && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[500px] bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden top-full">
                                    <div className="p-6">
                                        <h4 className="font-bold text-gray-900 mb-4 px-2">Global Partnerlerimiz</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <Link to="/partners" className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 bg-white h-20 group/partner">
                                                <img src="/images/partners/kureha.jpg" alt="Kureha" className="h-10 object-contain max-w-full opacity-80 group-hover/partner:opacity-100 transition-opacity" />
                                            </Link>
                                            <Link to="/partners" className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 bg-white h-20 group/partner">
                                                <img src="/images/partners/hokushin.png" alt="Hokushin" className="h-10 object-contain max-w-full opacity-80 group-hover/partner:opacity-100 transition-opacity" />
                                            </Link>
                                            <Link to="/partners" className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 bg-white h-20 group/partner">
                                                <img src="/images/partners/brooksbank.jpg" alt="Brooksbank" className="h-10 object-contain max-w-full opacity-80 group-hover/partner:opacity-100 transition-opacity" />
                                            </Link>
                                            <Link to="/partners" className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 bg-white h-20 group/partner">
                                                <img src="/images/partners/ucc.jpg" alt="UCC" className="h-10 object-contain max-w-full opacity-80 group-hover/partner:opacity-100 transition-opacity" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                                        <Link to="/partners" className="text-sm font-semibold text-primary hover:text-blue-700">Tüm Markalarımız →</Link>
                                    </div>
                                </div>
                            )}

                            {/* Mega Menu for İletişim */}
                            {link.name === 'İletişim' && (
                                <div className="absolute right-0 mt-0 w-[400px] bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden top-full origin-top-right">
                                    <div className="p-6">
                                        <h4 className="font-bold text-gray-900 mb-4 px-2">Bize Ulaşın</h4>
                                        <div className="space-y-4">
                                            <a href="tel:+905326364486" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group/contact">
                                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary flex-shrink-0 group-hover/contact:bg-blue-100 transition-colors">
                                                    📞
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Telefon</p>
                                                    <p className="text-gray-900 font-semibold">+90 (532) 636 4486</p>
                                                </div>
                                            </a>
                                            <a href="mailto:info@keslermakina.com.tr" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group/contact">
                                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 group-hover/contact:bg-green-100 transition-colors">
                                                    ✉️
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">E-Posta</p>
                                                    <p className="text-gray-900 font-semibold">info@keslermakina.com.tr</p>
                                                </div>
                                            </a>
                                            <Link to="/contact" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group/contact">
                                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0 group-hover/contact:bg-orange-100 transition-colors">
                                                    📍
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Adres</p>
                                                    <p className="text-sm text-gray-700 mt-1">
                                                        Perpa Ticaret Merkezi B Blok<br />Kat:12 No:2128 Şişli / İSTANBUL
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                                        <Link to="/contact" className="text-sm font-semibold text-primary hover:text-blue-700">Haritada Göster →</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-gray-800 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t">
                    <div className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary border-b border-gray-100 last:border-none"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
