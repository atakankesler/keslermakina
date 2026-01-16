import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../data/productData';

// Convert object to array for easier mapping
const products = Object.keys(productData).map((slug, index) => ({
    id: index + 1,
    slug: slug,
    ...productData[slug]
}));

const Products = () => {
    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ürünlerimiz</h2>
                    <p className="text-gray-600">
                        Sektörün en güvenilir markalarıyla çalışıyor, ihtiyacınız olan kaliteyi sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.slug}`}
                            className="group bg-gray-100 rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
                        >
                            <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center p-0">
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className={`w-full h-full transform group-hover:scale-110 transition-transform duration-700 ${product.slug.includes('unispin') || product.slug.includes('brooksbank') || product.slug.includes('vortex-yedek')
                                        ? 'object-cover scale-[1.1]'
                                        : 'object-contain p-6'
                                        } ${product.slug.includes('pu-disk') ? 'brightness-[1.05] contrast-[1.1]' : ''}`}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow bg-gray-50">
                                <div className="min-h-[3rem] mb-2">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                                        {product.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                                    {product.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center text-primary text-sm font-semibold group-hover:text-blue-700 transition-colors group/btn">
                                        Detaylı İncele
                                        <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
