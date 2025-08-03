import { Link } from "react-router-dom";
import { FiZap, FiShield, FiUsers, FiHeadphones } from "react-icons/fi";
import {
    PricingCard,
    PricingFeatures,
    PricingFAQ,
} from "../components/pricing";
import { pricingPlans, faqItems } from "../data";

const PricingPage = () => {
    const features = [
        {
            icon: FiZap,
            title: "Anında Sonuç",
            description: "AI analiziniz 30 saniye içinde hazır",
        },
        {
            icon: FiShield,
            title: "Güvenli Platform",
            description: "Verileriniz tamamen güvende",
        },
        {
            icon: FiUsers,
            title: "15K+ Mutlu Kullanıcı",
            description: "Binlerce satıcı güveniyor",
        },
        {
            icon: FiHeadphones,
            title: "7/24 Destek",
            description: "Her zaman yanınızdayız",
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Header */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Size Uygun{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Planı Seçin
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        İşletmenizin büyüklüğüne uygun AI destekli pazarlama
                        çözümünü seçin. Tüm planlar 30 gün para iade garantisi
                        ile birlikte gelir.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-800">
                <div className="max-w-7xl mx-auto">
                    <PricingFeatures features={features} />
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-800 to-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard key={index} plan={plan} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <PricingFAQ faqs={faqItems} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Hala Karar Veremediniz Mi?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Ücretsiz planla başlayın, istediğiniz zaman yükseltin
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Ücretsiz Başla
                        </Link>
                        <Link
                            to="/help"
                            className="border-2 border-gray-500 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-700/50"
                        >
                            Destek Al
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
