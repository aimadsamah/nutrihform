import {
  FaAppleAlt,
  FaDumbbell,
  FaUserCheck,
  FaChartLine,
} from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div className=" relative w-full py-16 bg-gray-50">
      {/* Effets visuels doux */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-200/60 rounded-full blur-3xl top-0 left-0  animate-[pulse_6s_ease-in-out_infinite]"></div>

        <div className="absolute w-72 h-32 bg-blue-300/50 rounded-full blur-3xl bottom-0 left-100  animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute w-96 h-96 bg-green-200/30 rounded-full blur-3xl bottom-10 right-0 animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Les services principaux
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Bloc 1 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <FaAppleAlt className="text-green-500 text-5xl mb-4" />
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Programmes alimentaires
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Des plans nutritionnels 100% personnalisés, adaptés à vos
              objectifs et habitudes.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <FaDumbbell className="text-blue-500 text-5xl mb-4" />
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Plans d’entraînement
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Des exercices variés et progressifs, adaptés à votre niveau et à
              votre rythme.
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <FaUserCheck className="text-purple-500 text-5xl mb-4" />
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Suivi personnalisé
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Un accompagnement continu pour rester motivé et atteindre vos
              objectifs.
            </p>
          </div>

          {/* Bloc 4 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <FaChartLine className="text-red-500 text-5xl mb-4" />
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Résultats mesurables
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Des résultats concrets et visibles, suivis étape par étape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
