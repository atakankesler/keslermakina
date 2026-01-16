import React, { useEffect } from 'react';

const partners = [
    {
        name: 'Kureha',
        logo: '/images/partners/kureha.jpg',
        description: 'Japon menşeli, dünyanın önde gelen apron ve manşon üreticisi.',
        link: 'http://www.mangalsingh.com/'
    },
    {
        name: 'Hokushin',
        logo: '/images/partners/hokushin.png',
        description: 'Vortex (Airjet) iplik makinaları için özel parça ve PU disk üreticisi.',
        link: 'http://www.synztec.co.jp/index-eng/pudisc_eng/'
    },
    {
        name: 'Brooksbank',
        logo: '/images/partners/brooksbank.jpg',
        description: 'İngiliz kalitesiyle tekstil aksesuarları ve penye apronları.',
        link: 'http://www.brooksbank.com/'
    },
    {
        name: 'UniSpin',
        logo: '/images/partners/ucc.jpg',
        description: 'Tarak garnitür ve fırça telleri konusunda uzman çözümler.',
        link: 'http://www.unispincardclothing.com/'
    },
];

const PartnersPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pb-20 bg-white">
            <div className="bg-gray-100 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İş Ortaklarımız</h1>
                <p className="text-lg text-gray-600">Dünyanın en iyi markalarını Türkiye'ye getiriyoruz.</p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex flex-col md:flex-row items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow gap-6">
                            <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center p-4 bg-gray-50 rounded-xl">
                                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                                <p className="text-gray-600 mb-6">{partner.description}</p>
                                <a
                                    href={partner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary font-semibold hover:underline"
                                >
                                    Resmi Web Sitesi
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;
