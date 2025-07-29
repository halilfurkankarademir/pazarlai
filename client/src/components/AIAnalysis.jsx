import { BsStars } from "react-icons/bs";

const AIAnalysis = ({ aiAnalysis }) => {
    return (
        <div className="p-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center">
                <BsStars className="mr-2" />
                AI Görsel Analizi
            </h3>
            <div className="space-y-2 text-sm">
                <div>
                    <span className="text-gray-400">Tespit Edilen:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {aiAnalysis.detected_objects.map((obj, index) => (
                            <span
                                key={index}
                                className="bg-indigo-900/30 text-indigo-300 px-2 py-1 rounded text-xs"
                            >
                                {obj}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <span className="text-gray-400">Malzemeler:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {aiAnalysis.materials.map((material, index) => (
                            <span
                                key={index}
                                className="bg-green-900/30 text-green-300 px-2 py-1 rounded text-xs"
                            >
                                {material}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <span className="text-gray-400">Renkler:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {aiAnalysis.colors.map((color, index) => (
                            <span
                                key={index}
                                className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-xs"
                            >
                                {color}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="pt-2 border-t border-gray-700">
                    <span className="text-gray-400">Kalite Skoru:</span>
                    <div className="flex items-center mt-1">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-yellow-500 to-green-500 h-2 rounded-full"
                                style={{
                                    width: `${aiAnalysis.quality_score}%`,
                                }}
                            ></div>
                        </div>
                        <span className="ml-2 text-sm font-medium text-green-400">
                            {aiAnalysis.quality_score}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAnalysis;
