import { AiOutlineRobot } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import AIAnalysis from "./AIAnalysis";

const ProductImages = ({ product }) => {
    return (
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
                            {product.additional_images.map((img, index) => (
                                <div
                                    key={index}
                                    className="h-24 overflow-hidden rounded border border-gray-700 hover:border-indigo-500 transition-colors cursor-pointer"
                                >
                                    <img
                                        src={img}
                                        alt={`${product.title} - ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                {/* AI Analiz Sonuçları */}
                <AIAnalysis aiAnalysis={product.ai_analysis} />
            </div>
        </div>
    );
};

export default ProductImages;
