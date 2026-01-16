import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "/images/gallery/msbapr1b.jpg",
        "/images/gallery/msbman2b.jpg",
        "/images/gallery/hokapr1b.png",
        "/images/gallery/unifil1b.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative py-20 lg:h-[75vh] min-h-[600px] flex items-center bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2 z-10">
                        <div className="max-w-2xl animate-fade-in-up">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                                Tekstil Üretiminde <span className="text-primary">Yüksek Verimlilik</span> ve Düşük Maliyet
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                                Kureha, Hokushin ve Brooksbank gibi dünya lideri markaların Türkiye distribütörü olarak,
                                kısa ve uzun elyaf iplik üreticileri için yenilikçi ve ekonomik çözümler sunuyoruz.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('products');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-medium rounded-full transition-all transform hover:-translate-y-1 shadow-lg"
                                >
                                    Ürünlerimizi İnceleyin
                                </button>
                                <Link
                                    to="/contact"
                                    className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all shadow-sm"
                                >
                                    İletişime Geçin
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visual */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-gray-100 w-full max-w-md bg-white h-64 md:h-80">
                            {images.map((img, index) => (
                                <img
                                    key={img}
                                    src={img}
                                    alt="Tekstil Makinesi"
                                    className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            ))}
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                        <div className="absolute bottom-0 left-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
