import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
    FiEdit,
    FiTrash2,
    FiChevronLeft,
    FiDownload,
    FiCheck,
    FiStar,
    FiTag,
    FiX,
    FiChevronLeft as FiArrowLeft,
    FiChevronRight as FiArrowRight,
} from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { BsStars } from "react-icons/bs";

const CursorDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Mock data - AI destekli ürün detayları
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // API çağrısı
                // const response = await fetch(`/api/user-products/${id}`);
                // const data = await response.json();

                // Mock data - AI generated content
                const mockData = {
                    id: 1,
                    title: "El Yapımı Premium Seramik Vazo",
                    user_title: "Seramik Vazo", // Kullanıcının verdiği orijinal başlık
                    description:
                        "Doğal malzemelerden üretilmiş, el yapımı lüks seramik vazo. Geleneksel Anadolu seramik sanatının modern yorumu olan bu benzersiz parça, her açıdan incelenmiş detayları ile dikkat çeker. Organik formları ve doğal renk geçişleri sayesinde yaşam alanınıza sıcaklık ve zarif bir dokunuş katar. Sürdürülebilir üretim anlayışıyla hazırlanan bu özel tasarım, hem dekoratif hem de fonksiyonel kullanım imkanı sunar.",
                    user_description: "El yapımı seramik vazo", // Kullanıcının orijinal açıklaması
                    category: "Ev & Dekorasyon > Vazo > El Yapımı Seramik",
                    ai_confidence_score: 95,
                    price_suggestion: 249.99,
                    user_price: 150, // Kullanıcının belirttiği fiyat
                    market_comparison: {
                        min_price: 180,
                        max_price: 320,
                        avg_price: 245,
                    },
                    created_at: "2023-05-15T10:30:00",
                    image_url:
                        "https://images.unsplash.com/photo-1745965864966-3196b945a046?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ai_analysis: {
                        detected_objects: ["vazo", "seramik", "el yapımı"],
                        materials: ["seramik", "kil"],
                        colors: ["bej", "kahverengi", "doğal tonlar"],
                        style: "Geleneksel-Modern Hibrit",
                        quality_score: 92,
                    },
                    social_media_content: {
                        instagram_post:
                            "✨ Doğallığın zarif hali ✨\n\n🏺 %100 el işçiliği premium seramik vazo\n🌿 Sürdürülebilir üretim\n�� Geleneksel sanatın modern yorumu\n\n#elişi #seramik #dekorasyon #sürdürülebilir #handmade #vazo #sanat",
                        facebook_post:
                            "Evinizin havasını değiştirecek bu benzersiz seramik vazo ile tanışın! Geleneksel Anadolu seramik sanatının modern bir yorumu olan bu özel parça, doğal malzemeler kullanılarak tamamen el yapımı olarak üretilmiştir. Sürdürülebilir üretim anlayışımızla, hem çevreye hem de evinize değer katıyoruz.",
                        twitter_post:
                            "🏺 El yapımı premium seramik vazo\n✨ Geleneksel sanatın modern yorumu\n🌿 Sürdürülebilir üretim\n💯 %100 doğal malzeme\n\n#handmade #seramik #sürdürülebilir",
                    },
                    design_suggestions: [
                        {
                            title: "Minimalist Poster",
                            description:
                                "Beyaz zemin üzerinde ürün odaklı, clean tasarım",
                            color_palette: ["#F8F9FA", "#495057", "#D4A574"],
                            style: "minimalist",
                        },
                        {
                            title: "Doğal Tema",
                            description: "Toprak tonları ve organik şekiller",
                            color_palette: ["#8D5524", "#E6CCB2", "#7F5539"],
                            style: "natural",
                        },
                        {
                            title: "Instagram Story",
                            description:
                                "Sosyal medya için optimize edilmiş dikey tasarım",
                            color_palette: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
                            style: "social",
                        },
                    ],
                    details: {
                        dimensions: "15cm x 25cm",
                        weight: "1.2kg",
                        material: "Premium Seramik",
                        color: "Doğal Bej & Kahverengi Geçişli",
                        origin: "Türkiye - Kütahya",
                        production_time: "3-5 iş günü",
                        care_instructions: "Islak bez ile temizlenebilir",
                    },
                    additional_images: [
                        "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                        "https://plus.unsplash.com/premium_photo-1675860537768-636373ed44aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1751468109650-ad78aa1af5b8?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ],
                };

                setProduct(mockData);
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
                // API'ye silme isteği gönderilecek
                // await fetch(`/api/user-products/${id}`, { method: 'DELETE' });
                navigate("/products");
            } catch (error) {
                console.error("Ürün silinirken hata oluştu:", error);
            } finally {
                setDeleting(false);
            }
        }
    };

    // Lightbox functions
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        const allImages = [
            product.image_url,
            ...(product.additional_images || []),
        ];
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = () => {
        const allImages = [
            product.image_url,
            ...(product.additional_images || []),
        ];
        setCurrentImageIndex(
            (prev) => (prev - 1 + allImages.length) % allImages.length
        );
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
                        AI ile ürün analiz ediliyor...
                    </p>
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
                    <p className="text-gray-400 mb-8">
                        Aradığınız ürün bulunamadı veya kaldırılmış olabilir.
                    </p>
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
            {/* Header */}
            <section className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                        <div className="flex items-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-4"
                            >
                                <FiChevronLeft className="mr-1 w-4 h-4" />
                                <span>Geri</span>
                            </Link>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                                    <span className=" bg-clip-text ">
                                        Ürün İsmi
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <div className="flex space-x-3 mt-4 sm:mt-0">
                            <button
                                onClick={handleDelete}
                                disabled={deleting}
                                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm disabled:opacity-50 transition-colors"
                            >
                                <FiTrash2 className="mr-1 w-4 h-4" />
                                {deleting ? "Siliniyor..." : "Sil"}
                            </button>
                        </div>
                    </div>
                    {/* 3-Row Layout */}
                    <div className="max-w-7xl mx-auto space-y-8">
                        {/* First Row - Product Images (4 images in a row) */}
                        <div className="bg-neutral-800 border-neutral-700 rounded-2xl p-6 border">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                                <FiStar className="mr-2 text-blue-400" />
                                Ürün Görselleri
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Main Image */}
                                <div
                                    className="relative group cursor-pointer rounded-xl overflow-hidden"
                                    onClick={() => openLightbox(0)}
                                >
                                    <img
                                        src={product.image_url}
                                        alt={product.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Download functionality
                                            }}
                                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
                                        >
                                            <FiDownload className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Additional Images */}
                                {product.additional_images?.map(
                                    (imageUrl, index) => (
                                        <div
                                            key={index}
                                            className="relative group cursor-pointer rounded-xl overflow-hidden"
                                            onClick={() =>
                                                openLightbox(index + 1)
                                            }
                                        >
                                            <img
                                                src={imageUrl}
                                                alt={`${product.title} - ${
                                                    index + 2
                                                }`}
                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        // Download functionality
                                                    }}
                                                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
                                                >
                                                    <FiDownload className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Second Row - Description and Tags */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Marketing Description Section */}
                            <div className="bg-neutral-800 border-neutral-700 rounded-2xl p-6 border">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <AiOutlineRobot className="mr-2 text-blue-400" />
                                    AI Pazarlama Açıklaması
                                </h2>
                                <div className="space-y-3 mb-6">
                                    {product.description
                                        .split(".")
                                        .filter((sentence) => sentence.trim())
                                        .map((sentence, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start"
                                            >
                                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    {sentence.trim()}.
                                                </p>
                                            </div>
                                        ))}
                                </div>

                                {/* Price Highlight */}
                                <div className="p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl border border-green-500/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-green-400 text-sm font-medium">
                                                AI Önerilen Fiyat
                                            </span>
                                            <div className="text-2xl font-bold text-white">
                                                {product.price_suggestion} TL
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-gray-400 text-sm">
                                                Kategori
                                            </span>
                                            <div className="text-blue-300 font-semibold">
                                                {product.category}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tags Section */}
                            <div className="bg-neutral-800 border-neutral-700 rounded-2xl p-6 border">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <FiTag className="mr-2 text-purple-400" />
                                    Etiketler & Anahtar Kelimeler
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "el yapımı",
                                        "seramik",
                                        "vazo",
                                        "dekorasyon",
                                        "premium",
                                        "doğal",
                                        "geleneksel",
                                        "modern",
                                        "sürdürülebilir",
                                    ].map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 cursor-pointer"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Third Row - Enhanced Product Features */}
                        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl p-8 shadow-2xl">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-3 flex items-center justify-center">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full mr-4">
                                        <FiCheck className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                        Ürün Özellikleri & AI Analizi
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    Yapay zeka ile detaylandırılmış ürün
                                    bilgileri
                                </p>
                            </div>

                            {/* Product Details Grid */}
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                {Object.entries(product.details).map(
                                    ([key, value], index) => (
                                        <div
                                            key={index}
                                            className="group relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-2xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                                        >
                                            <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                                                {index + 1}
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                                                <div>
                                                    <span className="text-gray-300 text-sm font-medium capitalize block mb-1">
                                                        {key.replace(/_/g, " ")}
                                                    </span>
                                                    <span className="text-white text-lg font-bold">
                                                        {value}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* AI Analysis Section */}
                            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
                                <div className="text-center mb-8">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full mr-4 animate-pulse">
                                            <AiOutlineRobot className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">
                                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                                AI Analiz Sonuçları
                                            </span>
                                        </h3>
                                    </div>
                                    <p className="text-gray-300">
                                        Yapay zeka tarafından tespit edilen
                                        özellikler
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Detected Objects */}
                                    <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/30">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                                <FiStar className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-blue-300 font-semibold">
                                                Tespit Edilen
                                            </h4>
                                        </div>
                                        <div className="space-y-2">
                                            {product.ai_analysis.detected_objects.map(
                                                (object, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-block bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-600/50 transition-colors"
                                                    >
                                                        {object}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Materials */}
                                    <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-500/30">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                                <FiTag className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-purple-300 font-semibold">
                                                Malzemeler
                                            </h4>
                                        </div>
                                        <div className="space-y-2">
                                            {product.ai_analysis.materials.map(
                                                (material, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-block bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-purple-600/50 transition-colors"
                                                    >
                                                        {material}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Colors */}
                                    <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-xl border border-orange-500/30">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                                                <div className="w-5 h-5 bg-white rounded-full"></div>
                                            </div>
                                            <h4 className="text-orange-300 font-semibold">
                                                Renkler
                                            </h4>
                                        </div>
                                        <div className="space-y-2">
                                            {product.ai_analysis.colors.map(
                                                (color, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-block bg-orange-600/30 text-orange-200 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-orange-600/50 transition-colors"
                                                    >
                                                        {color}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Quality & Style */}
                                    <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                                <FiCheck className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-green-300 font-semibold">
                                                Kalite & Stil
                                            </h4>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="bg-green-600/30 text-green-200 px-4 py-2 rounded-full text-sm text-center hover:bg-green-600/50 transition-colors">
                                                {product.ai_analysis.style}
                                            </div>
                                            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 px-4 py-2 rounded-full text-center">
                                                <span className="text-white font-bold text-lg">
                                                    {
                                                        product.ai_analysis
                                                            .quality_score
                                                    }
                                                </span>
                                                <span className="text-gray-300 text-sm ml-1">
                                                    /100
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AI Confidence Badge */}
                                <div className="text-center mt-8">
                                    <div className="inline-flex items-center bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/50 px-6 py-3 rounded-full">
                                        <BsStars className="w-5 h-5 text-blue-400 mr-3 animate-pulse" />
                                        <span className="text-white font-semibold text-lg">
                                            AI Güvenilirlik: %
                                            {product.ai_confidence_score}
                                        </span>
                                        <div className="ml-3 w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                                style={{
                                                    width: `${product.ai_confidence_score}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lightbox Modal */}
                    {lightboxOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                            <div className="relative max-w-6xl max-h-full">
                                {/* Close Button */}
                                <button
                                    onClick={closeLightbox}
                                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                >
                                    <FiX className="w-6 h-6" />
                                </button>

                                {/* Navigation Arrows */}
                                {1 + (product.additional_images?.length || 0) >
                                    1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                        >
                                            <FiArrowLeft className="w-6 h-6" />
                                        </button>

                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                                        >
                                            <FiArrowRight className="w-6 h-6" />
                                        </button>
                                    </>
                                )}

                                {/* Image */}
                                <img
                                    src={
                                        currentImageIndex === 0
                                            ? product.image_url
                                            : product.additional_images[
                                                  currentImageIndex - 1
                                              ]
                                    }
                                    alt={`${product.title} - ${
                                        currentImageIndex + 1
                                    }`}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />

                                {/* Image Counter */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                                    {currentImageIndex + 1} /{" "}
                                    {1 +
                                        (product.additional_images?.length ||
                                            0)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CursorDetailsPage;
