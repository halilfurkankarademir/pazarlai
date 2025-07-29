import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLock, FiMail, FiLogIn } from "react-icons/fi";
import { loginUser } from "../api/AuthApi";
import { AuthContext } from "../contexts/AuthContext";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await loginUser(formData);
            console.log(response);
            if (response.status === "success") {
                localStorage.setItem("isLoggedIn", "true");
                login(response.user);
                navigate("/");
            } else {
                setErrors({ submit: "Geçersiz e-posta veya şifre" });
            }
        } catch (error) {
            console.error("Giriş hatası:", error);
            setErrors({ submit: "Geçersiz e-posta veya şifre" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                {/* Başlık Kısmı */}
                <div className="bg-gradient-to-r from-indigo-900 to-purple-900 py-8 px-8 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Satış Asistanı AI'ya giriş yap
                    </h1>
                </div>

                {/* Form Kısmı */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Email Alanı */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            E-posta Adresin
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`block w-full pl-10 pr-3 py-3 rounded-lg border bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-gray-600 focus:border-indigo-500"
                                }`}
                                placeholder="ornek@email.com"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Şifre Alanı */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Şifren
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`block w-full pl-10 pr-3 py-3 rounded-lg border bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                                    errors.password
                                        ? "border-red-500"
                                        : "border-gray-600 focus:border-indigo-500"
                                }`}
                                placeholder="••••••••"
                            />
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Giriş Butonu */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                            isLoading
                                ? "bg-indigo-700 cursor-not-allowed"
                                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                        }`}
                        onClick={handleSubmit}
                    >
                        <FiLogIn className="mr-2 w-5 h-5" />
                        {isLoading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                    </button>
                </form>

                {/* Kayıt Ol Linki */}
                <div className="px-8 pb-8 text-center">
                    <p className="text-sm text-gray-400">
                        Hesabın yok mu?{" "}
                        <Link
                            to="/register"
                            className="font-medium text-indigo-400 hover:text-indigo-300"
                        >
                            Hemen kayıt ol
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
