import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiUpload, FiImage, FiX, FiZap, FiLoader } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { Button } from "../components/ui";
import { uploadImage } from "../api/ImageApi";
import { getCurrentUser } from "../api/UserApi";

const UploadPage = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [language, setLanguage] = useState("tr");
    const [brandModel, setBrandModel] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const user = await getCurrentUser();
            setCurrentUser(user);
        };
        fetchCurrentUser();
    }, []);

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
        if (!file.type.startsWith("image/")) {
            alert("Lütfen geçerli bir resim dosyası seçin.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Dosya boyutu 5MB'dan küçük olmalıdır.");
            return;
        }

        setUploadedFile(file);

        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const removeFile = () => {
        setUploadedFile(null);
        setPreviewUrl(null);
        setLanguage("tr");
        setBrandModel("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const analyzeImage = async () => {
        if (!uploadedFile || !currentUser) return;
        setIsAnalyzing(true);

        try {
            const formData = new FormData();
            formData.append("image", uploadedFile);
            formData.append("language", language);
            if (brandModel.trim()) {
                formData.append("model", brandModel);
            }
            formData.append("user_id", currentUser.user_id);

            const res = await uploadImage(formData);

            console.log(res);

            navigate("/products");
        } catch (error) {
            console.error("Analiz hatası:", error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex justify-center py-8 lg:px-16">
            <div className="w-full max-w-[1536px]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                            Ürün Yükle
                        </h1>
                        <p className="text-gray-400">
                            Ürününüzü Pazarlai ile hazırlamak için ürün
                            fotoğrafını yükleyin.
                        </p>
                    </div>
                </div>
                {!isAnalyzing && (
                    <div className="bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8">
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
                                    PNG, JPG, GIF
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

                {isAnalyzing && (
                    <div className="bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
                        <div className="text-center">
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
                            <p className="text-gray-400 mt-6 text-sm">
                                Bu işlem birkaç dakika sürebilir. Lütfen
                                bekleyiniz.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadPage;
