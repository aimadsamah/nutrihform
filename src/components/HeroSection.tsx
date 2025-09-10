// import Image from "next/image";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <div className="">
//       {/* BACKGROUND IMAGE */}
//       <div className="w-full h-[80vh] md:h-[90vh] relative ">
//         <Image src="/hero1.jpg" alt="" fill className="object-cover" />
//         {/* OVERLAY */}
//         <div className=" absolute inset-0 bg-black/50" />
//       </div>
//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug">
//           Bienvenue chez <br />{" "}
//           <span className="text-gray-800">NUTRI H FORM</span>
//         </h1>
//         <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mb-6">
//           Coaching sportif et nutritionnel adapté à vos objectifs.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4">
//           <Link href="/programmes">
//             <button className="bg-gray-800 hover:bg-black px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-200">
//               Commencer maintenant
//             </button>
//           </Link>
//           <Link href="/contact">
//             <button className="bg-white text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition">
//               Contactez-nous
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Dégradés doux en arrière-plan */}
      <motion.div
        className="absolute top-[-8rem] left-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-tr from-indigo-200 to-cyan-200 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-10rem] right-[-8rem] w-[32rem] h-[32rem] bg-gradient-to-tr from-green-50 to-green-300 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transformez <span className="text-indigo-600">votre corps</span>,
          élevez <span className="text-cyan-600">votre esprit</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Coaching en nutrition & préparation physique, avec une approche
          moderne, scientifique et personnalisée pour atteindre vos objectifs
          durablement.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            href="/programmes"
            className="px-8 py-4 rounded-full bg-gray-800 text-white font-semibold shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Découvrir les programmes
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border border-indigo-400 text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
          >
            Nous contacter
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
