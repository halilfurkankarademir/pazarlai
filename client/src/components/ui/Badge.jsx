import { clsx } from "clsx";

const Badge = ({
    children,
    className = "",
    variant = "default",
    size = "default",
}) => {
    const baseClasses = "inline-flex items-center font-medium rounded-full";

    const variants = {
        default: "bg-gray-700 text-gray-300",
        primary: "bg-blue-100 text-blue-800",
        secondary: "bg-purple-100 text-purple-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        danger: "bg-red-100 text-red-800",
        popular:
            "bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold",
    };

    const sizes = {
        sm: "px-2 py-1 text-xs",
        default: "px-3 py-1 text-sm",
        lg: "px-4 py-2 text-base",
    };

    return (
        <span
            className={clsx(
                baseClasses,
                variants[variant],
                sizes[size],
                className
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
