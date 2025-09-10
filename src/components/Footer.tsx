// import Image from "next/image";
// import { CiFacebook } from "react-icons/ci";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className=" flex flex-col xl:flex-row w-full gap-10 border-1 border-gray-100 p-3 justify-between">
//       {/* PART 1 */}
//       <div className="w-full flex items-center justify-center flex-col xl:flex-row  xl:w-2/5 p-3 border-1 border-gray-50 shadow-md">
//         {/* LOGO */}
//         <div className=" flex  xl:w-1/4 justify-center items-center">
//           <div className="  relative w-30 h-30 xl:w-20 xl:h-20 ">
//             <Image
//               className=" object-contain"
//               src="/logoh.png"
//               alt="logo"
//               fill
//             />
//           </div>
//         </div>
//         {/* TEXT */}
//         <p className=" text-center xl:w-3/4 text-md text-gray-400 p-5">
//           Coaching sportif et nutritionnel personnalisé pour atteindre vos
//           objectifs : perte de poids, prise de masse ou remise en forme. Suivi
//           en ligne et en présentiel avec résultats garantis.
//         </p>
//       </div>
//       {/* PART 2 */}
//       <div className=" xl:w-3/5 ">
//         <div className=" flex flex-col md:flex-row gap-4">
//           {/* SERVICES */}
//           <div className=" md:w-1/2 items-center  flex flex-col gap-3  ">
//             <h3 className=" font-semibold flex  items-center bg-gray-100 text-gray-500 lg:bg-inherit p-2 w-full justify-center">
//               Services
//             </h3>
//             <div className=" flex flex-col items-center gap-1 text-gray-400 text-sm">
//               <p>Coaching nutrition uniquement</p>
//               <p>Coaching sportif uniquement</p>
//               <p>Pack complet</p>
//               <p>Remise en forme générale</p>
//               <p>Perte de poids</p>
//               <p>Prise de masse</p>
//             </div>
//           </div>
//           {/* CONTACT */}

//           <div className="md:w-1/2 items-center text-center flex flex-col gap-3">
//             <h3 className=" font-semibold w-full flex  items-center bg-gray-100 text-gray-500 lg:bg-inherit p-2 justify-center">
//               Contact
//             </h3>
//             <div className=" flex gap-2">
//               <FaWhatsapp className=" text-xl text-gray-600" />
//               <p className=" text-gray-400">0770454948</p>
//             </div>
//             <div className=" flex gap-2">
//               <CiFacebook className=" text-xl text-gray-600" />
//               <p className=" text-gray-400">Facebook</p>
//             </div>
//             <div className=" flex gap-2">
//               <FaInstagram className=" text-xl text-gray-600" />
//               <p className=" text-gray-400">Instagram</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// 22222222222222222222222222222222222222222222

// import Link from "next/link";
// import {
//   FaWhatsapp,
//   FaInstagram,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-gray-900 text-gray-200 py-10 mt-10">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {/* Mini description */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">À propos</h2>
//           <p className="text-sm leading-6">
//             Coaching sportif et nutritionnel personnalisé pour atteindre vos
//             objectifs : perte de poids, prise de masse ou remise en forme. Suivi
//             en ligne et en présentiel avec résultats garantis.
//           </p>
//         </div>

//         {/* Liens rapides */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Liens rapides</h2>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link href="/" className="hover:text-white transition">
//                 Accueil
//               </Link>
//             </li>
//             <li>
//               <Link href="/programmes" className="hover:text-white transition">
//                 Programmes
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/coaching-en-ligne"
//                 className="hover:text-white transition"
//               >
//                 Coaching en ligne
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/coaching-presentiel"
//                 className="hover:text-white transition"
//               >
//                 Coaching présentiel
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-white transition">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Coordonnées */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Contact</h2>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-center gap-2">
//               <FaPhone /> 0559722901
//             </li>
//             <li className="flex items-center gap-2">
//               <FaWhatsapp />{" "}
//               <a
//                 href="https://wa.me/213559722901"
//                 target="_blank"
//                 className="hover:text-white"
//               >
//                 WhatsApp
//               </a>
//             </li>
//             <li className="flex items-center gap-2">
//               <FaEnvelope />{" "}
//               <a href="mailto:coach@gmail.com" className="hover:text-white">
//                 coach@gmail.com
//               </a>
//             </li>
//             <li className="flex items-center gap-2">
//               <FaInstagram />{" "}
//               <a
//                 href="https://instagram.com/coach"
//                 target="_blank"
//                 className="hover:text-white"
//               >
//                 @coach
//               </a>
//             </li>
//             <li className="flex items-center gap-2">
//               <FaMapMarkerAlt /> Jijel, Algérie
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bas de page */}
//       <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
//         © {new Date().getFullYear()} Coaching Sport & Nutrition. Tous droits
//         réservés.
//       </div>
//     </div>
//   );
// };

// export default Footer;

// 3333333333333333333333333333333333333333333333

"use client";
import Image from "next/image";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white/10 backdrop-blur-md border-t border-white/20 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo + Mini description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative w-24 h-24">
            <Image
              src="/logoh.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-center md:text-left text-sm">
            Coaching sportif et nutritionnel personnalisé pour atteindre vos
            objectifs : perte de poids, prise de masse ou remise en forme. Suivi
            en ligne et en présentiel.
          </p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-gray-300 font-semibold mb-2">Liens rapides</h3>
          <Link href="/" className="text-gray-400 hover:text-white transition">
            Accueil
          </Link>
          <Link
            href="/programmes"
            className="text-gray-400 hover:text-white transition"
          >
            Programmes
          </Link>
          <Link
            href="/coach"
            className="text-gray-400 hover:text-white transition"
          >
            Coach
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Coordonnées */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-gray-300 font-semibold mb-2">Contact</h3>
          <div className="flex items-center gap-2 text-gray-400">
            <FaWhatsapp className="text-lg" />
            <span>0770454948</span>
          </div>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer flex items-center gap-2 text-gray-400"
          >
            <CiFacebook className="text-lg" />
            <span>Facebook</span>
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer flex items-center gap-2 text-gray-400"
          >
            <FaInstagram className="text-lg" />
            <span>Instagram</span>
          </Link>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Camp chevalier, Jijel, Algérie</span>
          </div>
        </div>
      </div>

      {/* Bulles lumineuses discrètes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-50px] left-[10%] w-50 h-50 bg-green-500/30 rounded-full blur-3xl animate-[float_15s_linear_infinite]" />
        <div className="absolute top-[-80px] right-[5%] w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-[float_20s_linear_infinite]" />
        <div className="absolute bottom-[-80px] right-[25%] w-56 h-56 bg-green-500/20 rounded-full blur-3xl animate-[float_20s_linear_infinite]" />

        <div className="absolute bottom-[-80px] left w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-[float_20s_linear_infinite]" />
      </div>
    </footer>
  );
};

export default Footer;
