import {
    FiArrowRight,
    FiTarget,
    FiTrendingUp,
    FiUsers,
    FiAward,
    FiCheckCircle,
    FiMail,
    FiPhone,
    FiCheck,
} from "react-icons/fi";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                Pazarlai
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            AI destekli pazarlama çözümleriyle markanızı
                            geleceğe taşıyın. Akıllı stratejiler, ölçülebilir
                            sonuçlar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                                Hemen Başlayın
                                <FiArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            <button className="border-2 border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800">
                                Demo İzleyin
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            AI Gücüyle Pazarlama
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Modern pazarlama ihtiyaçlarınız için tasarlanmış
                            kapsamlı çözümler
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FiTarget className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                Hedef Kitle Analizi
                            </h3>
                            <p className="text-gray-400">
                                AI algoritmaları ile ideal müşteri
                                profillerinizi belirleyin ve kişiselleştirilmiş
                                kampanyalar oluşturun.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                            <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FiTrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                Performans Optimizasyonu
                            </h3>
                            <p className="text-gray-400">
                                Gerçek zamanlı veri analizi ile kampanyalarınızı
                                sürekli optimize edin ve ROI'nizi maksimize
                                edin.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 group">
                            <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FiCheck className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                Akıllı Raporlama
                            </h3>
                            <p className="text-gray-400">
                                Detaylı analitik raporlar ve öngörüler ile
                                stratejik kararlarınızı güçlendirin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-400 mb-2">
                                500+
                            </div>
                            <div className="text-gray-400">Mutlu Müşteri</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-400 mb-2">
                                %85
                            </div>
                            <div className="text-gray-400">
                                Ortalama ROI Artışı
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-400 mb-2">
                                10M+
                            </div>
                            <div className="text-gray-400">İşlenen Veri</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">
                                24/7
                            </div>
                            <div className="text-gray-400">Destek Hizmeti</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Neden Pazarlai?
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                Yapay zeka teknolojisi ile donatılmış
                                platformumuz, pazarlama süreçlerinizi
                                otomatikleştirirken başarı oranınızı artırır.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <FiCheckCircle className="w-6 h-6 text-green-400 mr-3" />
                                    <span className="text-gray-300">
                                        AI destekli strateji geliştirme
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FiCheckCircle className="w-6 h-6 text-green-400 mr-3" />
                                    <span className="text-gray-300">
                                        Gerçek zamanlı performans takibi
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FiCheckCircle className="w-6 h-6 text-green-400 mr-3" />
                                    <span className="text-gray-300">
                                        Kapsamlı analitik raporlama
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FiCheckCircle className="w-6 h-6 text-green-400 mr-3" />
                                    <span className="text-gray-300">
                                        Uzman ekip desteği
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                <FiAward className="w-16 h-16 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">
                                    Sektör Lideri
                                </h3>
                                <p className="text-blue-100 mb-6">
                                    3 yıldır pazarlama teknolojileri alanında
                                    öncü çözümler sunuyoruz.
                                </p>
                                <div className="flex items-center">
                                    <FiUsers className="w-5 h-5 mr-2" />
                                    <span>50+ uzman kadro</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Pazarlama Geleceğinizi Bugün Şekillendirin
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        AI destekli pazarlama çözümleri ile rekabette öne geçin.
                        Ücretsiz danışmanlık için hemen iletişime geçin.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                            <FiMail className="mr-2 w-5 h-5" />
                            Ücretsiz Danışmanlık
                        </button>
                        <button className="border-2 border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800 flex items-center justify-center">
                            <FiPhone className="mr-2 w-5 h-5" />
                            Hemen Arayın
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
