import { FiStar, FiUser } from "react-icons/fi";
import Card from "./Card";

const TestimonialCard = ({
    name,
    role,
    company,
    content,
    rating = 5,
    avatar,
    className = "",
}) => {
    return (
        <Card
            className={`bg-gray-800 border-gray-700 ${className}`}
            padding="lg"
        >
            <div className="flex items-center mb-4">
                {[...Array(rating)].map((_, i) => (
                    <FiStar
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                    />
                ))}
            </div>

            <blockquote className="text-gray-300 mb-6 italic">
                "{content}"
            </blockquote>

            <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt={name}
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <FiUser className="w-6 h-6 text-white" />
                    )}
                </div>

                <div>
                    <div className="font-semibold text-white">{name}</div>
                    {role && (
                        <div className="text-sm text-gray-400">
                            {role}
                            {company && ` - ${company}`}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default TestimonialCard;
