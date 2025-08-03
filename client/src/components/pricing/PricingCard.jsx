import { FiCheck, FiX } from "react-icons/fi";
import { Card, Button, Badge } from "../ui";

const PricingCard = ({ plan }) => {
    const colorMap = {
        gray: "secondary",
        blue: "primary",
        purple: "secondary",
    };

    return (
        <Card
            className={`relative ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
            padding="lg"
        >
            {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="popular" size="lg">
                        En Popüler
                    </Badge>
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                </h3>
                <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                        {plan.price}
                    </span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
            </div>

            <div className="mb-8">
                <div className="mb-4">
                    <h4 className="font-semibold text-white mb-3">
                        Dahil Özellikler:
                    </h4>
                    <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center text-gray-300"
                            >
                                <FiCheck className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {plan.notIncluded.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-white mb-3">
                            Dahil Olmayan:
                        </h4>
                        <ul className="space-y-2">
                            {plan.notIncluded.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center text-gray-500"
                                >
                                    <FiX className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <Button
                variant={plan.popular ? "primary" : "secondary"}
                size="lg"
                className="w-full"
            >
                {plan.buttonText}
            </Button>
        </Card>
    );
};

export default PricingCard;
