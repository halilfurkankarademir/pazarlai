import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiHelpCircle,
    FiMessageSquare,
    FiMail,
    FiPhone,
    FiBook,
    FiChevronDown,
    FiChevronUp,
    FiArrowRight,
    FiClock,
    FiUsers,
    FiStar,
    FiZap,
    FiShield,
    FiTrendingUp,
    FiUpload,
    FiSearch,
    FiPlayCircle,
    FiFileText,
    FiSettings,
    FiCreditCard,
    FiRefreshCw,
} from "react-icons/fi";

const HelpPage = () => {
    const [activeCategory, setActiveCategory] = useState("general");
    const [openFaq, setOpenFaq] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        { id: "general", name: "Genel Sorular", icon: FiHelpCircle },
        { id: "getting-started", name: "Başlangıç", icon: FiPlayCircle },
        { id: "pricing", name: "Fiyatlandırma", icon: FiCreditCard },
        { id: "features", name: "Özellikler", icon: FiStar },
        { id: "technical", name: "Teknik Destek", icon: FiSettings },
        { id: "account", name: "Hesap Yönetimi", icon: FiUsers },
    ];

    const faqs = {
        general: [
            {
                question: "Pazarlai nedir ve nasıl çalışır?",
                answer: "Pazarlai, küçük işletmeciler için AI destekli ürün pazarlama platformudur. Ürün fotoğrafınızı yüklediğinizde, AI sistemimiz ürününüzü analiz ederek profesyonel açıklamalar, fiyat önerileri, sosyal medya içerikleri ve pazarlama stratejileri oluşturur.",
            },
            {
                question: "Hangi tür ürünler için kullanabilirim?",
                answer: "Pazarlai tüm ürün kategorileri için kullanılabilir: el yapımı ürünler, ev yemekleri, teknoloji ürünleri, giyim, aksesuar, hizmet sektörü ve daha fazlası. AI sistemimiz her türlü ürüne uygun içerik üretebilir.",
            },
            {
                question: "Sonuçlar ne kadar sürede hazır olur?",
                answer: "AI analizimiz ortalama 30 saniye içinde tamamlanır. Ürün fotoğrafınızı yükledikten sonra profesyonel açıklamalar, fiyat önerileri ve sosyal medya içerikleri anında hazır olur.",
            },
            {
                question: "Üretilen içerikleri nasıl kullanabilirim?",
                answer: "AI tarafından üretilen tüm içerikleri PDF, Word formatında indirebilir, sosyal medya hesaplarınızda, e-ticaret sitelerinde ve pazarlama materyallerinizde doğrudan kullanabilirsiniz.",
            },
        ],
        "getting-started": [
            {
                question: "Nasıl başlayabilirim?",
                answer: "1) Ücretsiz hesap oluşturun, 2) İlk ürün fotoğrafınızı yükleyin, 3) AI analizini bekleyin, 4) Hazır içerikleri indirin ve kullanmaya başlayın!",
            },
            {
                question: "İlk kez kullanıyorum, nereden başlamalıyım?",
                answer: "'Nasıl Çalışır' sayfamızı ziyaret ederek süreci öğrenebilir, ardından ücretsiz hesap oluşturarak ilk ürününüzü analiz ettirebilirsiniz. İlk 5 analiz tamamen ücretsizdir.",
            },
            {
                question: "Hangi fotoğraf formatları destekleniyor?",
                answer: "JPG ve PNG formatları desteklenmektedir. Maksimum dosya boyutu 10MB'dir. En iyi sonuçlar için net, iyi aydınlatılmış fotoğraflar kullanmanızı öneririz.",
            },
            {
                question: "Mobil cihazımdan kullanabilir miyim?",
                answer: "Evet! Pazarlai tamamen responsive tasarımla geliştirilmiştir. Mobil cihazınızdan, tabletinizden veya bilgisayarınızdan rahatlıkla kullanabilirsiniz.",
            },
        ],
        pricing: [
            {
                question: "Ücretsiz plan ile neler yapabilirim?",
                answer: "Ücretsiz planla ayda 5 ürün analizi yapabilir, temel AI açıklamaları, basit fiyat önerileri ve 2 platform için sosyal medya metni alabilirsiniz.",
            },
            {
                question: "Planımı ne zaman değiştirebilirim?",
                answer: "İstediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Değişiklikler anında etkili olur ve kalan süreniz için fiyat farkı hesabınıza yansır.",
            },
            {
                question: "Para iadesi politikanız nedir?",
                answer: "İlk 14 gün içinde memnun kalmazsanız, koşulsuz para iadesini garantiliyoruz. Herhangi bir sebep belirtmenize gerek yoktur.",
            },
            {
                question: "Ödemeler güvenli mi?",
                answer: "Evet, tüm ödemeler SSL sertifikası ile korunur. Kredi kartı bilgileriniz asla saklanmaz ve güvenliğiniz bizim önceliğimizdir.",
            },
        ],
        features: [
            {
                question: "AI ne tür içerikler üretiyor?",
                answer: "Profesyonel ürün açıklamaları, SEO uyumlu başlıklar, sosyal medya içerikleri (Instagram, Facebook, Twitter, LinkedIn, TikTok), fiyat önerileri, kategori belirleme, hedef kitle analizi ve pazarlama stratejileri.",
            },
            {
                question: "Sosyal medya içerikleri hangi platformlar için?",
                answer: "Instagram, Facebook, Twitter, LinkedIn ve TikTok için özelleştirilmiş içerikler üretiyoruz. Her platform için uygun format, ton ve hashtag önerileri dahildir.",
            },
            {
                question: "Fiyat önerileri nasıl hesaplanıyor?",
                answer: "AI sistemimiz ürününüzü analiz ederek benzer ürünlerin pazar fiyatlarını karşılaştırır, malzeme kalitesi, işçilik ve marka değeri faktörlerini hesaba katarak optimal fiyat aralığı önerir.",
            },
            {
                question: "İçerikleri özelleştirebilir miyim?",
                answer: "Evet! AI tarafından üretilen içerikleri dilediğiniz gibi düzenleyebilir, marka sesinize göre uyarlayabilir ve kendi dokunuşlarınızı ekleyebilirsiniz.",
            },
        ],
        technical: [
            {
                question: "Fotoğraf yüklenmiyor, ne yapmalıyım?",
                answer: "İnternet bağlantınızı kontrol edin, fotoğraf boyutunun 10MB'dan küçük olduğundan emin olun ve desteklenen formatları (JPG, PNG) kullandığınızdan emin olun. Sorun devam ederse bize ulaşın.",
            },
            {
                question: "AI analizi takılıyor, ne yapmalıyım?",
                answer: "Sayfayı yenileyin ve tekrar deneyin. Yoğun saatlerde sistem biraz daha yavaş çalışabilir. Sorun devam ederse destek ekibimize ulaşın.",
            },
            {
                question: "Mobil uygulamanız var mı?",
                answer: "Şu anda mobil uygulamamız bulunmuyor ancak web platformumuz tüm mobil cihazlarda mükemmel çalışır. Yakında iOS ve Android uygulamalarımız yayınlanacak.",
            },
            {
                question: "API erişimi var mı?",
                answer: "API erişimi sadece İşletme planında mevcuttur. Kendi sistemlerinizle entegrasyon yapmak istiyorsanız İşletme planına geçmeniz gerekir.",
            },
        ],
        account: [
            {
                question: "Şifremi unuttum, ne yapmalıyım?",
                answer: "Giriş sayfasında 'Şifremi Unuttum' linkine tıklayın. E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderilecek.",
            },
            {
                question: "E-posta adresimi değiştirebilir miyim?",
                answer: "Evet, hesap ayarlarından e-posta adresinizi değiştirebilirsiniz. Yeni e-posta adresinizi doğrulamanız gerekecek.",
            },
            {
                question: "Hesabımı silebilir miyim?",
                answer: "Hesabınızı kalıcı olarak silmek istiyorsanız, hesap ayarlarından veya destek ekibimizle iletişime geçerek bu işlemi gerçekleştirebilirsiniz.",
            },
            {
                question: "Verilerim güvende mi?",
                answer: "Evet! Tüm verileriniz SSL ile şifrelenir ve GDPR uyumlu olarak saklanır. Verilerinizi asla üçüncü taraflarla paylaşmayız.",
            },
        ],
    };

    const supportChannels = [
        {
            icon: FiMessageSquare,
            title: "Canlı Sohbet",
            description: "7/24 anlık destek",
            action: "Sohbet Başlat",
            available: true,
            response: "Ortalama 2 dakika",
        },
        {
            icon: FiMail,
            title: "E-posta Desteği",
            description: "Detaylı yardım için",
            action: "E-posta Gönder",
            available: true,
            response: "24 saat içinde",
        },
        {
            icon: FiPhone,
            title: "Telefon Desteği",
            description: "Profesyonel & İşletme planı",
            action: "+90 212 xxx xxxx",
            available: false,
            response: "Anında",
        },
        {
            icon: FiBook,
            title: "Dokümantasyon",
            description: "Kapsamlı kılavuzlar",
            action: "Kılavuzu Gör",
            available: true,
            response: "Anında erişim",
        },
    ];

    const filteredFaqs =
        faqs[activeCategory]?.filter(
            (faq) =>
                faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
            {/* Header */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Yardıma İhtiyacınız mı var?
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Sorularınızın cevaplarını burada bulabilir veya destek
                        ekibimizle iletişime geçebilirsiniz
                    </p>

                    {/* Search */}
                    <div className="max-w-md mx-auto relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Sorunuzu arayın..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 rounded-xl border bg-neutral-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 border-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Support Channels */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Destek Kanalları
                        </h2>
                        <p className="text-gray-400">
                            Size en uygun yöntemi seçin
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportChannels.map((channel, index) => {
                            const Icon = channel.icon;
                            return (
                                <div
                                    key={index}
                                    className={`bg-neutral-800/50 backdrop-blur-lg rounded-xl border p-6 text-center transition-all duration-300 hover:scale-105 ${
                                        channel.available
                                            ? "border-gray-700/50 hover:border-blue-500/30"
                                            : "border-gray-700/30"
                                    }`}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                                            channel.available
                                                ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20"
                                                : "bg-gray-600/20"
                                        }`}
                                    >
                                        <Icon
                                            className={`w-6 h-6 ${
                                                channel.available
                                                    ? "text-blue-400"
                                                    : "text-gray-500"
                                            }`}
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {channel.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3">
                                        {channel.description}
                                    </p>
                                    <p className="text-xs text-gray-500 mb-4">
                                        {channel.response}
                                    </p>
                                    <button
                                        className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                                            channel.available
                                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                                : "bg-gray-700 text-gray-500 cursor-not-allowed"
                                        }`}
                                    >
                                        {channel.action}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-800 to-neutral-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Sık Sorulan Sorular
                        </h2>
                        <p className="text-gray-400 text-lg">
                            En çok merak edilen konular
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Categories */}
                        <div className="lg:col-span-1">
                            <div className="bg-neutral-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 p-4 sticky top-4">
                                <h3 className="text-lg font-semibold text-white mb-4">
                                    Kategoriler
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((category) => {
                                        const Icon = category.icon;
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() =>
                                                    setActiveCategory(
                                                        category.id
                                                    )
                                                }
                                                className={`w-full flex items-center text-left p-3 rounded-lg transition-all duration-200 ${
                                                    activeCategory ===
                                                    category.id
                                                        ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                                                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                                                }`}
                                            >
                                                <Icon className="w-4 h-4 mr-3" />
                                                <span className="text-sm">
                                                    {category.name}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* FAQ Content */}
                        <div className="lg:col-span-3">
                            <div className="space-y-4">
                                {filteredFaqs.length > 0 ? (
                                    filteredFaqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="bg-neutral-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50"
                                        >
                                            <button
                                                onClick={() =>
                                                    setOpenFaq(
                                                        openFaq === index
                                                            ? null
                                                            : index
                                                    )
                                                }
                                                className="w-full flex items-center justify-between p-6 text-left transition-all duration-200 hover:bg-gray-700/30"
                                            >
                                                <h3 className="text-lg font-medium text-white pr-4">
                                                    {faq.question}
                                                </h3>
                                                {openFaq === index ? (
                                                    <FiChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                                ) : (
                                                    <FiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                                )}
                                            </button>
                                            {openFaq === index && (
                                                <div className="px-6 pb-6">
                                                    <p className="text-gray-300 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12">
                                        <FiSearch className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                                        <h3 className="text-lg font-medium text-gray-400 mb-2">
                                            Aradığınız bulunamadı
                                        </h3>
                                        <p className="text-gray-500">
                                            Farklı anahtar kelimeler deneyin
                                            veya bizimle iletişime geçin
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-neutral-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <FiClock className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                2 dk
                            </h3>
                            <p className="text-gray-400">
                                Ortalama yanıt süresi
                            </p>
                        </div>
                        <div className="bg-neutral-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <FiStar className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                4.9/5
                            </h3>
                            <p className="text-gray-400">Müşteri memnuniyeti</p>
                        </div>
                        <div className="bg-neutral-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <FiUsers className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                15K+
                            </h3>
                            <p className="text-gray-400">
                                Yardım alan kullanıcı
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Hala sorunuz mu var?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Destek ekibimiz size yardımcı olmaya hazır
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                            <FiMessageSquare className="mr-2 w-5 h-5" />
                            Canlı Sohbet Başlat
                        </button>
                        <Link
                            to="/register"
                            className="border-2 border-gray-500 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-700/50 flex items-center justify-center"
                        >
                            <FiUpload className="mr-2 w-5 h-5" />
                            Hemen Başla
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
