import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 ">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 text-lg md:text-xl ">
          <Link
            href="/privacy"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Politique de Confidentialité
          </Link>
          <Link
            href="/terms"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Conditions d&apos;Utilisation
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Nous Contacter
          </Link>
        </div>

        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Hippo University. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
