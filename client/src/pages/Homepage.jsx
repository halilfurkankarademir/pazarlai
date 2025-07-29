import { useState, useCallback } from "react";
import { FiUpload, FiImage, FiX, FiPlus } from "react-icons/fi";

const Homepage = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            handleImage(files[0]);
        }
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImage(file);
        }
    };

    const handleImage = (file) => {
        if (!file.type.match("image.*")) {
            alert("Lütfen bir resim dosyası seçin");
            return;
        }

        setImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreview(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const removeImage = () => {
        setImage(null);
        setPreview(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Ürününüzü Yükleyin
                    </h1>
                    <p className="mt-2 text-gray-400">
                        Ürün fotoğrafınızı yükleyin, AI asistanımız profesyonel
                        tanıtım içeriği oluştursun
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Resim Yükleme Alanı */}
                    <div
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                            isDragging
                                ? "border-indigo-500 bg-gray-700"
                                : "border-gray-600 hover:border-gray-500"
                        }`}
                    >
                        {preview ? (
                            <div className="relative">
                                <img
                                    src={preview}
                                    alt="Önizleme"
                                    className="mx-auto max-h-64 rounded-lg object-contain"
                                />
                                <button
                                    onClick={removeImage}
                                    className="absolute top-2 right-2 p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white"
                                >
                                    <FiX className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-center">
                                    <FiUpload className="w-12 h-12 text-gray-400" />
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-300">
                                        <span className="font-medium text-indigo-400">
                                            Dosya yüklemek için tıklayın
                                        </span>{" "}
                                        veya sürükleyip bırakın
                                    </p>
                                    <p className="mt-1 text-sm text-gray-400">
                                        PNG, JPG, JPEG (Max. 5MB)
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    id="file-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="mt-4 inline-flex items-center px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                                >
                                    <FiImage className="mr-2 w-4 h-4" />
                                    Dosya Seç
                                </label>
                            </>
                        )}
                    </div>

                    {/* Ek Bilgi Alanı */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <label
                            htmlFor="additional-info"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Eklemek istediğiniz özel bilgiler (Opsiyonel)
                        </label>
                        <div className="flex rounded-md shadow-sm">
                            <textarea
                                id="additional-info"
                                name="additional-info"
                                rows={3}
                                value={additionalInfo}
                                onChange={(e) =>
                                    setAdditionalInfo(e.target.value)
                                }
                                className="outline-none p-4 flex-1 block  w-full rounded-md sm:text-sm border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                                placeholder="Ürün özellikleri, malzeme bilgisi, özel notlar..."
                            />
                        </div>
                    </div>

                    {/* AI Analiz Butonu */}
                    <div className="text-center">
                        <button
                            disabled={!image}
                            className={`cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                                image
                                    ? "bg-indigo-600 hover:bg-indigo-700"
                                    : "bg-gray-600 cursor-not-allowed"
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            AI ile Ürün Analizi Yap
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
