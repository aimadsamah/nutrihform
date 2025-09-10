// import Link from "next/link";

// const CallToActionSection = () => {
//   return (
//     <div className="w-full py-16 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         {/* Texte principal */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//           Prêt à commencer votre transformation ?
//         </h2>
//         <p className="text-lg md:text-xl mb-8">
//           Contactez-nous dès aujourd’hui et laissez-nous vous guider vers une
//           meilleure version de vous-même.
//         </p>

//         {/* Boutons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <Link
//             href="/contact"
//             className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
//           >
//             Nous contacter
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallToActionSection;

// 222222222222222222222222222222222222222222222222222222

// import Link from "next/link";

// const CallToActionSection = () => {
//   return (
//     <section className="relative w-full py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
//       {/* Bulles lumineuses */}
//       <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-gradient-to-tr from-cyan-400 to-blue-700 rounded-full blur-[140px] opacity-25 animate-pulse"></div>

//       {/* Contenu */}
//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
//           Votre transformation commence ici
//         </h2>

//         <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//           Découvrez une méthode innovante alliant{" "}
//           <span className="text-white">performance</span>,{" "}
//           <span className="text-white">nutrition</span> et{" "}
//           <span className="text-white">bien-être</span>. Un accompagnement
//           exclusif pour ceux qui veulent viser plus haut.
//         </p>

//         {/* CTA Button */}
//         <div className="flex justify-center">
//           <Link
//             href="/contact"
//             className="px-10 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 hover:border-cyan-400 transition-all duration-300"
//           >
//             Commencer maintenant
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToActionSection;

"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="relative w-full py-18 bg-gradient-to-br from-white via-green-100 to-white text-white overflow-hidden">
      {/* Bulles lumineuses */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-tr from-cyan-500/30 to-blue-500/20 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-gradient-to-tr from-green-600/20 to-green-200/10 rounded-full blur-[160px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      Particules flottantes
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
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
      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-gray-800 to-green-400">
          Transformez votre vie dès aujourd’hui
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Coaching moderne basé sur la{" "}
          <span className="text-gray-600 font-semibold">nutrition</span>, la{" "}
          <span className="text-gray-600 font-semibold">santé</span> et la{" "}
          <span className="text-gray-600 font-semibold">performance</span>.
          Rejoignez un programme pensé pour vous.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/60 transition-all duration-300"
            >
              Commencer maintenant
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
