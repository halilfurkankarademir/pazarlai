import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiPlus,
    FiChevronLeft,
    FiChevronRight,
    FiTag,
    FiDollarSign,
    FiStar,
    FiHeart,
    FiEye,
} from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { getGenerationsByCurrentUser } from "../api/UserApi";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const productsPerPage = 6;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getGenerationsByCurrentUser();

                if (!Array.isArray(response)) {
                    console.error("Beklenen dizi yerine gelen:", response);
                    setProducts([]);
                    return;
                }

                const transformedProducts = response.map((raw, index) => {
                    const data = raw.data || {};
                    const features = data.features?.features || {};
                    const images = data.images?.images || [];
                    const marketing = data.marketing_description_and_tag || {};

                    return {
                        id: raw.id || index,
                        title: features.brand_model || "Başlıksız",
                        category: features.category || "",
                        images: images,
                        created_at: raw.created_at || new Date().toISOString(),
                        price: features.price || "Bilinmiyor",
                        product_type: features.product_type || "",
                        features: features.features || "",
                        marketing_tags: marketing.tags || "",
                        marketing_content: marketing.marketing_content || "",
                        information_confidence:
                            features.information_confidence || 0,
                    };
                });

                setProducts(transformedProducts);
            } catch (error) {
                console.error("Ürünler yüklenirken hata:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    const totalPages = Math.ceil(products.length / productsPerPage);

    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                        <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
                        <div
                            className="absolute inset-0 flex items-center justify-center text-white  text-2xl font-semibold"
                            style={{ fontFamily: "Cream" }}
                        >
                            p
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
            <section className="px-4 sm:px-6 lg:px-16 py-8">
                <div className="max-w-[1536px] mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                Ürünlerim
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
                                {currentProducts.map((product) => {
                                    const currentImg =
                                        currentImageIndex[product.id] || 0;
                                    const images = product.images || [];

                                    const nextImage = () => {
                                        setCurrentImageIndex((prev) => ({
                                            ...prev,
                                            [product.id]:
                                                (currentImg + 1) %
                                                images.length,
                                        }));
                                    };

                                    const prevImage = () => {
                                        setCurrentImageIndex((prev) => ({
                                            ...prev,
                                            [product.id]:
                                                currentImg === 0
                                                    ? images.length - 1
                                                    : currentImg - 1,
                                        }));
                                    };

                                    return (
                                        <div
                                            key={product.id}
                                            className="bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-3xl overflow-hidden border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
                                        >
                                            {/* Image Carousel */}
                                            <div className="relative h-64 overflow-hidden">
                                                {images.length > 0 && (
                                                    <>
                                                        <img
                                                            src={
                                                                images[
                                                                    currentImg
                                                                ]
                                                            }
                                                            alt={product.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                                                        {/* Image Navigation */}
                                                        {images.length > 1 && (
                                                            <>
                                                                <button
                                                                    onClick={
                                                                        prevImage
                                                                    }
                                                                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                                                                >
                                                                    <FiChevronLeft className="w-4 h-4 text-white" />
                                                                </button>
                                                                <button
                                                                    onClick={
                                                                        nextImage
                                                                    }
                                                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                                                                >
                                                                    <FiChevronRight className="w-4 h-4 text-white" />
                                                                </button>

                                                                {/* Image Indicators */}
                                                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
                                                                    {images.map(
                                                                        (
                                                                            _,
                                                                            idx
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    idx
                                                                                }
                                                                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                                                                    idx ===
                                                                                    currentImg
                                                                                        ? "bg-white"
                                                                                        : "bg-white/40"
                                                                                }`}
                                                                            />
                                                                        )
                                                                    )}
                                                                </div>
                                                            </>
                                                        )}

                                                        {/* Category Badge */}
                                                        {product.category && (
                                                            <div className="absolute top-4 left-4">
                                                                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                                                                    <FiTag className="inline w-3 h-3 mr-1" />
                                                                    {
                                                                        product.category
                                                                    }
                                                                </span>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                {/* Title and Product Type */}
                                                <div className="mb-4">
                                                    <h3 className="text-xl font-bold text-white mb-1 line-clamp-2 leading-tight">
                                                        {product.title}
                                                    </h3>
                                                    {product.product_type && (
                                                        <p className="text-gray-400 text-sm">
                                                            {
                                                                product.product_type
                                                            }
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Price */}
                                                {product.price && (
                                                    <div className="mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-green-400 font-bold text-lg">
                                                                {product.price.includes(
                                                                    "TL"
                                                                )
                                                                    ? product.price.split(
                                                                          "TL"
                                                                      )[0] +
                                                                      "TL"
                                                                    : product.price}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Marketing Tags */}
                                                {product.marketing_tags && (
                                                    <div className="mb-4">
                                                        <div className="flex flex-wrap gap-1">
                                                            {product.marketing_tags
                                                                .split(" ")
                                                                .slice(0, 4)
                                                                .map(
                                                                    (
                                                                        tag,
                                                                        idx
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                idx
                                                                            }
                                                                            className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/20"
                                                                        >
                                                                            {
                                                                                tag
                                                                            }
                                                                        </span>
                                                                    )
                                                                )}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Action Button */}
                                                <button
                                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                                                    onClick={() =>
                                                        navigate(
                                                            `/product-detail/${product.id}`
                                                        )
                                                    }
                                                >
                                                    Detayları Görüntüle
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

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
