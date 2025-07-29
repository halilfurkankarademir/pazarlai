import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/AuthApi";
import { FiUser, FiMail, FiLock, FiCheck, FiLogIn } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await registerUser(formData);
            localStorage.setItem("isLoggedIn", "true");
            navigate("/");
        } catch (error) {
            console.error("Kayıt hatası:", error);
            setErrors({ submit: error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                <div className="bg-indigo-900 py-6 px-8 text-center">
                    <div className="flex items-center justify-center">
                        <AiOutlineRobot className="text-3xl mr-2 text-white" />
                        <h1 className="text-2xl font-bold text-white">
                            Satış Asistanı AI
                        </h1>
                    </div>
                    <p className="text-indigo-200 mt-1">
                        Ücretsiz hesap oluşturun
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Ad Soyad Alanı */}
                    <div>
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-300 mb-1 flex items-center"
                        >
                            <FiUser className="mr-2" /> Ad Soyad
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
                                className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-gray-700 text-white placeholder-gray-400 ${
                                    errors.name
                                        ? "border-red-500"
                                        : "border-gray-600"
                                }`}
                                placeholder="Ad ve soyadınızı girin"
                            />
                        </div>
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-400 flex items-center">
                                <FiAlertCircle className="mr-1" /> {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email Alanı */}
                    <div>
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-300 mb-1 flex items-center"
                        >
                            <FiMail className="mr-2" /> E-posta Adresi
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
                                className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-gray-700 text-white placeholder-gray-400 ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-gray-600"
                                }`}
                                placeholder="ornek@email.com"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-400 flex items-center">
                                <FiAlertCircle className="mr-1" />{" "}
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Şifre Alanı */}
                    <div>
                        <label
                            htmlFor="password"
                            className=" text-sm font-medium text-gray-300 mb-1 flex items-center"
                        >
                            <FiLock className="mr-2" /> Şifre
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-gray-700 text-white placeholder-gray-400 ${
                                    errors.password
                                        ? "border-red-500"
                                        : "border-gray-600"
                                }`}
                                placeholder="En az 6 karakter"
                            />
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-400 flex items-center">
                                <FiAlertCircle className="mr-1" />{" "}
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Kayıt Butonu */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full cursor-pointer py-3 px-4 flex items-center justify-center bg-indigo-700 hover:bg-indigo-600 text-white font-medium rounded-lg transition duration-200 ${
                            isLoading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                İşleniyor...
                            </>
                        ) : (
                            <>
                                <FiCheck className="mr-2" /> Hesap Oluştur
                            </>
                        )}
                    </button>
                </form>

                {/* Giriş Yap Linki */}
                <div className="px-8 pb-6 text-center">
                    <p className="text-sm text-gray-400 flex items-center justify-center">
                        Zaten hesabınız var mı?{" "}
                        <Link
                            to="/login"
                            className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center ml-1"
                        >
                            <FiLogIn className="mr-1" /> Giriş yapın
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
