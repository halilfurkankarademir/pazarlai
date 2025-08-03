import { FiChevronRight } from "react-icons/fi";
import Card from "./Card";
import IconBox from "./IconBox";

const FeatureCard = ({
    icon,
    title,
    description,
    features = [],
    color = "primary",
    className = "",
}) => {
    const colorMap = {
        primary: "blue",
        secondary: "purple",
        success: "green",
        warning: "yellow",
        danger: "red",
        info: "cyan",
    };

    const hoverColors = {
        blue: "hover:border-blue-500",
        purple: "hover:border-purple-500",
        green: "hover:border-green-500",
        yellow: "hover:border-yellow-500",
        red: "hover:border-red-500",
        cyan: "hover:border-cyan-500",
    };

    const featureColors = {
        blue: "text-blue-400",
        purple: "text-purple-400",
        green: "text-green-400",
        yellow: "text-yellow-400",
        red: "text-red-400",
        cyan: "text-cyan-400",
    };

    const mappedColor = colorMap[color];

    return (
        <Card
            className={`bg-neutral-800 border-neutral-700 ${hoverColors[mappedColor]} group ${className}`}
            padding="lg"
        >
            <IconBox
                icon={icon}
                variant={color}
                size="lg"
                hover={true}
                className="mb-6"
            />

            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

            <p className="text-gray-400 mb-6">{description}</p>

            {features.length > 0 && (
                <ul className="space-y-2 text-sm text-gray-300">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <FiChevronRight
                                className={`w-4 h-4 ${featureColors[mappedColor]} mr-2`}
                            />
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
};

export default FeatureCard;
