import { CheckCircle } from "lucide-react";

const PourquoiNousChoisirSection = () => {
  return (
    <div className=" relative w-full py-16 bg-gray-50">
      {/* Effets visuels doux */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 lg:bg-green-300/40 rounded-full blur-3xl top-0 left-0  animate-[pulse_6s_ease-in-out_infinite]"></div>

        <div className="absolute w-72 h-32 bg-green-300/40 rounded-full blur-3xl bottom-0 left-100  animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute w-96 h-96 bg-green-200/40 rounded-full blur-3xl bottom-10 right-0 animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Pourquoi nous choisir ?
        </h2>

        {/* Liste des avantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
            <p className="text-lg text-gray-700">
              Coaching en ligne et présentiel
            </p>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
            <p className="text-lg text-gray-700">Suivi personnalisé</p>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
            <p className="text-lg text-gray-700">
              Plans adaptés à votre style de vie
            </p>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
            <p className="text-lg text-gray-700">Prix accessibles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PourquoiNousChoisirSection;
