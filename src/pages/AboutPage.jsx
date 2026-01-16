import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pb-20 bg-white">
            {/* Header */}
            <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        1988'den beri tekstil sektöründe güven ve kalitenin adresi.
                    </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-50"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                    <p>
                        <strong>1988 yılında Sn. Aşkın KESLER tarafından kurulan firmamız</strong>, güçlü Asya ve Avrupa menşeili
                        firmaların makina ve yedek parça temsilciliklerini yapmaktadır. Kurulduğumuz günden bu yana,
                        kaliteli hizmet anlayışı ve müşteri memnuniyeti odaklı çalışma prensiplerimizle sektörde saygın bir yer edindik.
                    </p>
                    <p>
                        Merkezi İstanbul'da bulunan firmamızın ayrıca <strong>Türkmenistan ve Özbekistan'da 2008 yılında</strong>
                        faaliyete geçen pamuk, iplik, kumaş, makina ve yedek parça ticareti yapan ofisleri bulunmaktadır.
                        Global pazardaki gelişmeleri yakından takip ederek, en son teknolojileri Türk tekstil sanayisi ile buluşturuyoruz.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 pt-8 pb-4">Vizyonumuz & Misyonumuz</h3>
                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Misyonumuz</h4>
                            <p className="text-sm">
                                Türk tekstil üreticilerine, dünya standartlarında kaliteli hammadde, makine ve yedek parça tedarik ederek,
                                üretim verimliliklerini ve rekabet güçlerini artırmalarına katkıda bulunmak.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Vizyonumuz</h4>
                            <p className="text-sm">
                                Tekstil tedarik sektöründe, yenilikçi çözümleri ve güvenilir hizmetiyle tanınan,
                                sadece Türkiye'de değil bölge ülkelerinde de lider bir iş ortağı olmak.
                            </p>
                        </div>
                    </div>

                    <p>
                        Temsilcisi olduğumuz markalar arasında Kureha, Hokushin, Brooksbank, Unispin, Teraspin ve Keisokki gibi
                        kendi alanlarında dünya lideri firmalar bulunmaktadır. Bu güçlü iş ortaklıkları sayesinde müşterilerimize
                        orijinal, garantili ve yüksek performanslı ürünler sunmaktayız.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
