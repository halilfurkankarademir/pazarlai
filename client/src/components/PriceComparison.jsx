import { BsGraphUp } from "react-icons/bs";

const PriceComparison = ({ userPrice, aiPrice, marketComparison }) => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center">
                <BsGraphUp className="mr-2" />
                Fiyat Analizi
            </h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-400">Sizin Fiyatınız</p>
                    <p className="text-xl font-bold text-yellow-400">
                        {userPrice} TL
                    </p>
                </div>
                <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-400">AI Önerisi</p>
                    <p className="text-xl font-bold text-green-400">
                        {aiPrice} TL
                    </p>
                </div>
            </div>
            <div className="mt-3 text-sm text-gray-400">
                <div className="flex justify-between">
                    <span>Piyasa Aralığı:</span>
                    <span>
                        {marketComparison.min_price} -{" "}
                        {marketComparison.max_price} TL
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>Ortalama:</span>
                    <span>{marketComparison.avg_price} TL</span>
                </div>
            </div>
        </div>
    );
};

export default PriceComparison;
