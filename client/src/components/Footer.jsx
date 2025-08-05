import { Link } from "react-router-dom";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiTwitter,
    FiLinkedin,
    FiInstagram,
    FiGithub,
    FiArrowUpRight,
    FiHeart,
    FiShield,
    FiZap,
} from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 border-t border-gray-800/50">
            <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-16">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <span
                                className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                                style={{ fontFamily: "Cream" }}
                            >
                                pazarlai
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Yapay zeka destekli ürün analizi ve pazarlama
                            içeriği üretimi ile işletmenizi dijital dünyada öne
                            çıkarın.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                href="#"
                                className="p-2 bg-neutral-800 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-700 transition-all duration-200"
                                aria-label="Twitter"
                            >
                                <FiTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-neutral-800 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-700 transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-neutral-800 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-700 transition-all duration-200"
                                aria-label="Instagram"
                            >
                                <FiInstagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-neutral-800 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-700 transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center">
                            <FiZap className="w-4 h-4 mr-2 text-blue-400" />
                            Platform
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/how-it-works"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                >
                                    Nasıl Çalışır
                                    <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/examples"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                >
                                    Örnekler
                                    <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/pricing"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                >
                                    Fiyatlandırma
                                    <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/upload"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                >
                                    Ürün Yükle
                                    <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center">
                            <FiShield className="w-4 h-4 mr-2 text-purple-400" />
                            Destek
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/help"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                >
                                    Yardım Merkezi
                                    <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                >
                                    Gizlilik Politikası
                                    <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                >
                                    Kullanım Şartları
                                    <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                >
                                    API Dokümantasyonu
                                    <FiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 flex items-center">
                            <FiMail className="w-4 h-4 mr-2 text-green-400" />
                            İletişim
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400 text-sm">
                                <FiMail className="w-4 h-4 mr-3 text-blue-400" />
                                <a
                                    href="mailto:info@pazarlai.com"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    info@pazarlai.com
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400 text-sm">
                                <FiPhone className="w-4 h-4 mr-3 text-green-400" />
                                <a
                                    href="tel:+905551234567"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    +90 555 123 45 67
                                </a>
                            </li>
                            <li className="flex items-start text-gray-400 text-sm">
                                <FiMapPin className="w-4 h-4 mr-3 mt-0.5 text-purple-400" />
                                <span>
                                    Teknokent, Bilişim Vadisi
                                    <br />
                                    İstanbul, Türkiye
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="py-6 border-y border-gray-800/50">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-white font-semibold mb-2">
                                AI haberleri ve güncellemeler
                            </h3>
                            <p className="text-gray-400 text-sm">
                                En son özellikler ve pazarlama ipuçları için
                                abone olun.
                            </p>
                        </div>
                        <div className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="bg-neutral-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 flex-1 md:w-80"
                            />
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-r-lg text-sm font-medium transition-all duration-200 hover:scale-105">
                                Abone Ol
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                        <span>
                            © {currentYear} pazarlai. Tüm hakları saklıdır.
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                            Türkiye'de{" "}
                            <FiHeart className="w-4 h-4 mx-1 text-red-400" />{" "}
                            ile yapıldı
                        </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                        <span className="text-gray-400">AI destekli</span>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-400 font-medium">
                                Aktif
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
