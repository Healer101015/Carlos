import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselBanner() {
    const slides = [
        {
            img: "https://static.vecteezy.com/system/resources/thumbnails/041/023/580/small_2x/mental-health-awareness-month-banner-with-people-silhouette-free-vector.jpg",
            title: "MUDE AGORA",
            desc: "Encontre as tendências mais recentes em estética e beleza para realçar sua beleza natural.",
            btnText: "Ver mais",
        },
        {
            img: "https://clinicalucianaandrade.com.br/wp-content/uploads/2024/11/BANNER-GOOGLE-DOCTOS.jpg",
            title: "FACIAIS",
            desc: "Explore nossa linha exclusiva de produtos faciais para todos os tipos de pele.",
            btnText: "Ver produtos",
        },
        {
            img: "https://cdn.eadplataforma.app/client/abebpos/upload/others/040820211628093328whatsappimage2021-08-04at12.58.57.jpeg",
            title: "NOVA COLEÇÃO",
            desc: "Descubra novidades e promoções especiais em nossa nova coleção.",
            btnText: "Explorar agora",
        },
    ];

    return (
        <div className="w-full relative">
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay
                infiniteLoop
                interval={5000}
                stopOnHover
                swipeable
                emulateTouch
                transitionTime={800}
            >
                {slides.map((slide, idx) => (
                    <div key={idx} className="relative group h-[50vh] md:h-[70vh]">
                        {/* Imagem */}
                        <div className="overflow-hidden h-full w-full">
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* Gradiente + Texto */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center px-6 md:px-16">
                            <div className="text-left text-white max-w-2xl animate-slideUp">
                                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
                                    {slide.title}
                                </h2>
                                <p className="mb-6 text-sm md:text-lg text-gray-200 drop-shadow-md max-w-lg">
                                    {slide.desc}
                                </p>
                                <button
                                    className="bg-gradient-to-r from-yellow-600 to-yellow-800 px-8 py-3 rounded-full text-sm md:text-base font-semibold uppercase shadow-lg hover:from-yellow-700 hover:to-yellow-900 hover:scale-105 transition-all duration-300"
                                >
                                    {slide.btnText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Animação suave */}
            <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }
      `}</style>
        </div>
    );
}
