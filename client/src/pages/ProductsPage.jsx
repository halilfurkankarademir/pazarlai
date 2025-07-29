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
                            "https://images.unsplash.com/photo-1589984662646-e7f2ff8795ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold flex items-center">
                        <AiOutlineRobot className="mr-2 text-indigo-500" />
                        Ürünlerim
                    </h1>
                    <Link
                        to="/upload"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                        <FiPlus className="mr-2" /> Yeni Ürün Ekle
                    </Link>
                </div>

                {products.length === 0 ? (
                    <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
                        <p className="text-gray-400 mb-4">
                            Henüz hiç ürün eklemediniz
                        </p>
                        <Link
                            to="/upload"
                            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-700"
                        >
                            <FiPlus className="mr-2" /> İlk Ürününü Ekle
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {currentProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={
                                                product.image_url ||
                                                "https://via.placeholder.com/500x300?text=No+Image"
                                            }
                                            alt={product.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-2 right-2 flex space-x-2">
                                            <button className="p-2 bg-gray-900/80 rounded-full hover:bg-indigo-600 transition-colors">
                                                <FiEye className="text-white" />
                                            </button>
                                            <button className="p-2 bg-gray-900/80 rounded-full hover:bg-yellow-600 transition-colors">
                                                <FiEdit className="text-white" />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }
                                                className="p-2 bg-gray-900/80 rounded-full hover:bg-red-600 transition-colors"
                                            >
                                                <FiTrash2 className="text-white" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-semibold truncate">
                                                {product.title}
                                            </h3>
                                            {product.price_suggestion && (
                                                <span className="bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded text-sm">
                                                    {product.price_suggestion}{" "}
                                                    TL
                                                </span>
                                            )}
                                        </div>
                                        {product.category && (
                                            <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded mb-2">
                                                {product.category}
                                            </span>
                                        )}
                                        <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                                            {product.description}
                                        </p>
                                        <div className="flex justify-between items-center text-xs text-gray-500">
                                            <span>
                                                {new Date(
                                                    product.created_at
                                                ).toLocaleDateString()}
                                            </span>
                                            <div className="flex items-center">
                                                <span className="text-indigo-400">
                                                    AI Oluşturdu
                                                </span>
                                                <AiOutlineRobot className="ml-1 text-indigo-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sayfalama */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center space-x-2">
                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.max(prev - 1, 1)
                                        )
                                    }
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FiChevronLeft />
                                </button>

                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1
                                ).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-md ${
                                            currentPage === page
                                                ? "bg-indigo-600 text-white"
                                                : "border border-gray-700 hover:bg-gray-800"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.min(prev + 1, totalPages)
                                        )
                                    }
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FiChevronRight />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;
