import { BsPalette } from "react-icons/bs";

const DesignSuggestions = ({ designSuggestions }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <BsPalette className="mr-2 text-indigo-500" />
                AI Tasarım Önerileri
            </h3>

            <div className="space-y-4">
                {designSuggestions.map((design, index) => (
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
                                            style={{ backgroundColor: color }}
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
                ))}
            </div>
        </div>
    );
};

export default DesignSuggestions;
