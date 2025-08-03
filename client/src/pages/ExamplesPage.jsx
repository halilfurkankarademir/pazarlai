import { Link } from "react-router-dom";
import { FiUpload, FiEye } from "react-icons/fi";
import { SuccessStoryCard } from "../components/examples";
import { StatCard } from "../components/ui";
import { successStories, exampleStats, categories } from "../data";

const ExamplesPage = () => {
    return (
        <div className="min-h-screen bg-neutral-900">
            {/* Header */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Başarı Hikayeleri
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Pazarlai kullanan küçük işletme sahiplerinin gerçek
                        sonuçları. Sizin de hikayeniz burada yer alabilir!
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {exampleStats.map((stat, index) => (
                            <StatCard
                                key={index}
                                icon={stat.icon}
                                value={stat.value}
                                label={stat.label}
                                color={stat.color}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-800 to-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Gerçek Müşteri Sonuçları
                        </h2>
                        <p className="text-xl text-gray-400">
                            Her sektörden işletme sahibi Pazarlai ile büyüyor
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {successStories.map((story) => (
                            <SuccessStoryCard key={story.id} story={story} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Hangi Sektörde Çalışıyorsunuz?
                        </h2>
                        <p className="text-xl text-gray-400">
                            Her sektörden binlerce başarı hikayesi
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center group"
                            >
                                <category.icon
                                    className={`w-12 h-12 text-${category.color}-400 mx-auto mb-4 group-hover:scale-110 transition-transform`}
                                />
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {category.name}
                                </h3>
                                <div className="text-2xl font-bold text-blue-400 mb-1">
                                    {category.count}
                                </div>
                                <div className="text-sm text-gray-400">
                                    Başarılı Analiz
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-neutral-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Siz de Bu Başarının Parçası Olun
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Binlerce satıcı gibi siz de Pazarlai AI ile işinizi
                        büyütmeye başlayın
                    </p>

                    <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
                        <p className="text-gray-300 text-lg mb-2">
                            "Pazarlai ile satışlarım %300 arttı!"
                        </p>
                        <div className="flex justify-center">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-5 h-5 bg-yellow-400 rounded mr-1"
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                        >
                            <FiUpload className="mr-2 w-5 h-5" />
                            Hemen Başla
                        </Link>
                        <Link
                            to="/how-it-works"
                            className="border-2 border-gray-500 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-700/50 flex items-center justify-center"
                        >
                            <FiEye className="mr-2 w-5 h-5" />
                            Nasıl Çalışır?
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExamplesPage;
