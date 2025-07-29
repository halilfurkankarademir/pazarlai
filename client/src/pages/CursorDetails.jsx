import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
    FiEdit,
    FiTrash2,
    FiChevronLeft,
    FiShare2,
    FiCopy,
    FiTrendingUp,
    FiTag,
    FiMessageCircle,
} from "react-icons/fi";
import {
    AiOutlineRobot,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineTwitter,
} from "react-icons/ai";
import { BsStars, BsPalette, BsGraphUp } from "react-icons/bs";

const CursorDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [copiedText, setCopiedText] = useState("");

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
                        "https://images.unsplash.com/photo-1589984662646-e7f2ff8795ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                    ai_analysis: {
                        detected_objects: ["vazo", "seramik", "el yapımı"],
                        materials: ["seramik", "kil"],
                        colors: ["bej", "kahverengi", "doğal tonlar"],
                        style: "Geleneksel-Modern Hibrit",
                        quality_score: 92,
                    },
                    social_media_content: {
                        instagram_post:
                            "✨ Doğallığın zarif hali ✨\n\n🏺 %100 el işçiliği premium seramik vazo\n🌿 Sürdürülebilir üretim\n🎨 Geleneksel sanatın modern yorumu\n\n#elişi #seramik #dekorasyon #sürdürülebilir #handmade #vazo #sanat",
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
                        "https://images.unsplash.com/photo-1589984662516-e6d1a3b7d25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
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

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedText(type);
        setTimeout(() => setCopiedText(""), 2000);
    };

    const shareToSocialMedia = (platform, text) => {
        const encodedText = encodeURIComponent(text);
        const urls = {
            instagram: `https://www.instagram.com/`, // Instagram doğrudan paylaşım desteklemiyor
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${encodedText}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
        };

        if (platform === "instagram") {
            copyToClipboard(text, "instagram");
            alert(
                "Instagram metni panoya kopyalandı! Instagram uygulamasında paylaşabilirsiniz."
            );
        } else {
            window.open(urls[platform], "_blank", "width=600,height=400");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-400">
                        AI ile ürün analiz ediliyor...
                    </p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-300 mb-4">
                        Ürün bulunamadı
                    </h2>
                    <Link
                        to="/products"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-700"
                    >
                        <FiChevronLeft className="mr-2" /> Ürünlere Dön
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <Link
                        to="/products"
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                    >
                        <FiChevronLeft className="mr-1" /> Ürünlere Geri Dön
                    </Link>
                </div>

                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold flex items-center">
                            <AiOutlineRobot className="mr-3 text-indigo-500" />
                            AI Destekli Ürün Analizi
                        </h1>
                        <div className="ml-4 flex items-center bg-green-900/30 text-green-400 px-3 py-1 rounded-lg">
                            <BsStars className="mr-1" />
                            <span className="text-sm font-medium">
                                %{product.ai_confidence_score} Güvenilirlik
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <Link
                            to={`/edit-product/${product.id}`}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                        >
                            <FiEdit className="mr-2" /> Düzenle
                        </Link>
                        <button
                            onClick={handleDelete}
                            disabled={deleting}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center disabled:opacity-50 transition-colors"
                        >
                            <FiTrash2 className="mr-2" />
                            {deleting ? "Siliniyor..." : "Sil"}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sol Panel - Ürün Görselleri */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={
                                        product.image_url ||
                                        "https://via.placeholder.com/500x300?text=No+Image"
                                    }
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                                    <AiOutlineRobot className="mr-1" />
                                    AI Analiz
                                </div>
                            </div>

                            {/* Ek Görseller */}
                            {product.additional_images &&
                                product.additional_images.length > 0 && (
                                    <div className="grid grid-cols-3 gap-2 p-4 border-t border-gray-700">
                                        {product.additional_images.map(
                                            (img, index) => (
                                                <div
                                                    key={index}
                                                    className="h-24 overflow-hidden rounded border border-gray-700 hover:border-indigo-500 transition-colors cursor-pointer"
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`${
                                                            product.title
                                                        } - ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}

                            {/* AI Analiz Sonuçları */}
                            <div className="p-4 border-t border-gray-700">
                                <h3 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center">
                                    <BsStars className="mr-2" />
                                    AI Görsel Analizi
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div>
                                        <span className="text-gray-400">
                                            Tespit Edilen:
                                        </span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {product.ai_analysis.detected_objects.map(
                                                (obj, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-indigo-900/30 text-indigo-300 px-2 py-1 rounded text-xs"
                                                    >
                                                        {obj}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">
                                            Malzemeler:
                                        </span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {product.ai_analysis.materials.map(
                                                (material, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-green-900/30 text-green-300 px-2 py-1 rounded text-xs"
                                                    >
                                                        {material}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">
                                            Renkler:
                                        </span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {product.ai_analysis.colors.map(
                                                (color, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-xs"
                                                    >
                                                        {color}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="pt-2 border-t border-gray-700">
                                        <span className="text-gray-400">
                                            Kalite Skoru:
                                        </span>
                                        <div className="flex items-center mt-1">
                                            <div className="flex-1 bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-yellow-500 to-green-500 h-2 rounded-full"
                                                    style={{
                                                        width: `${product.ai_analysis.quality_score}%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="ml-2 text-sm font-medium text-green-400">
                                                {
                                                    product.ai_analysis
                                                        .quality_score
                                                }
                                                %
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Orta Panel - Ürün Bilgileri */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
                            {/* Başlık Karşılaştırması */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-xl font-bold text-white">
                                        AI Önerilen Başlık
                                    </h2>
                                    <span className="text-xs bg-indigo-900/30 text-indigo-300 px-2 py-1 rounded">
                                        Optimize Edildi
                                    </span>
                                </div>
                                <p className="text-lg text-gray-100 mb-3">
                                    {product.title}
                                </p>

                                <div className="text-sm">
                                    <span className="text-gray-400">
                                        Orijinal başlığınız:
                                    </span>
                                    <p className="text-gray-300 italic">
                                        "{product.user_title}"
                                    </p>
                                </div>
                            </div>

                            {/* Kategori */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-indigo-400 mb-2 flex items-center">
                                    <FiTag className="mr-2" />
                                    AI Kategori Önerisi
                                </h3>
                                <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-lg">
                                    {product.category}
                                </span>
                            </div>

                            {/* Fiyat Karşılaştırması */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center">
                                    <BsGraphUp className="mr-2" />
                                    Fiyat Analizi
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                                        <p className="text-sm text-gray-400">
                                            Sizin Fiyatınız
                                        </p>
                                        <p className="text-xl font-bold text-yellow-400">
                                            {product.user_price} TL
                                        </p>
                                    </div>
                                    <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                                        <p className="text-sm text-gray-400">
                                            AI Önerisi
                                        </p>
                                        <p className="text-xl font-bold text-green-400">
                                            {product.price_suggestion} TL
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-3 text-sm text-gray-400">
                                    <div className="flex justify-between">
                                        <span>Piyasa Aralığı:</span>
                                        <span>
                                            {
                                                product.market_comparison
                                                    .min_price
                                            }{" "}
                                            -{" "}
                                            {
                                                product.market_comparison
                                                    .max_price
                                            }{" "}
                                            TL
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Ortalama:</span>
                                        <span>
                                            {
                                                product.market_comparison
                                                    .avg_price
                                            }{" "}
                                            TL
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* AI Açıklama vs Kullanıcı Açıklaması */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center">
                                    <FiMessageCircle className="mr-2" />
                                    AI Optimize Edilmiş Açıklama
                                </h3>
                                <div className="bg-gray-700/30 p-4 rounded-lg mb-3">
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="text-xs text-gray-500">
                                    <span>Orijinal açıklamanız: </span>
                                    <span className="italic">
                                        "{product.user_description}"
                                    </span>
                                </div>
                            </div>

                            {/* Ürün Özellikleri */}
                            <div>
                                <h3 className="text-sm font-semibold text-indigo-400 mb-3">
                                    Ürün Özellikleri
                                </h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {Object.entries(product.details).map(
                                        ([key, value]) => (
                                            <div
                                                key={key}
                                                className="flex justify-between text-sm"
                                            >
                                                <span className="text-gray-400 capitalize">
                                                    {key.replace("_", " ")}:
                                                </span>
                                                <span className="text-gray-200">
                                                    {value}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Panel - Sosyal Medya ve Tasarım */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Sosyal Medya İçerikleri */}
                        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                <FiShare2 className="mr-2 text-indigo-500" />
                                Sosyal Medya İçerikleri
                            </h3>

                            {/* Instagram */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-pink-400 flex items-center">
                                        <AiOutlineInstagram className="mr-2" />
                                        Instagram
                                    </h4>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    product.social_media_content
                                                        .instagram_post,
                                                    "instagram"
                                                )
                                            }
                                            className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center"
                                        >
                                            <FiCopy className="mr-1" />
                                            {copiedText === "instagram"
                                                ? "Kopyalandı!"
                                                : "Kopyala"}
                                        </button>
                                        <button
                                            onClick={() =>
                                                shareToSocialMedia(
                                                    "instagram",
                                                    product.social_media_content
                                                        .instagram_post
                                                )
                                            }
                                            className="text-xs bg-pink-600 hover:bg-pink-700 text-white px-2 py-1 rounded"
                                        >
                                            Paylaş
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-3 rounded-lg border border-pink-500/20">
                                    <p className="text-sm text-gray-300 whitespace-pre-line">
                                        {
                                            product.social_media_content
                                                .instagram_post
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Facebook */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-blue-400 flex items-center">
                                        <AiOutlineFacebook className="mr-2" />
                                        Facebook
                                    </h4>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    product.social_media_content
                                                        .facebook_post,
                                                    "facebook"
                                                )
                                            }
                                            className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center"
                                        >
                                            <FiCopy className="mr-1" />
                                            {copiedText === "facebook"
                                                ? "Kopyalandı!"
                                                : "Kopyala"}
                                        </button>
                                        <button
                                            onClick={() =>
                                                shareToSocialMedia(
                                                    "facebook",
                                                    product.social_media_content
                                                        .facebook_post
                                                )
                                            }
                                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
                                        >
                                            Paylaş
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                                    <p className="text-sm text-gray-300">
                                        {
                                            product.social_media_content
                                                .facebook_post
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* Twitter */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-sky-400 flex items-center">
                                        <AiOutlineTwitter className="mr-2" />
                                        Twitter/X
                                    </h4>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    product.social_media_content
                                                        .twitter_post,
                                                    "twitter"
                                                )
                                            }
                                            className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center"
                                        >
                                            <FiCopy className="mr-1" />
                                            {copiedText === "twitter"
                                                ? "Kopyalandı!"
                                                : "Kopyala"}
                                        </button>
                                        <button
                                            onClick={() =>
                                                shareToSocialMedia(
                                                    "twitter",
                                                    product.social_media_content
                                                        .twitter_post
                                                )
                                            }
                                            className="text-xs bg-sky-600 hover:bg-sky-700 text-white px-2 py-1 rounded"
                                        >
                                            Paylaş
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-sky-500/10 p-3 rounded-lg border border-sky-500/20">
                                    <p className="text-sm text-gray-300">
                                        {
                                            product.social_media_content
                                                .twitter_post
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tasarım Önerileri */}
                        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                <BsPalette className="mr-2 text-indigo-500" />
                                AI Tasarım Önerileri
                            </h3>

                            <div className="space-y-4">
                                {product.design_suggestions.map(
                                    (design, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-700/30 p-4 rounded-lg border border-gray-600"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-semibold text-purple-400">
                                                    {design.title}
                                                </h4>
                                                <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                                                    {design.style}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-300 mb-3">
                                                {design.description}
                                            </p>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-xs text-gray-400">
                                                    Renk Paleti:
                                                </span>
                                                <div className="flex space-x-1">
                                                    {design.color_palette.map(
                                                        (color, colorIndex) => (
                                                            <div
                                                                key={colorIndex}
                                                                className="w-4 h-4 rounded-full border border-gray-600"
                                                                style={{
                                                                    backgroundColor:
                                                                        color,
                                                                }}
                                                                title={color}
                                                            ></div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded-lg transition-colors">
                                                Bu Tasarımı Oluştur
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Oluşturulma Bilgisi */}
                        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4">
                            <div className="flex justify-between items-center text-sm">
                                <div>
                                    <p className="text-gray-400">
                                        Oluşturulma Tarihi:
                                    </p>
                                    <p className="text-gray-200">
                                        {new Date(
                                            product.created_at
                                        ).toLocaleDateString("tr-TR")}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center text-indigo-400 mb-1">
                                        <AiOutlineRobot className="mr-1" />
                                        <span className="font-semibold">
                                            AI Powered
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Gemini AI ile oluşturuldu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CursorDetailsPage;
