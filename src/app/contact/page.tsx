// "use client";

// import { useState } from "react";
// import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
// import emailjs from "emailjs-com";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", phone: "", message: "" });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     emailjs
//       .send("service_xiwtdbt", "template_5hs3k6p", form, "ih5FYuZsbIdUFbr1X")
//       .then(() => {
//         alert("Message envoyé !");
//         setForm({ name: "", phone: "", message: "" });
//       })
//       .catch(() => {
//         alert("Erreur d'envoi");
//       });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16">
//       {/* Titre */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
//         Contactez-nous
//       </h1>
//       <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
//         Une question ? Un projet de transformation ? Remplissez le formulaire
//         ci-dessous ou utilisez nos coordonnées directes.
//       </p>

//       {/* Grid */}
//       <div className="grid md:grid-cols-2 gap-12">
//         {/* Formulaire */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-lg rounded-2xl p-6 border"
//         >
//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">
//               Nom complet
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">
//               Numéro de Téléphone
//             </label>
//             <input
//               type="text"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Message</label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               required
//               rows={5}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
//           >
//             Envoyer le message
//           </button>
//         </form>

//         {/* Coordonnées directes */}
//         <div className="space-y-6">
//           <h2 className="text-2xl font-bold mb-4">Nos coordonnées</h2>
//           <ul className="space-y-4 text-gray-700">
//             <li className="flex items-center gap-3">
//               <Phone className="text-green-600" /> +213 555 11 22 33
//             </li>
//             <li className="flex items-center gap-3">
//               <MessageCircle className="text-green-600" /> WhatsApp : +213 555
//               11 22 33
//             </li>
//             <li className="flex items-center gap-3">
//               <Mail className="text-green-600" /> contact@nutrihform.com
//             </li>
//             <li className="flex items-center gap-3">
//               <Instagram className="text-green-600" /> @nutri_h_form
//             </li>
//             <li className="flex items-center gap-3">
//               <MapPin className="text-green-600" /> Jijel, Algérie
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send("service_xiwtdbt", "template_5hs3k6p", form, "ih5FYuZsbIdUFbr1X")
      .then(() => {
        alert("Message envoyé !");
        setForm({ name: "", phone: "", message: "" });
      })
      .catch(() => alert("Erreur d'envoi"));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden py-24 px-6">
      {/* Formes flottantes sportives */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gray-300/30 top-10 left-5"
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gray-400/20 bottom-0 right-10"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-gray-300/20 top-1/3 right-1/4"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Contactez-nous
        </h1>
        <p className="text-gray-600 text-lg">
          Une question ou un projet ? Remplissez le formulaire ou utilisez nos
          coordonnées.
        </p>
      </motion.div>

      {/* Grille Formulaire + Coordonnées */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        {/* Formulaire */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nom complet"
              required
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 outline-none transition"
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Numéro de téléphone"
              required
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 outline-none transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message"
              required
              rows={6}
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 outline-none resize-none transition"
            />
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(156,163,175,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-gray-300 text-gray-800 font-bold rounded-xl transition"
            >
              Envoyer le message
            </motion.button>
          </div>
        </motion.form>

        {/* Coordonnées */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200 backdrop-blur-sm flex flex-col gap-8"
        >
          <h2 className="text-3xl font-bold text-gray-700">Nos coordonnées</h2>
          <ul className="flex flex-col gap-5 text-gray-700 text-lg">
            <li className="flex items-center gap-3 hover:text-gray-500 transition">
              <Phone className="text-gray-500" />
              +213 555 11 22 33
            </li>
            <li className="flex items-center gap-3 hover:text-gray-500 transition">
              <Mail className="text-gray-500" />
              contact@nutrihform.com
            </li>
            <li className="flex items-center gap-3 hover:text-gray-500 transition">
              <Instagram className="text-gray-500" />
              @nutri_h_form
            </li>
            <li className="flex items-center gap-3 hover:text-gray-500 transition">
              <MapPin className="text-gray-500" />
              Jijel, Algérie
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
