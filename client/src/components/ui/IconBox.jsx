import { clsx } from "clsx";

const IconBox = ({
    icon: Icon,
    className = "",
    variant = "primary",
    size = "default",
    hover = false,
}) => {
    const baseClasses =
        "rounded-xl flex items-center justify-center transition-all duration-300";

    const variants = {
        primary: "bg-blue-600",
        secondary: "bg-purple-600",
        success: "bg-green-600",
        warning: "bg-yellow-600",
        danger: "bg-red-600",
        info: "bg-cyan-600",
        dark: "bg-gray-700",
    };

    const sizes = {
        sm: "w-10 h-10",
        default: "w-12 h-12",
        lg: "w-14 h-14",
        xl: "w-16 h-16",
    };

    const iconSizes = {
        sm: "w-4 h-4",
        default: "w-5 h-5",
        lg: "w-7 h-7",
        xl: "w-8 h-8",
    };

    const hoverClasses = hover ? "group-hover:scale-110" : "";

    return (
        <div
            className={clsx(
                baseClasses,
                variants[variant],
                sizes[size],
                hoverClasses,
                className
            )}
        >
            <Icon className={clsx(iconSizes[size], "text-white")} />
        </div>
    );
};

export default IconBox;
