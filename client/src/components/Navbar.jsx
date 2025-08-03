import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiMenu,
    FiX,
    FiLogOut,
    FiUpload,
    FiGrid,
    FiArrowRight,
} from "react-icons/fi";
import { logoutUser } from "../api/AuthApi";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setIsOpen(false);
        try {
            await logoutUser();
            localStorage.removeItem("isLoggedIn");
            logout();
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <nav className="bg-neutral-900/95 backdrop-blur-lg border-b border-gray-800/50 sticky top-0 z-50">
            <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-16 py-2">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-12">
                        <Link
                            to="/"
                            className="flex items-center space-x-2 group"
                        >
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <span className="text-xl lg:text-4xl font-bold text-white">
                                    pazarlai
                                </span>
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center space-x-1">
                            {isLoggedIn && (
                                <>
                                    <Link
                                        to="/products"
                                        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-neutral-600/50 transition-all duration-200 text-md font-medium"
                                    >
                                        <FiGrid className="w-4 h-4" />
                                        <span>Ürünlerim</span>
                                    </Link>
                                    <Link
                                        to="/upload"
                                        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-neutral-600/50 transition-all duration-200 text-md font-medium"
                                    >
                                        <FiUpload className="w-4 h-4" />
                                        <span>Ürün Yükle</span>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Desktop Navigation Logged in */}

                    {/* Right Side - Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        {!isLoggedIn ? (
                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-300 hover:text-white px-4 py-2 text-md font-medium transition-colors duration-200"
                                >
                                    Giriş Yap
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-md font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                                >
                                    <span>Hemen Başla</span>
                                    <FiArrowRight className="w-4 h-4" />
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg ">
                                    <span className="text-md text-gray-300">
                                        Kullanıcı
                                    </span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="cursor-pointer flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-red-600/20 transition-all duration-200 text-sm"
                                >
                                    <FiLogOut className="w-4 h-4" />
                                    <span className="text-md">Çıkış</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                        >
                            {isOpen ? (
                                <FiX className="w-5 h-5" />
                            ) : (
                                <FiMenu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-neutral-900/98 backdrop-blur-lg border-t border-gray-800/50">
                    <div className="px-4 py-3 space-y-1">
                        {!isLoggedIn ? (
                            <>
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="font-medium">
                                                {item.name}
                                            </span>
                                        </Link>
                                    );
                                })}
                                <div className="pt-4 border-t border-gray-800/50 space-y-2">
                                    <Link
                                        to="/login"
                                        className="block px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 text-center"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Giriş Yap
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-3 rounded-lg font-semibold"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span>Hemen Başla</span>
                                        <FiArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/upload"
                                    className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FiUpload className="w-5 h-5" />
                                    <span className="font-medium">
                                        Ürün Yükle
                                    </span>
                                </Link>
                                <Link
                                    to="/products"
                                    className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FiGrid className="w-5 h-5" />
                                    <span className="font-medium">
                                        Ürünlerim
                                    </span>
                                </Link>
                                <div className="pt-4 border-t border-gray-800/50">
                                    <div className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-gray-800/50 mb-2">
                                        <div>
                                            <div className="text-white font-medium">
                                                Kullanıcı
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                user@example.com
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center space-x-2 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-red-600/20 transition-all duration-200"
                                    >
                                        <FiLogOut className="w-5 h-5" />
                                        <span>Çıkış Yap</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
