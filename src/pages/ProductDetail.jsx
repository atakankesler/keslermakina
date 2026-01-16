import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productData } from '../data/productData';

const ProductDetail = () => {
    const { slug } = useParams();
    const product = productData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h2>
                <Link to="/products" className="text-primary hover:underline">Ürünlere Geri Dön</Link>
            </div>
        );
    }

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-8">
                    <Link to="/" className="hover:text-primary">Ana Sayfa</Link> &gt;{' '}
                    <Link to="/products" className="hover:text-primary">Ürünler</Link> &gt;{' '}
                    <span className="text-gray-900">{product.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Main Image */}
                    <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white flex items-center justify-center p-8 h-[400px]">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className={`max-w-full max-h-full object-contain ${slug.includes('pu-disk') ? 'brightness-[1.05] contrast-[1.1]' : ''} ${slug.includes('vortex-yedek') ? 'scale-[1.12]' : ''}`}
                        />
                    </div>

                    {/* Info */}
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{product.title}</h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Özellikler</h3>
                            <ul className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sub Products / Gallery */}
                {product.subProducts && product.subProducts.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Modeller & Çeşitler</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
                            {product.subProducts.map((sub, idx) => (
                                <div key={idx} className="group bg-gray-100 rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                                    <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center p-0">
                                        <img
                                            src={sub.image}
                                            alt={sub.name}
                                            className={`w-full h-full transform group-hover:scale-110 transition-transform duration-700 ${slug.includes('unispin') || slug.includes('brooksbank') || slug.includes('vortex-yedek')
                                                ? 'object-cover scale-[1.11]'
                                                : 'object-contain p-4'
                                                } ${slug.includes('pu-disk') ? 'brightness-[1.05] contrast-[1.1]' : ''}`}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow bg-gray-50">
                                        <h4 className="font-bold text-gray-900 text-sm text-center leading-tight">
                                            {sub.name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-12 p-8 bg-blue-50 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Bu ürün hakkında bilgi almak ister misiniz?</h3>
                        <p className="text-gray-600">Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.</p>
                    </div>
                    <Link
                        to="/contact"
                        className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md whitespace-nowrap"
                    >
                        İletişime Geçin
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
