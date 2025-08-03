import { FeatureCard } from "../ui";

const PricingFeatures = ({ features }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700"
                >
                    <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PricingFeatures;
