"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const TemoignagesSection = () => {
  const avis = [
    {
      nom: "Ramzi",
      texte: "n9est 6kg en un mois!",
      photo: "/coach.jpg",
    },
    {
      nom: "Fares",
      texte: "Coach a la hauteur, je vous le conseille.",
      photo: "/coach.jpg",
    },
    {
      nom: "Ali",
      texte: "زدت في الوزن من 61 الى 72 في مدة شهرين",
      photo: "/coach.jpg",
    },
  ];

  return (
    <div className="w-full relative py-16 bg-white">
      {/* Particules flottantes */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-200 rounded-full"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 900,
            opacity: 0.4,
            scale: 0.6,
          }}
          animate={{
            y: [null, Math.random() * 300],
            opacity: [0.4, 1, 0.4],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Témoignages de nos clients
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="pb-10"
        >
          {avis.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-gray-50 p-8 rounded-xl shadow-md max-w-2xl mx-auto">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 mb-4">
                  <Image
                    src={item.photo}
                    alt={item.nom}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg text-gray-700 italic mb-3">
                  “{item.texte}”
                </p>
                <h4 className="text-gray-900 font-semibold">{item.nom}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TemoignagesSection;
