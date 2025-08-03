import { FiArrowRight, FiPlay, FiCheck, FiZap, FiUsers } from "react-icons/fi";
import { Button } from "../ui";

const CTASection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ürününüzü Yükleyin, AI Sihri Başlasın!
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                    Sadece bir fotoğraf yükleyin, profesyonel açıklama, fiyat
                    önerisi, sosyal medya içeriği ve daha fazlasını anında alın.
                    Küçük işletmeniz büyük başarıya hazır mı?
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <Button
                        variant="primary"
                        size="lg"
                        icon={FiArrowRight}
                        iconPosition="right"
                    >
                        Hemen Ürün Yükle
                    </Button>

                    <Button variant="secondary" size="lg" icon={FiPlay}>
                        Örnek Sonuçları Gör
                    </Button>
                </div>

                <div className="flex justify-center items-center space-x-8 text-gray-400">
                    <div className="flex items-center">
                        <FiCheck className="w-5 h-5 mr-2" />
                        Ücretsiz Başlangıç
                    </div>
                    <div className="flex items-center">
                        <FiZap className="w-5 h-5 mr-2" />
                        Anında Sonuç
                    </div>
                    <div className="flex items-center">
                        <FiUsers className="w-5 h-5 mr-2" />
                        15K+ Mutlu Satıcı
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
