import { IconBox, Card } from "../ui";

const StepCard = ({ step, index }) => {
    const colorMap = {
        blue: "primary",
        purple: "secondary",
        green: "success",
        orange: "warning",
    };

    const bgColorMap = {
        blue: "from-blue-600/10 to-blue-800/5",
        purple: "from-purple-600/10 to-purple-800/5",
        green: "from-green-600/10 to-green-800/5",
        orange: "from-orange-600/10 to-orange-800/5",
    };

    const borderColorMap = {
        blue: "border-blue-500/20",
        purple: "border-purple-500/20",
        green: "border-green-500/20",
        orange: "border-orange-500/20",
    };

    return (
        <Card
            className={`bg-gradient-to-br ${bgColorMap[step.color]} ${
                borderColorMap[step.color]
            } border relative group`}
            padding="lg"
        >
            {/* Step Number */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center text-sm font-bold text-white z-10">
                {step.number}
            </div>

            <div className="flex items-start mb-6">
                <IconBox
                    icon={step.icon}
                    variant={colorMap[step.color]}
                    size="lg"
                    className="mr-4 flex-shrink-0"
                />
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>

            <div className="space-y-2">
                {step.details.map((detail, idx) => (
                    <div
                        key={idx}
                        className="flex items-center text-sm text-gray-400"
                    >
                        <div
                            className={`w-2 h-2 rounded-full bg-${step.color}-400 mr-3 flex-shrink-0`}
                        ></div>
                        {detail}
                    </div>
                ))}
            </div>

            {/* Connection Line (except for last step) */}
            {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-600 to-transparent transform -translate-y-1/2"></div>
            )}
        </Card>
    );
};

export default StepCard;
