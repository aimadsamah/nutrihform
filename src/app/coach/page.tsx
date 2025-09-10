"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CoachPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/salle.jpg"
          alt="Coach sportif"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Votre Coach Personnel
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            Expertise, motivation et résultats. Un accompagnement sur mesure
            pour transformer votre corps et votre mental.
          </p>
          <a
            href="/programmes"
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Découvrir mes programmes
          </a>
        </motion.div>
      </section>

      {/* Biographie */}
      <section className="px-6 md:px-16 lg:px-32 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/coach.jpg"
            alt="Coach portrait"
            fill
            className="object-cover [object-position:center_68%]"
          />
        </motion.div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Biographie</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Passionné par le sport et la nutrition, je suis{" "}
            <span className="font-semibold">
              diplômé en Sciences du Sport et certifié en Nutrition
            </span>
            . Depuis plus de 5 ans, j’accompagne des clients à atteindre leurs
            objectifs : perte de poids, prise de masse, remise en forme, ou
            encore préparation physique.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mon approche repose sur l’écoute, la rigueur, et une méthode
            progressive qui respecte votre rythme de vie.
          </p>
        </div>
      </section>

      {/* Diplômes */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 px-6 md:px-16 lg:px-32">
        <h2 className="text-4xl font-bold text-center mb-12">
          Diplômes & Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Diplôme en Sciences du Sport",
            "Certification en Nutrition Sportive",
            "Spécialisation en Préparation Physique",
            "+100 clients accompagnés",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-6 rounded-2xl shadow-lg text-center"
            >
              <p className="text-lg font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Valeurs & Méthode */}
      <section className="px-6 md:px-16 lg:px-32 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Mes Valeurs & Ma Méthode
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl shadow-xl bg-white text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">🎯 Personnalisation</h3>
            <p>
              Des programmes uniques, adaptés à vos besoins, votre niveau et
              votre mode de vie.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl shadow-xl bg-white text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">🔥 Motivation</h3>
            <p>
              Un coaching qui vous pousse à donner le meilleur de vous-même,
              avec énergie et discipline.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl shadow-xl bg-white text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">💡 Progression</h3>
            <p>
              Une méthode durable, basée sur des résultats concrets et une
              évolution progressive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 text-center bg-gray-900 text-white">
        <Image
          src="/fitness-bg.jpg"
          alt="Salle de sport"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à commencer votre transformation ?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Rejoignez une méthode testée et approuvée. Ensemble, faisons de vos
            objectifs une réalité.
          </p>
          <a
            href="/contact"
            className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Me Contacter
          </a>
        </div>
      </section>
    </div>
  );
}
