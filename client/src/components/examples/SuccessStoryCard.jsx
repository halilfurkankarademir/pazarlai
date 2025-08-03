import { FiTrendingUp, FiDollarSign, FiEye } from "react-icons/fi";
import { Card } from "../ui";

const SuccessStoryCard = ({ story }) => {
    const colorClasses = {
        pink: "border-pink-500/30 bg-pink-500/5",
        orange: "border-orange-500/30 bg-orange-500/5",
        green: "border-green-500/30 bg-green-500/5",
        purple: "border-purple-500/30 bg-purple-500/5",
        blue: "border-blue-500/30 bg-blue-500/5",
        teal: "border-teal-500/30 bg-teal-500/5",
    };

    return (
        <Card className={`${colorClasses[story.color]} border`} padding="lg">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <story.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white text-lg">
                        {story.seller}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {story.category} • {story.location}
                    </p>
                </div>
            </div>

            <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">
                    {story.product}
                </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                    <h5 className="text-red-400 font-medium mb-2">Öncesi</h5>
                    <div className="text-sm text-gray-300 space-y-1">
                        <div>{story.before.description}</div>
                        <div className="font-semibold">
                            {story.before.price}
                        </div>
                        <div>{story.before.engagement}</div>
                        <div>{story.before.sales}</div>
                    </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                    <h5 className="text-green-400 font-medium mb-2">Sonrası</h5>
                    <div className="text-sm text-gray-300 space-y-1">
                        <div>{story.after.description}</div>
                        <div className="font-semibold">{story.after.price}</div>
                        <div>{story.after.engagement}</div>
                        <div>{story.after.sales}</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                    <FiDollarSign className="w-5 h-5 text-green-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-green-400">
                        +{story.improvement.priceIncrease}
                    </div>
                    <div className="text-xs text-gray-400">Fiyat</div>
                </div>

                <div className="text-center">
                    <FiEye className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-blue-400">
                        +{story.improvement.engagementIncrease}
                    </div>
                    <div className="text-xs text-gray-400">Etkileşim</div>
                </div>

                <div className="text-center">
                    <FiTrendingUp className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-purple-400">
                        +{story.improvement.salesIncrease}
                    </div>
                    <div className="text-xs text-gray-400">Satış</div>
                </div>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
                "{story.testimonial}"
            </blockquote>
        </Card>
    );
};

export default SuccessStoryCard;
