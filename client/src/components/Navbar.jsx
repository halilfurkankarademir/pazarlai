import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiImage, FiList, FiLogOut } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
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
        <nav className="bg-gray-900 border-b border-gray-800 shadow-lg">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - Her zaman gözükecek */}
                    <div className="flex items-center">
                        <Link
                            to={isLoggedIn ? "/upload" : "/"}
                            className="flex-shrink-0 flex items-center"
                        >
                            <AiOutlineRobot className="h-8 w-8 text-indigo-500" />
                            <span className="ml-2 text-xl font-bold text-white hidden md:block">
                                Satış Asistanı AI
                            </span>
                        </Link>

                        {/* Giriş yapılmışsa gösterilecek kısım */}
                        {isLoggedIn && (
                            <>
                                <div className="hidden md:block ml-10">
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to="/upload"
                                            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                            activeClassName="bg-gray-800 text-white"
                                        >
                                            <FiImage className="mr-1" /> Ürün
                                            Yükle
                                        </NavLink>
                                        <NavLink
                                            to="/products"
                                            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                            activeClassName="bg-gray-800 text-white"
                                        >
                                            <FiList className="mr-1" />{" "}
                                            Ürünlerim
                                        </NavLink>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Giriş yapılmışsa gösterilecek kısım */}
                    {isLoggedIn && (
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="ml-3 relative">
                                    <div className="flex items-center space-x-4">
                                        <p className="text-white">
                                            Kullanıcı Adı
                                        </p>
                                        <button
                                            className="cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                            onClick={handleLogout}
                                        >
                                            <FiLogOut className="mr-1" /> Çıkış
                                            Yap
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile menu button - Giriş yapılmışsa göster */}
                    {isLoggedIn && (
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            >
                                {isOpen ? (
                                    <FiX className="block h-6 w-6" />
                                ) : (
                                    <FiMenu className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile menu - Giriş yapılmışsa göster */}
            {isLoggedIn && isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink
                            to="/upload"
                            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center"
                            activeClassName="bg-gray-800 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiImage className="mr-2" /> Ürün Yükle
                        </NavLink>
                        <NavLink
                            to="/products"
                            className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center"
                            activeClassName="bg-gray-800 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiList className="mr-2" /> Ürünlerim
                        </NavLink>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-800">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <FiUser className="h-10 w-10 rounded-full text-indigo-400" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-white">
                                    Kullanıcı Adı
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    user@example.com
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <button
                                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 flex items-center"
                                onClick={handleLogout}
                            >
                                <FiLogOut className="mr-2" /> Çıkış Yap
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
