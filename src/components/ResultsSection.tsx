import Image from "next/image";

const ResultsSection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Citation */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Section Avant / Après
        </h2>
        <p className="text-xl italic text-gray-600 mb-12">
          “Des résultats concrets en quelques semaines.”
        </p>

        {/* Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemple transformation */}
          <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="relative w-full h-82">
              <Image
                src="/avant1.jpg"
                alt="Avant"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-82">
              <Image
                src="/apres1.jpg"
                alt="Après"
                fill
                className="object-cover"
              />
            </div>
            <p className="py-4 text-gray-700 font-medium">
              Transformation client 1
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="relative w-full h-82">
              <Image
                src="/avant2.jpg"
                alt="Avant"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-82">
              <Image
                src="/apres2.jpg"
                alt="Après"
                fill
                className="object-cover"
              />
            </div>
            <p className="py-4 text-gray-700 font-medium">
              Transformation client 2
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="relative w-full h-82">
              <Image
                src="/avant3.jpg"
                alt="Avant"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-82">
              <Image
                src="/apres3.jpg"
                alt="Après"
                fill
                className="object-cover"
              />
            </div>
            <p className="py-4 text-gray-700 font-medium">
              Transformation client 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
