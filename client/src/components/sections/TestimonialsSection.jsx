import { TestimonialCard } from "../ui";
import { testimonials } from "../../data";

const TestimonialsSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Satıcılarımız Ne Diyor?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Binlerce küçük işletme sahibi Pazarlai ile işlerini
                        büyütüyor
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.slice(0, 6).map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            name={testimonial.name}
                            role={testimonial.role}
                            company={testimonial.company}
                            content={testimonial.content}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>

                {/* Additional testimonials section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
                        <div className="text-4xl font-bold text-white mb-2">
                            4.9/5
                        </div>
                        <div className="text-gray-300 mb-4">
                            Müşteri Memnuniyeti
                        </div>
                        <div className="text-sm text-gray-400">
                            3,000+ değerlendirme
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-8 text-center">
                        <div className="text-4xl font-bold text-white mb-2">
                            %95
                        </div>
                        <div className="text-gray-300 mb-4">
                            Tekrar Kullanım Oranı
                        </div>
                        <div className="text-sm text-gray-400">
                            Müşterilerimiz geri dönüyor
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
