// Theme Configuration
export const colors = {
    primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
    },
    secondary: {
        50: "#faf5ff",
        100: "#f3e8ff",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
    },
    success: {
        500: "#10b981",
        600: "#059669",
        700: "#047857",
    },
    warning: {
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
    },
    danger: {
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
    },
    info: {
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
    },
    neutral: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
    },
};

export const gradients = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600",
    primaryHover: "hover:from-blue-700 hover:to-purple-700",
    secondary: "bg-gradient-to-r from-purple-600 to-pink-600",
    success: "bg-gradient-to-r from-green-500 to-emerald-600",
    card: "bg-gradient-to-br from-gray-800 to-gray-900",
    hero: "bg-gradient-to-b from-neutral-900 to-neutral-800",
};

export const spacing = {
    xs: "0.5rem", // 8px
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
    "5xl": "8rem", // 128px
};

export const borderRadius = {
    sm: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
};

export const shadows = {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
};

export const transitions = {
    fast: "transition-all duration-150 ease-in-out",
    normal: "transition-all duration-300 ease-in-out",
    slow: "transition-all duration-500 ease-in-out",
};
