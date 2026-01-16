import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/gallery/msbman3b.jpg"
                                alt="Kesler Makina Hakkında"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            Yarım Asra Yaklaşan <span className="text-primary">Tecrübe</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                1988 yılında Sn. Aşkın KESLER tarafından kurulan firmamız, güçlü Asya ve Avrupa menşeili
                                firmaların makina ve yedek parça temsilciliklerini yapmaktadır.
                            </p>
                            <p>
                                Merkezi İstanbul'da bulunan firmamızın ayrıca Türkmenistan ve Özbekistan'da 2008 yılında
                                faaliyete geçen pamuk, iplik, kumaş, makina ve yedek parça ticareti yapan ofisleri bulunmaktadır.
                                Sektörün öncü markalarını Türk sanayisi ile buluşturmaya devam ediyoruz.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-8">
                            <div>
                                <h3 className="text-4xl font-bold text-primary">38+</h3>
                                <p className="text-gray-500">Yıllık Tecrübe</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-primary">1000+</h3>
                                <p className="text-gray-500">Mutlu Müşteri</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
