import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const PricingFAQ = ({ faqs }) => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Sık Sorulan Sorular
                </h2>
                <p className="text-gray-400">
                    Aklınızdaki soruların yanıtlarını burada bulabilirsiniz
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
                    >
                        <button
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                            onClick={() => toggleItem(index)}
                        >
                            <span className="font-semibold text-white">
                                {faq.question}
                            </span>
                            {openItem === index ? (
                                <FiChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                                <FiChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                        </button>

                        {openItem === index && (
                            <div className="px-6 pb-4">
                                <p className="text-gray-300">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingFAQ;
