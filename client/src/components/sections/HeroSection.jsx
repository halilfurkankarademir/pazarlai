import { FiArrowRight } from "react-icons/fi";
import { Button } from "../ui";
import { APP_CONFIG } from "../../constants";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-16">
            <div className="mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {APP_CONFIG.tagline}
                            </span>
                        </h1>

                        <p className="text-md lg:text-lg text-gray-300 mb-8 leading-relaxed">
                            E-ticaret dünyasında fark yaratın! Ürünlerinizi
                            dakikalar içinde satışa hazır hale getiren akıllı
                            içerik platformumuzla tanışın.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-12">
                            <Button
                                variant="primary"
                                size="lg"
                                icon={FiArrowRight}
                                iconPosition="right"
                                className="justify-center"
                                onClick={() => navigate("/login")}
                            >
                                Hemen Kullanmaya Başla
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 rounded-3xl p-6 border border-neutral-700 shadow-2xl h-full flex flex-col justify-center">
                            {/* Simple Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                        Nasıl Çalışır?
                                    </span>
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    4 basit adımda ürününüzü analiz edin
                                </p>
                            </div>

                            {/* Big Clear Steps */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: "📸",
                                        text: "Ürün görselini yükleyin",
                                        color: "from-green-400 to-blue-500",
                                    },
                                    {
                                        icon: "🤖",
                                        text: "AI otomatik analiz yapar",
                                        color: "from-blue-400 to-purple-500",
                                    },
                                    {
                                        icon: "📝",
                                        text: "Pazarlama içeriği oluşturur",
                                        color: "from-purple-400 to-pink-500",
                                    },
                                    {
                                        icon: "🚀",
                                        text: "Satışa hazır hale gelir",
                                        color: "from-yellow-400 to-orange-500",
                                    },
                                ].map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-700/30 hover:bg-neutral-700/50 transition-all group"
                                    >
                                        <div
                                            className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform shadow-lg`}
                                        >
                                            {index + 1}
                                        </div>
                                        <span className="text-xl mr-2">
                                            {step.icon}
                                        </span>
                                        <p className="text-white text-lg font-medium group-hover:text-blue-300 transition-colors">
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
