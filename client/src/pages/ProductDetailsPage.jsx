import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
    FiChevronLeft,
    FiChevronRight,
    FiDownload,
    FiTag,
    FiDollarSign,
    FiX,
    FiCopy,
    FiTrash2,
    FiStar,
} from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { deleteGenerationById, getGenerationById } from "../api/UserApi";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [copySuccess, setCopySuccess] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getGenerationById(id);
                const raw = response.data;

                const transformedProduct = {
                    id: response.id || id,
                    title: raw.features.features.brand_model,
                    category: raw.features.features.category,
                    images: raw.images.images,
                    created_at: new Date().toISOString(),
                    price: raw.features.features.price,
                    product_type: raw.features.features.product_type,
                    features: raw.features.features.features,
                    marketing_tags: raw.marketing_description_and_tag.tags,
                    marketing_content:
                        raw.marketing_description_and_tag.marketing_content,
                    information_confidence:
                        raw.features.features.information_confidence,
                };

                setProduct(transformedProduct);
            } catch (error) {
                console.error("Ürün detayları yüklenirken hata:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
            setDeleting(true);
            try {
                await deleteGenerationById(product.id);
                navigate("/products");
            } catch (error) {
                console.error("Ürün silinirken hata oluştu:", error);
            } finally {
                setDeleting(false);
            }
        }
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        const allImages = product.images || [];
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = () => {
        const allImages = product.images || [];
        setCurrentImageIndex(
            (prev) => (prev - 1 + allImages.length) % allImages.length
        );
    };

    const downloadImage = (imageUrl, fileName) => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = fileName;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess("Kopyalandı!");
            setTimeout(() => setCopySuccess(""), 2000);
        } catch (err) {
            console.error("Kopyalama başarısız:", err);
            setCopySuccess("Kopyalama başarısız!");
            setTimeout(() => setCopySuccess(""), 2000);
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
                    <p className="text-gray-300 text-lg">Yükleniyor...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ürün Bulunamadı
                    </h2>
                    <Link
                        to="/products"
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <FiChevronLeft className="mr-2 w-5 h-5" />
                        Ürünlere Dön
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
            {/* Copy Success Toast */}
            {copySuccess && (
                <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
                    {copySuccess}
                </div>
            )}
            {/* Header */}
            <section className="px-4 sm:px-6 lg:px-16 py-6">
                <div className="max-w-[1536px] mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <div className="flex items-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-4"
                            >
                                <FiChevronLeft className="mr-2 w-5 h-5" />
                                <span className="font-medium">Geri Dön</span>
                            </Link>
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                    {product.title}
                                </h1>
                                <p className="text-gray-400 text-lg">
                                    {product.product_type}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                            <button
                                onClick={handleDelete}
                                disabled={deleting}
                                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-medium disabled:opacity-50 transition-colors"
                            >
                                <FiTrash2 className="mr-2 w-4 h-4" />
                                {deleting ? "Siliniyor..." : "Sil"}
                            </button>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Images Section - 2/3 width */}
                        <div className="lg:col-span-2">
                            <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6">
                                {/* Main Image */}
                                <div className="relative mb-4">
                                    <img
                                        src={product.images[currentImageIndex]}
                                        alt={product.title}
                                        className="w-full h-80 object-contain bg-neutral-700/20 cursor-pointer rounded-lg"
                                        onClick={() =>
                                            openLightbox(currentImageIndex)
                                        }
                                    />
                                    <button
                                        onClick={() =>
                                            downloadImage(
                                                product.images[
                                                    currentImageIndex
                                                ],
                                                `${product.title}_${
                                                    currentImageIndex + 1
                                                }.jpg`
                                            )
                                        }
                                        className="absolute top-4 right-4 p-2 bg-neutral-900/80 text-white rounded-full hover:bg-neutral-900 transition-colors"
                                    >
                                        <FiDownload className="w-5 h-5" />
                                    </button>

                                    {/* Navigation Arrows */}
                                    {product.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-neutral-900/80 text-white rounded-full hover:bg-neutral-900 transition-colors"
                                            >
                                                <FiChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-neutral-900/80 text-white rounded-full hover:bg-neutral-900 transition-colors"
                                            >
                                                <FiChevronRight className="w-5 h-5" />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnails */}
                                {product.images.length > 1 && (
                                    <div className="grid grid-cols-6 gap-2">
                                        {product.images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setCurrentImageIndex(index)
                                                }
                                                className={`aspect-square rounded-lg border-2 overflow-hidden transition-all ${
                                                    currentImageIndex === index
                                                        ? "border-blue-500 ring-2 ring-blue-500/50"
                                                        : "border-neutral-600 hover:border-neutral-500"
                                                }`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${product.title} - ${
                                                        index + 1
                                                    }`}
                                                    className="w-full h-full object-contain bg-neutral-700/20"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Info Section - 1/3 width */}
                        <div className="space-y-6">
                            {/* Price & Category */}
                            <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6">
                                <div className="mb-4">
                                    {product.category && (
                                        <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                                            <FiTag className="inline w-4 h-4 mr-1" />
                                            {product.category}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-2xl font-bold text-green-400">
                                        {product.price.includes("TL")
                                            ? product.price.split("TL")[0] +
                                              " TL"
                                            : product.price}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    Tahmini piyasa değeri
                                </p>
                            </div>

                            {/* Features */}
                            {product.features &&
                                product.features.length > 0 && (
                                    <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                            <FiStar className="mr-2 text-yellow-400" />
                                            Özellikler
                                        </h3>
                                        <div className="space-y-3">
                                            {(showAllFeatures
                                                ? product.features
                                                : product.features.slice(0, 6)
                                            ).map((feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-between items-start py-2 border-b border-neutral-700 last:border-0"
                                                >
                                                    <span className="text-gray-400 text-sm font-medium">
                                                        {feature.feature_tag}
                                                    </span>
                                                    <span className="text-white text-sm text-right ml-3">
                                                        {feature.value}
                                                    </span>
                                                </div>
                                            ))}
                                            {product.features.length > 6 && (
                                                <button
                                                    onClick={() =>
                                                        setShowAllFeatures(
                                                            !showAllFeatures
                                                        )
                                                    }
                                                    className="text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors"
                                                >
                                                    {showAllFeatures
                                                        ? "Daha az göster"
                                                        : `+${
                                                              product.features
                                                                  .length - 6
                                                          } özellik daha...`}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    {/* Bottom Section - Full Width */}
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        {/* AI Marketing Content */}
                        {product.marketing_content && (
                            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-white flex items-center">
                                        <AiOutlineRobot className="mr-2 text-blue-400" />
                                        AI Pazarlama İçeriği
                                    </h3>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                product.marketing_content
                                            )
                                        }
                                        className="inline-flex items-center px-3 py-1 text-sm text-blue-400 hover:text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors"
                                    >
                                        <FiCopy className="w-4 h-4 mr-1" />
                                        Kopyala
                                    </button>
                                </div>
                                <div className="bg-neutral-800/50 rounded-lg p-4">
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {product.marketing_content}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Hashtags */}
                        {product.marketing_tags && (
                            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-white flex items-center">
                                        <FiTag className="mr-2 text-purple-400" />
                                        Hashtag'ler
                                    </h3>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                product.marketing_tags
                                            )
                                        }
                                        className="inline-flex items-center px-3 py-1 text-sm text-purple-400 hover:text-purple-300 border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition-colors"
                                    >
                                        <FiCopy className="w-4 h-4 mr-1" />
                                        Kopyala
                                    </button>
                                </div>
                                <div className="bg-neutral-800/50 rounded-lg p-4">
                                    <div className="flex flex-wrap gap-2">
                                        {product.marketing_tags
                                            .split(" ")
                                            .map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 text-sm rounded-full border border-purple-400/30 hover:from-purple-500/50 hover:to-pink-500/50 transition-colors cursor-pointer"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Simple Lightbox */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-6xl max-h-full">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <FiX className="w-8 h-8" />
                        </button>

                        {product.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
                                >
                                    <FiChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
                                >
                                    <FiChevronRight className="w-8 h-8" />
                                </button>
                            </>
                        )}

                        <img
                            src={product.images[currentImageIndex]}
                            alt={`${product.title} - ${currentImageIndex + 1}`}
                            className="max-w-full max-h-[90vh] object-contain"
                        />

                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
                            {currentImageIndex + 1} / {product.images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailsPage;
