import { FiTag, FiMessageCircle } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import PriceComparison from "./PriceComparison";

const ProductInfo = ({ product }) => {
    return (
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
                <PriceComparison
                    userPrice={product.user_price}
                    aiPrice={product.price_suggestion}
                    marketComparison={product.market_comparison}
                />

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
                        {Object.entries(product.details).map(([key, value]) => (
                            <div
                                key={key}
                                className="flex justify-between text-sm"
                            >
                                <span className="text-gray-400 capitalize">
                                    {key.replace("_", " ")}:
                                </span>
                                <span className="text-gray-200">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
