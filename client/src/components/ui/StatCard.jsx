import Card from "./Card";
import IconBox from "./IconBox";

const StatCard = ({
    icon,
    value,
    label,
    change,
    changeType = "increase",
    color = "primary",
    className = "",
}) => {
    const changeColors = {
        increase: "text-green-400",
        decrease: "text-red-400",
        neutral: "text-gray-400",
    };

    return (
        <Card
            className={`bg-gray-800/50 backdrop-blur-sm border-gray-700/50 ${className}`}
            padding="lg"
        >
            <div className="flex items-center justify-between mb-4">
                <IconBox icon={icon} variant={color} size="default" />
                {change && (
                    <span
                        className={`text-sm font-semibold ${changeColors[changeType]}`}
                    >
                        {changeType === "increase"
                            ? "+"
                            : changeType === "decrease"
                            ? "-"
                            : ""}
                        {change}
                    </span>
                )}
            </div>

            <div className="text-3xl font-bold text-white mb-2">{value}</div>

            <div className="text-gray-400 text-sm">{label}</div>
        </Card>
    );
};

export default StatCard;
