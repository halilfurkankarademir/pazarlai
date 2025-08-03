import { FeatureCard } from "../ui";
import { homeFeatures } from "../../data";

const FeaturesSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-16 ">
            <div className="mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        AI ile Ürününüzü Satışa Hazır Hale Getirin!
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Sadece fotoğraf yükleyin, AI tüm pazarlama
                        içeriklerinizi otomatik oluştursun
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {homeFeatures.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            features={feature.features}
                            color={feature.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
