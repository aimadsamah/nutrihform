"use client";

import { Dumbbell, Salad, HeartPulse, Target } from "lucide-react";

const ProgrammesPage = () => {
  const programmes = [
    {
      icon: <Salad className="w-12 h-12 text-green-600" />,
      title: "Programme alimentaire personnalisé",
      desc: "Un plan nutritionnel complet et adapté à votre profil. Nous analysons vos habitudes alimentaires, vos objectifs (perte de poids, prise de masse, équilibre), et vos préférences pour concevoir un programme simple à suivre et efficace. Avec des recettes variées, faciles à préparer et surtout adaptées à votre quotidien.",
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-gray-600" />,
      title: "Entraînement musculation",
      desc: "Un plan d’entraînement structuré pour maximiser vos progrès en salle ou à la maison. Chaque séance est conçue pour développer votre force, votre endurance et votre masse musculaire. Vous aurez un suivi continu pour corriger vos mouvements, éviter les blessures et progresser de manière régulière.",
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-red-600" />,
      title: "Programme perte de poids & cardio",
      desc: "Un mélange intelligent de cardio, HIIT et musculation légère pour brûler les graisses efficacement. Avec un suivi précis, nous adaptons votre plan chaque semaine pour optimiser les résultats sans frustration ni privation.",
    },
    {
      icon: <Target className="w-12 h-12 text-purple-600" />,
      title: "Remise en forme générale",
      desc: "Un programme équilibré qui combine sport, alimentation et bien-être mental. Idéal pour les personnes qui veulent retrouver de l’énergie, améliorer leur santé globale et se sentir mieux dans leur corps. Accessible à tous les niveaux.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Découvrez nos Programmes
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Que vous souhaitiez perdre du poids, gagner en force, ou simplement
          améliorer votre bien-être, nous avons un programme taillé sur mesure
          pour vous.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Un accompagnement complet pour transformer votre corps
        </h2>
        <p className="text-gray-600 text-lg">
          Chaque programme inclut un suivi personnalisé, des conseils pratiques
          et une évolution progressive selon vos résultats. Avec un
          accompagnement continu, nous vous aidons à rester motivé et à
          atteindre vos objectifs.
        </p>
      </div>

      {/* Programmes détaillés */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pb-16">
        {programmes.map((prog, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {prog.icon}
              <h3 className="text-xl font-bold text-gray-800">{prog.title}</h3>
            </div>
            <p className="text-gray-600">{prog.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action final */}
      <div className="bg-gray-800 text-white py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Prêt à commencer votre transformation ?
        </h2>
        <p className="mb-6 text-lg text-gray-200">
          Contactez-moi dès aujourd’hui pour en savoir plus sur le programme qui
          vous correspond.
        </p>
        <a
          href="/contact"
          className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Nous contacter
        </a>
      </div>
    </div>
  );
};

export default ProgrammesPage;
