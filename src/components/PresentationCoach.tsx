// import Image from "next/image";

// const PresentationSection = () => {
//   return (
//     <div className=" mx-5 flex flex-col lg:flex-row gap-6 lg:gap-14 justify-center items-center mt-15 p-6  shadow-md rounded-4xl border-1 w-fit lg:mx-auto border-gray-100 lg:mt-30 bg-gray-100">
//       {/* IMAGE */}
//       <div className=" relative w-45 h-45 lg:w-56 lg:h-56 rounded-full border-4 border-amber-300 overflow-hidden">
//         <Image
//           src="/coach.jpg"
//           alt="coach"
//           fill
//           className="object-cover [object-position:center_80%] scale-110 "
//         />
//       </div>
//       {/* DESCRIPTION */}
//       <div className=" p-5 text-center flex flex-col gap-3 text-gray-400 lg:max-w-2xl  ">
//         <p>
//           Coach certifié en nutrition et préparation physique, j’accompagne les
//           personnes motivées à transformer leur corps, améliorer leurs
//           performances et retrouver confiance en elles.
//         </p>
//         <p>
//           Mon objectif est de vous offrir un suivi personnalisé, adapté à votre
//           rythme et à vos besoins spécifiques, que ce soit pour perdre du poids,
//           prendre de la masse ou simplement retrouver une meilleure hygiène de
//           vie.
//         </p>
//         <p className=" text-gray-300 font-semibold">
//           Rejoignez-moi dès aujourd’hui et commencez votre parcours vers une
//           version plus forte, plus saine et plus épanouie de vous-même !
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PresentationSection;

// 2222222222222

// import Image from "next/image";

// const PresentationSection = () => {
//   return (
//     <div className="w-full py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//         {/* Photo du coach */}
//         <div className="flex justify-center">
//           <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-green-600 overflow-hidden shadow-lg">
//             <Image
//               src="/coach.jpg"
//               alt="Coach certifié"
//               fill
//               className="object-cover [object-position:center_80%]  scale-110"
//             />
//           </div>
//         </div>

//         {/* Texte de présentation */}
//         <div className="text-center md:text-left">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             À propos du coach
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Coach certifié en nutrition et préparation physique, j’accompagne
//             les personnes motivées à transformer leur corps et leur santé. Mon
//             but est de vous guider pas à pas vers une meilleure hygiène de vie,
//             grâce à des programmes personnalisés adaptés à vos besoins.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PresentationSection;

// 3333333333333

// import Image from "next/image";

// const PresentationSection = () => {
//   return (
//     <section className="relative w-full py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
//       {/* Déco en arrière-plan */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-20 -z-10"></div>

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//         {/* Photo du coach */}
//         <div className="flex justify-center relative group">
//           <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-green-600 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
//             <Image
//               src="/coach.jpg"
//               alt="Coach certifié"
//               fill
//               className="object-cover object-[center_80%] scale-110 group-hover:scale-125 transition-transform duration-700"
//             />
//           </div>
//           {/* Halo lumineux */}
//           <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-2xl group-hover:opacity-30 transition"></div>
//         </div>

//         {/* Texte de présentation */}
//         <div className="text-center md:text-left space-y-6">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
//             À propos du{" "}
//             <span className="text-green-600 underline decoration-green-400 decoration-4">
//               Coach
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//             Je suis un{" "}
//             <span className="font-semibold text-green-700">
//               coach certifié en nutrition et préparation physique
//             </span>
//             , passionné par l’accompagnement des personnes motivées à
//             transformer leur corps et leur santé.
//           </p>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//             Mon objectif est simple : vous offrir des{" "}
//             <span className="font-semibold text-green-700">
//               programmes sur-mesure
//             </span>
//             , adaptés à votre mode de vie, avec un suivi constant pour garantir
//             des{" "}
//             <span className="font-bold text-green-800">résultats durables</span>
//             .
//           </p>
//           <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition">
//             Commencez votre transformation 🚀
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PresentationSection;

// 444444444444444

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const PresentationSection = () => {
  return (
    <div className="relative w-full py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Effets visuels doux */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-300/50 rounded-full blur-3xl top-20 left-10 animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute w-96 h-96 bg-green-300/30 rounded-full blur-3xl bottom-10 right-10 animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo du coach avec effet moderne */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <div className="relative w-60 h-60 md:w-80 md:h-50 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/50 bg-white/60 backdrop-blur-md">
            <Image
              src="/coach.jpg"
              alt="Coach certifié"
              fill
              className="object-cover [object-position:center_68%] "
            />
          </div>
        </motion.div>

        {/* Texte de présentation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            À propos du coach
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Coach certifié en nutrition et préparation physique, j’accompagne
            les personnes motivées à transformer leur corps et leur santé. Mon
            approche repose sur des programmes personnalisés, une méthode
            progressive et une motivation constante pour atteindre vos
            objectifs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PresentationSection;
