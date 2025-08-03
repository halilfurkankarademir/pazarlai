import { clsx } from "clsx";

const Card = ({
    children,
    className = "",
    variant = "default",
    hover = false,
    padding = "default",
}) => {
    const baseClasses = "rounded-2xl border transition-all duration-300";

    const variants = {
        default: "bg-gray-800 border-gray-700",
        glass: "bg-gray-800/50 backdrop-blur-sm border-gray-700/50",
        gradient: "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700",
        primary:
            "bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/20",
    };

    const paddings = {
        none: "",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
    };

    const hoverClasses = hover ? "group hover:scale-105 hover:shadow-2xl" : "";

    return (
        <div
            className={clsx(
                baseClasses,
                variants[variant],
                paddings[padding],
                hoverClasses,
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
