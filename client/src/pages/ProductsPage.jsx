import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FiEdit,
    FiTrash2,
    FiEye,
    FiPlus,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Mock data - Gerçek uygulamada API'den çekeceksiniz
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // API çağrısı
                // const response = await fetch('/api/user-products');
                // const data = await response.json();

                // Mock data
                const mockData = [
                    {
                        id: 1,
                        title: "El Yapımı Seramik Vazo",
                        description:
                            "Doğal malzemelerden üretilmiş, el yapımı lüks seramik vazo",
                        category: "Ev & Dekorasyon",
                        price_suggestion: "249.99",
                        created_at: "2023-05-15T10:30:00",
                        image_url:
                            "https://plus.unsplash.com/premium_photo-1751107029838-c341391ea8b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                        id: 2,
                        title: "Deri Cüzdan",
                        description:
                            "Tamamen el yapımı %100 gerçek deri erkek cüzdanı",
                        category: "Aksesuar",
                        price_suggestion: "189.50",
                        created_at: "2023-06-20T14:45:00",
                        image_url:
                            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                    },
                    // Diğer ürünler...
                ];

                setProducts(mockData);
            } catch (error) {
                console.error("Ürünler yüklenirken hata:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Sayfalama mantığı
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleDelete = (productId) => {
        if (window.confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
            setProducts(products.filter((product) => product.id !== productId));
            // API'ye silme isteği gönderilecek
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                        <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <AiOutlineRobot className="w-8 h-8 text-blue-400 animate-pulse" />
                        </div>
                    </div>
                    <p className="text-gray-300 text-lg">
                        Ürünler yükleniyor...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
            {/* Header */}
            <section className="px-4 sm:px-6 lg:px-16 py-8">
                <div className="max-w-[1536px] mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    Ürünlerim
                                </span>
                            </h1>
                            <p className="text-gray-400">
                                AI ile analiz edilen ürünlerinizi yönetin
                            </p>
                        </div>
                        <Link
                            to="/upload"
                            className="mt-4 sm:mt-0 inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            <FiPlus className="mr-2 w-4 h-4" />
                            Yeni Ürün Ekle
                        </Link>
                    </div>
                    {products.length === 0 ? (
                        <div className="bg-neutral-800 border-neutral-700 rounded-2xl p-8 text-center">
                            <AiOutlineRobot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Henüz Ürün Yok
                            </h3>
                            <p className="text-gray-400 mb-6">
                                İlk ürününüzü ekleyerek AI destekli analiz
                                başlayın
                            </p>
                            <Link
                                to="/upload"
                                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                <FiPlus className="mr-2 w-4 h-4" />
                                İlk Ürününü Ekle
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {currentProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-neutral-800 border-neutral-700 rounded-2xl overflow-hidden border hover:border-blue-500/50 transition-all duration-300 group hover:scale-[1.02]"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={
                                                    product.image_url ||
                                                    "https://via.placeholder.com/500x300?text=No+Image"
                                                }
                                                alt={product.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        </div>

                                        <div className="p-4">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-bold text-white truncate pr-2">
                                                    {product.title}
                                                </h3>
                                                {product.price_suggestion && (
                                                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                                                        {
                                                            product.price_suggestion
                                                        }{" "}
                                                        TL
                                                    </span>
                                                )}
                                            </div>

                                            {product.category && (
                                                <span className="inline-block bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full mb-3">
                                                    {product.category}
                                                </span>
                                            )}

                                            <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                                                {product.description}
                                            </p>

                                            <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-700">
                                                <span>
                                                    {new Date(
                                                        product.created_at
                                                    ).toLocaleDateString(
                                                        "tr-TR"
                                                    )}
                                                </span>
                                                <div className="flex items-center text-blue-400">
                                                    <span>AI Powered</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sayfalama */}
                            {totalPages > 1 && (
                                <div className="bg-neutral-800 border-neutral-700 rounded-2xl p-4">
                                    <div className="flex justify-center items-center space-x-2">
                                        <button
                                            onClick={() =>
                                                setCurrentPage((prev) =>
                                                    Math.max(prev - 1, 1)
                                                )
                                            }
                                            disabled={currentPage === 1}
                                            className="p-2 rounded-lg border border-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <FiChevronLeft className="w-4 h-4 text-gray-300" />
                                        </button>

                                        {Array.from(
                                            { length: totalPages },
                                            (_, i) => i + 1
                                        ).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() =>
                                                    setCurrentPage(page)
                                                }
                                                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                                                    currentPage === page
                                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                                        : "border border-gray-600 text-gray-300 hover:bg-gray-700"
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        ))}

                                        <button
                                            onClick={() =>
                                                setCurrentPage((prev) =>
                                                    Math.min(
                                                        prev + 1,
                                                        totalPages
                                                    )
                                                )
                                            }
                                            disabled={
                                                currentPage === totalPages
                                            }
                                            className="p-2 rounded-lg border border-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <FiChevronRight className="w-4 h-4 text-gray-300" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
