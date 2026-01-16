import React from 'react';

const Partners = () => {
    const partners = [
        { name: 'Kureha', logo: '/images/partners/kureha.jpg' },
        { name: 'Hokushin', logo: '/images/partners/hokushin.png' },
        { name: 'Brooksbank', logo: '/images/partners/brooksbank.jpg' },
        { name: 'UCC', logo: '/images/partners/ucc.jpg' },
    ];

    return (
        <section id="partners" className="py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-2xl font-bold text-center text-gray-400 mb-10 uppercase tracking-widest">
                    İş Ortaklarımız
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <div key={partner.name} className="w-40 h-20 flex items-center justify-center">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
