import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2, FiChevronLeft } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { BsStars } from "react-icons/bs";

// Components
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import SocialMediaContent from "../components/SocialMediaContent";
import DesignSuggestions from "../components/DesignSuggestions";

const CursorDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);

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
                    <ProductImages product={product} />

                    {/* Orta Panel - Ürün Bilgileri */}
                    <ProductInfo product={product} />

                    {/* Sağ Panel - Sosyal Medya ve Tasarım */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Sosyal Medya İçerikleri */}
                        <SocialMediaContent
                            socialMediaContent={product.social_media_content}
                        />

                        {/* Tasarım Önerileri */}
                        <DesignSuggestions
                            designSuggestions={product.design_suggestions}
                        />

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
