import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { StepCard } from "../components/steps";
import { FeatureCard, Button } from "../components/ui";
import { howItWorksSteps, howItWorksFeatures } from "../data";

const HowItWorksPage = () => {
    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Header */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Nasıl Çalışır?
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        AI destekli ürün pazarlama süreci sadece 4 adımda
                        tamamlanır. Telefonunuzla çektiğiniz fotoğraftan
                        profesyonel satış materyallerine.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
                        {howItWorksSteps.map((step, index) => (
                            <StepCard key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Features */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-800 to-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            AI'ın Size Sunduğu Özellikler
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Gelişmiş yapay zeka modellerimiz ürün pazarlamanızın
                            her aşamasında size yardımcı olur
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {howItWorksFeatures.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                            >
                                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Neden Pazarlai?
                        </h2>
                        <p className="text-xl text-gray-400">
                            Geleneksel pazarlama yöntemlerinden çok daha hızlı
                            ve etkili
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-400 mb-4">
                                98%
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                                Zaman Tasarrufu
                            </div>
                            <div className="text-gray-400">
                                Saatler süren işi dakikalara indirin
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-green-400 mb-4">
                                340%
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                                Satış Artışı
                            </div>
                            <div className="text-gray-400">
                                Ortalama müşteri performansı
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-purple-400 mb-4">
                                15K+
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                                Aktif Kullanıcı
                            </div>
                            <div className="text-gray-400">
                                Güvenen işletme sayısı
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Hemen Deneyin!
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        İlk ürün analizinizi ücretsiz yapın ve farkı görün
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register">
                            <Button
                                variant="primary"
                                size="lg"
                                icon={FiArrowRight}
                                iconPosition="right"
                            >
                                Hemen Başla
                            </Button>
                        </Link>
                        <Link to="/examples">
                            <Button variant="secondary" size="lg">
                                Örnek Sonuçları Gör
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksPage;
