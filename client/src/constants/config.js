// Application Configuration
export const APP_CONFIG = {
    name: "Pazarlai",
    tagline: "Ürünlerinizi Satışa Hazırlamanın En Akıllı Yolu",
    description: "AI destekli ürün pazarlama platformu",
    version: "1.0.0",

    // Contact Info
    contact: {
        email: "info@pazarlai.com",
        phone: "+90 (212) 555-0123",
        address: "İstanbul, Türkiye",
    },

    // Social Media
    social: {
        instagram: "https://instagram.com/pazarlai",
        facebook: "https://facebook.com/pazarlai",
        twitter: "https://twitter.com/pazarlai",
        linkedin: "https://linkedin.com/company/pazarlai",
    },

    // Features
    features: {
        maxFileSize: 10, // MB
        supportedFormats: ["JPG", "PNG", "WEBP"],
        analysisTime: 30, // seconds
        freeAnalysisLimit: 5, // per month
    },

    // Analytics
    analytics: {
        totalUsers: "15K+",
        totalAnalysis: "15,847",
        totalRevenue: "₺2.4M",
        averageGrowth: "%340",
        satisfaction: "4.9",
    },
};

export const BREAKPOINTS = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
};

export const ANIMATION_VARIANTS = {
    fadeIn: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },
    slideIn: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4 },
    },
};

export const API_ENDPOINTS = {
    base: "http://localhost:5000",
    auth: {
        login: "/api/auth/login",
        register: "/api/auth/register",
        logout: "/api/auth/logout",
        refresh: "/api/auth/refresh",
    },
    products: {
        analyze: "/api/products/analyze",
        list: "/api/products",
        details: "/api/products/:id",
    },
};
