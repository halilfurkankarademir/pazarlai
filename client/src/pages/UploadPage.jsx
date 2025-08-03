import { useState, useRef } from "react";
import {
    FiUpload,
    FiImage,
    FiX,
    FiZap,
    FiCheck,
    FiLoader,
    FiArrowRight,
} from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { Button } from "../components/ui";
import { uploadImage } from "../api/ImageApi";

const UploadPage = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisComplete, setAnalysisComplete] = useState(false);
    const [language, setLanguage] = useState("tr");
    const [brandModel, setBrandModel] = useState("");
    const [analysisResult, setAnalysisResult] = useState(null);
    const [images, setImages] = useState([]);

    const fileInputRef = useRef(null);

    // Dosya yükleme işlemleri
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file) => {
        // Dosya türü kontrolü
        if (!file.type.startsWith("image/")) {
            alert("Lütfen geçerli bir resim dosyası seçin.");
            return;
        }

        // Dosya boyutu kontrolü (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert("Dosya boyutu 5MB'dan küçük olmalıdır.");
            return;
        }

        setUploadedFile(file);

        // Preview oluştur
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const removeFile = () => {
        setUploadedFile(null);
        setPreviewUrl(null);
        setAnalysisComplete(false);
        setAnalysisResult(null);
        setLanguage("tr");
        setBrandModel("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const analyzeImage = async () => {
        if (!uploadedFile) return;

        setIsAnalyzing(true);

        try {
            // Backend'e resim ve ek bilgiler gönder
            const formData = new FormData();
            formData.append("image", uploadedFile);
            formData.append("language", language);
            if (brandModel.trim()) {
                formData.append("brand_model", brandModel);
            }

            const response = await uploadImage(formData);

            setImages(response.images);

            // Mock veri
            setTimeout(() => {
                const mockResult = {
                    title: "El Yapımı Seramik Vazo",
                    description:
                        "Doğal malzemelerden üretilmiş, benzersiz desenli el yapımı seramik vazo. Modern dekorasyona uygun şık tasarım.",
                    category: "Ev & Dekorasyon",
                    tags: ["seramik", "vazo", "el yapımı", "dekorasyon"],
                    suggestedPrice: "249.99",
                    marketingContent: {
                        shortDescription: "🌟 Benzersiz el yapımı seramik vazo",
                        socialMediaPost:
                            "#ElYapımı #SeramikSanatı #Dekorasyon Evinize şıklık katacak benzersiz vazo! 🏺✨",
                        seoKeywords:
                            "el yapımı vazo, seramik dekorasyon, benzersiz tasarım",
                    },
                };

                setAnalysisResult(mockResult);
                setIsAnalyzing(false);
                setAnalysisComplete(true);
            }, 3000);
        } catch (error) {
            console.error("Analiz hatası:", error);
            alert("Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.");
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex justify-center p-4 lg:p-16">
            <div className="w-full max-w-[1536px]">
                {/* Upload Form */}
                {!isAnalyzing && !analysisComplete && (
                    <div className="bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 ">
                        {!previewUrl ? (
                            <div
                                className={`border-2 border-dashed rounded-2xl p-8 transition-all duration-300 text-center ${
                                    dragActive
                                        ? "border-blue-400 bg-blue-500/10"
                                        : "border-gray-600 hover:border-gray-500"
                                }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <FiImage className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Ürün Fotoğrafını Yükle
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Fotoğrafı sürükle veya seç
                                </p>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    icon={FiUpload}
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="mx-auto"
                                >
                                    Dosya Seç
                                </Button>
                                <p className="text-sm text-gray-500 mt-4">
                                    PNG, JPG, GIF - Max 5MB
                                </p>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {/* Image Preview */}
                                <div className="text-center">
                                    <div className="relative inline-block">
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="max-w-xs w-full rounded-2xl shadow-2xl"
                                        />
                                        <button
                                            onClick={removeFile}
                                            className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors shadow-lg"
                                        >
                                            <FiX className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Input Fields */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Metin Üretim Dili
                                        </label>
                                        <select
                                            value={language}
                                            onChange={(e) =>
                                                setLanguage(e.target.value)
                                            }
                                            className="w-full px-4 py-4 bg-neutral-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white text-lg transition-all duration-200"
                                        >
                                            <option value="tr">Türkçe</option>
                                            <option value="en">English</option>
                                            <option value="de">Deutsch</option>
                                            <option value="fr">Français</option>
                                            <option value="es">Español</option>
                                            <option value="it">Italiano</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Marka / Model (Opsiyonel)
                                        </label>
                                        <input
                                            type="text"
                                            value={brandModel}
                                            onChange={(e) =>
                                                setBrandModel(e.target.value)
                                            }
                                            placeholder="Örn: Apple iPhone 15"
                                            className="w-full px-4 py-4 bg-neutral-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder-gray-400 text-lg transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                {/* Analyze Button */}
                                <button
                                    onClick={analyzeImage}
                                    className="w-full flex justify-center items-center py-4 px-6 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 active:scale-95"
                                >
                                    <FiZap className="mr-2 w-5 h-5" />
                                    AI ile Analiz Et
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Loading Animation */}
                {isAnalyzing && (
                    <div className="bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                        <div className="text-center">
                            {/* Loading Spinner */}
                            <div className="relative w-20 h-20 mx-auto mb-6">
                                <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <AiOutlineRobot className="w-8 h-8 text-blue-400 animate-pulse" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    AI Analiz Ediyor
                                </span>
                            </h3>

                            {/* Simple Progress */}
                            <div className="space-y-3 max-w-sm mx-auto">
                                <div className="flex items-center p-3 bg-blue-500/10 rounded-lg">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                                    <span className="text-blue-300 text-sm">
                                        Görsel analizi...
                                    </span>
                                </div>
                                <div className="flex items-center p-3 bg-purple-500/10 rounded-lg opacity-70">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-purple-300 text-sm">
                                        İçerik oluşturuluyor...
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-400 mt-6 text-sm">
                                Birkaç saniye sürecek...
                            </p>
                        </div>
                    </div>
                )}

                {/* Analysis Results */}
                {analysisComplete && analysisResult && (
                    <div className="w-full bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Analiz Tamamlandı
                                </span>
                            </h2>
                            <div className="flex items-center justify-center">
                                <AiOutlineRobot className="w-6 h-6 text-blue-400 mr-2" />
                                <span className="text-gray-400">
                                    AI tarafından oluşturuldu
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Generated Images */}
                            {images.length > 0 && (
                                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                        <FiImage className="w-5 h-5 text-blue-400 mr-2" />
                                        AI Tarafından Oluşturulan Görseller
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                        {images.map((imgUrl, idx) => (
                                            <div
                                                key={idx}
                                                className="relative group overflow-hidden rounded-xl border border-gray-700"
                                            >
                                                <img
                                                    src={imgUrl}
                                                    alt={`Generated ${idx + 1}`}
                                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Basic Info */}
                            <div className="grid gap-4">
                                <div className="bg-gray-700/30 rounded-xl p-4">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Ürün Başlığı
                                    </label>
                                    <p className="text-white font-semibold text-lg">
                                        {analysisResult.title}
                                    </p>
                                </div>
                                <div className="bg-gray-700/30 rounded-xl p-4">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Açıklama
                                    </label>
                                    <p className="text-white leading-relaxed">
                                        {analysisResult.description}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-700/30 rounded-xl p-4">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Kategori
                                        </label>
                                        <p className="text-blue-300 font-medium">
                                            {analysisResult.category}
                                        </p>
                                    </div>
                                    <div className="bg-gray-700/30 rounded-xl p-4">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Önerilen Fiyat
                                        </label>
                                        <p className="text-green-400 font-bold text-xl">
                                            {analysisResult.suggestedPrice} TL
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gray-700/30 rounded-xl p-4">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Etiketler
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {analysisResult.tags.map(
                                            (tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                                                >
                                                    #{tag}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Marketing Content */}
                            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-500/20">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                    <FiZap className="w-5 h-5 text-blue-400 mr-2" />
                                    Pazarlama İçeriği
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Sosyal Medya Postu
                                        </label>
                                        <p className="text-white bg-gray-800/50 p-4 rounded-lg">
                                            {
                                                analysisResult.marketingContent
                                                    .socialMediaPost
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            SEO Anahtar Kelimeler
                                        </label>
                                        <p className="text-gray-300 bg-gray-800/50 p-4 rounded-lg">
                                            {
                                                analysisResult.marketingContent
                                                    .seoKeywords
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3">
                                <button className="w-full flex justify-center items-center py-4 px-6 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 active:scale-95">
                                    <FiCheck className="mr-2 w-5 h-5" />
                                    Ürünü Kaydet
                                </button>
                                <button
                                    onClick={() => {
                                        setAnalysisComplete(false);
                                        setAnalysisResult(null);
                                    }}
                                    className="w-full py-3 px-6 rounded-xl font-medium text-gray-300 border border-gray-600 hover:border-gray-500 hover:text-white transition-colors"
                                >
                                    Yeniden Analiz Et
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadPage;
