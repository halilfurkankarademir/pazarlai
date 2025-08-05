import {
    FiTarget,
    FiTrendingUp,
    FiArrowRight,
    FiCamera,
    FiZap,
    FiShare2,
    FiDollarSign,
    FiTag,
    FiEdit3,
    FiImage,
} from "react-icons/fi";

export const homeFeatures = [
    {
        id: "visual-transform",
        icon: FiCamera,
        title: "Profesyonel Ürün Fotoğrafı Oluşturma",
        description:
            "Telefonunuzla çektiğiniz basit fotoğrafları AI ile e-ticaret kalitesinde profesyonel görsellere dönüştürür.",
        features: [
            "Basit fotoğraftan profesyonel çekime",
            "E-ticaret standartlarında kalite",
            "Otomatik arka plan düzenleme",
        ],
        color: "danger",
    },
    {
        id: "description",
        icon: FiTarget,
        title: "Profesyonel Açıklama Oluşturma",
        description:
            "Ürün fotoğrafınızı analiz ederek satış odaklı, profesyonel ve etkileyici açıklamalar oluşturur.",
        features: [
            "Satış odaklı metinler",
            "Ürün özellik analizi",
            "Pazarlama odaklı dil",
        ],
        color: "primary",
    },
    {
        id: "pricing",
        icon: FiTrendingUp,
        title: "Akıllı Fiyat Önerisi",
        description:
            "Ürününüzün özelliklerini analiz ederek piyasa ortalamasına göre optimal fiyat önerir.",
        features: [
            "Piyasa araştırması",
            "Rekabet analizi",
            "Karlılık hesaplama",
        ],
        color: "secondary",
    },
    {
        id: "social",
        icon: FiArrowRight,
        title: "Sosyal Medya İçeriği",
        description:
            "Instagram, Facebook ve diğer platformlar için dikkat çekici post metinleri ve hashtag'ler oluşturur.",
        features: [
            "Instagram post metni",
            "Trend hashtag'ler",
            "Engagement odaklı içerik",
        ],
        color: "success",
    },
    {
        id: "categorization",
        icon: FiZap,
        title: "Otomatik Kategori Belirleme",
        description:
            "Ürününüzü doğru kategoriye yerleştirir ve hedef kitle özellikleri belirler.",
        features: [
            "Otomatik sınıflandırma",
            "Hedef kitle analizi",
            "Platform optimizasyonu",
        ],
        color: "warning",
    },
    {
        id: "attribute-extraction",
        icon: FiImage,
        title: "Görsel Tabanlı Ürün Özellik Çıkarımı",
        description:
            "Ürün görselinden kategori, renk, materyal gibi temel özellikleri otomatik algılar.",
        features: [
            "Görselden kategori ve alt kategori tanıma",
            "Ürünün fiziksel özelliklerini (renk, doku, form vb.) analiz etme",
            "Ürüne özgü ayırt edici nitelikleri belirleme",
            "Eksik bilgi durumunda önerilen özelliklerle tamamlama",
        ],
    },
];

export const howItWorksFeatures = [
    {
        id: "visual-analysis",
        icon: FiImage,
        title: "Görsel Analiz",
        description:
            "AI ürün fotoğraflarınızı analiz ederek kategori, özellik ve kalite puanı belirler.",
    },
    {
        id: "price-suggestion",
        icon: FiDollarSign,
        title: "Fiyat Önerisi",
        description:
            "Pazar verilerine dayanarak optimal fiyat aralığı ve strateji önerileri sunar.",
    },
    {
        id: "category-detection",
        icon: FiTag,
        title: "Kategori Belirleme",
        description:
            "Ürününüzü doğru kategoriye yerleştirerek görünürlüğünüzü artırır.",
    },
    {
        id: "social-content",
        icon: FiShare2,
        title: "Sosyal Medya İçeriği",
        description:
            "Her platform için özelleştirilmiş, dikkat çekici içerikler oluşturur.",
    },
    {
        id: "description-generation",
        icon: FiEdit3,
        title: "Açıklama Oluşturma",
        description:
            "Satış odaklı, SEO uyumlu ürün açıklamaları ve pazarlama metinleri üretir.",
    },
    {
        id: "trend-analysis",
        icon: FiTrendingUp,
        title: "Trend Analizi",
        description:
            "Güncel pazar trendlerini takip ederek ürününüzü öne çıkaracak stratejiler önerir.",
    },
];
