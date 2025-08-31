import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative text-white py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('images/hero-dev.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto relative z-10 text-center px-4 ">
        <h1 className=" text-5xl md:text-8xl font-extrabold leading-tight mb-4">
          Hippo University
        </h1>
        <p className="text-xl md:text-4xl font-semibold mb-8">
          Votre avenir dans la tech commence ici.
        </p>
        <p className=" font-extralight text-sm md:text-2xl mx-auto mb-20">
          Rejoignez-nous et maîtrisez les technologies de demain, du
          développement back-end au design web, en passant par le DevOps. Nos
          formations sont conçues pour faire de vous un expert prêt à relever
          les défis du monde numérique.
        </p>
        <Link href="/classrooms" passHref>
          <span className="inline-block bg-[#4F90C0] text-white font-bold py-4 px-6 md:py-6 md:px-8 rounded-full shadow-lg hover:bg-[#09416F] transition-colors duration-300 transform hover:scale-105 text-xl md:text-4xl">
            Découvrir nos formations
          </span>
        </Link>
      </div>
    </div>
  );
}
