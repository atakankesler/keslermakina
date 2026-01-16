import React, { useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pb-20 bg-gray-50">
            {/* Header */}
            <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Bize ulaşın, sorularınızı yanıtlayalım.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16 -mt-10 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Info */}
                    <div className="p-10 md:w-1/2 bg-primary text-white">
                        <h2 className="text-2xl font-bold mb-8">İletişim Bilgileri</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <span className="text-2xl mr-4">📍</span>
                                <div>
                                    <h3 className="font-bold text-white/80 uppercase text-sm tracking-wider mb-1">Adres</h3>
                                    <p className="leading-relaxed">
                                        Perpa Ticaret Merkezi B Blok<br />
                                        Kat:12 No:2128<br />
                                        Okmeydanı - 34384 / İSTANBUL
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-2xl mr-4">📞</span>
                                <div>
                                    <h3 className="font-bold text-white/80 uppercase text-sm tracking-wider mb-1">Telefon</h3>
                                    <p className="text-lg font-semibold">+90 (532) 636 4486</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-2xl mr-4">✉️</span>
                                <div>
                                    <h3 className="font-bold text-white/80 uppercase text-sm tracking-wider mb-1">E-Posta</h3>
                                    <p className="text-lg">info@keslermakina.com.tr</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="mt-12 w-full h-80 bg-white/10 rounded-lg overflow-hidden border border-white/20">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3827264283673!2d28.967570776482983!3d41.060626016199265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab73b5ed5657b%3A0x302d1fe60e085227!2sHalil%20R%C4%B1fat%20Pa%C5%9Fa%2C%20Y%C3%BCzer%20Havuz%20Sk.%20Perpa%20Ticaret%20Merkezi%20B%20Blok%20No%3A667%2C%2034384%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1768571138719!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Kesler Makina Konum"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10 md:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Örn: Ahmet Yılmaz" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta Adresi</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Örn: ahmet@mail.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Mesajınızı buraya yazın..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-black transition-colors transform active:scale-95 duration-200">
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
