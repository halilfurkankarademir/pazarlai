import { clsx } from "clsx";

const Button = ({
    children,
    className = "",
    variant = "primary",
    size = "default",
    icon: Icon,
    iconPosition = "left",
    disabled = false,
    onClick,
    type = "button",
    ...props
}) => {
    const baseClasses =
        "cursor-pointer font-semibold transition-all duration-300 flex items-center justify-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 transform hover:scale-105",
        secondary:
            "border-2 border-gray-500 hover:border-gray-400 text-white hover:bg-gray-700/50 focus:ring-gray-500",
        outline:
            "border border-gray-600 hover:border-gray-500 text-white hover:bg-gray-700/50 focus:ring-gray-500",
        ghost: "text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-500",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
        success:
            "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
    };

    const disabledClasses = disabled
        ? "opacity-50 cursor-not-allowed hover:scale-100"
        : "";

    return (
        <button
            className={clsx(
                baseClasses,
                variants[variant],
                sizes[size],
                disabledClasses,
                className
            )}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...props}
        >
            {Icon && iconPosition === "left" && (
                <Icon className="w-5 h-5 mr-2" />
            )}
            {children}
            {Icon && iconPosition === "right" && (
                <Icon className="w-5 h-5 ml-2" />
            )}
        </button>
    );
};

export default Button;
