import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/AuthApi";
import {
    FiUser,
    FiMail,
    FiLock,
    FiCheck,
    FiUpload,
    FiEye,
    FiEyeOff,
    FiArrowRight,
    FiShield,
    FiZap,
    FiStar,
} from "react-icons/fi";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        try {
            await registerUser(formData);
            localStorage.setItem("isLoggedIn", "true");
            navigate("/products");
        } catch (error) {
            console.error("Kayıt hatası:", error);
            setErrors({ submit: "Kayıt olurken bir hata oluştu" });
        } finally {
            setIsLoading(false);
        }
    };

    const features = [
        { icon: FiZap, text: "Anında AI analizi" },
        { icon: FiStar, text: "Profesyonel içerik" },
        { icon: FiShield, text: "Güvenli platform" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex  justify-center p-4 lg:p-16">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Kayıt Ol
                        </span>
                    </h1>
                </div>

                {/* Register Form */}
                <div className="bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Ad ve Soyadınız
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiUser className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`block w-full pl-10 pr-3 py-4 rounded-xl border bg-neutral-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 text-lg ${
                                        errors.name
                                            ? "border-red-500"
                                            : "border-gray-600"
                                    }`}
                                    placeholder="Örn: Ahmet Yılmaz"
                                    required
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-2 text-sm text-red-400">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                E-posta Adresiniz
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiMail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`block w-full pl-10 pr-3 py-4 rounded-xl border bg-neutral-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 text-lg ${
                                        errors.email
                                            ? "border-red-500"
                                            : "border-gray-600"
                                    }`}
                                    placeholder="ornek@email.com"
                                    required
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-400">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Şifreniz
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiLock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`block w-full pl-10 pr-12 py-4 rounded-xl border bg-neutral-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 text-lg ${
                                        errors.password
                                            ? "border-red-500"
                                            : "border-gray-600"
                                    }`}
                                    placeholder="En az 6 karakter"
                                    required
                                    minLength={6}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 transition-colors"
                                >
                                    {showPassword ? (
                                        <FiEyeOff className="h-5 w-5" />
                                    ) : (
                                        <FiEye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-400">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Error Message */}
                        {errors.submit && (
                            <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-4">
                                <p className="text-sm text-red-400 text-center">
                                    {errors.submit}
                                </p>
                            </div>
                        )}

                        {/* Register Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center items-center py-4 px-6 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform ${
                                isLoading
                                    ? "bg-gray-600 cursor-not-allowed"
                                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 active:scale-95"
                            }`}
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Kayıt Olunuyor...
                                </>
                            ) : (
                                <>
                                    <FiCheck className="mr-2 w-5 h-5" />
                                    Kayıt Ol
                                </>
                            )}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
                        <p className="text-gray-400">
                            Hesabınız var mı?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                Giriş Yap
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
