import { ClassroomDetailsInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ClassroomDetails({classroom , formatDate}: ClassroomDetailsInterface) {
    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="object-cover h-full"
            src={classroom.image}
            alt={`Image de la formation ${classroom.name}`}
            width={700}
            height={500}
          />
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {classroom.name}
            </h1>
            <p className="mt-2 text-lg text-gray-600 mb-6">
              {classroom.name.includes("Back-end") &&
                "Cette formation se concentre sur les technologies serveur, les bases de données et les API. Vous apprendrez à construire l'épine dorsale des applications web, en assurant la sécurité, la performance et la fiabilité des données."}
              {classroom.name.includes("Front-end") &&
                "Plongez dans l'univers de l'interface utilisateur. Vous maîtriserez les langages et frameworks modernes pour créer des expériences web intuitives, réactives et visuellement attrayantes pour les utilisateurs finaux."}
              {classroom.name.includes("Full-stack") &&
                "Devenez un développeur polyvalent, capable de gérer à la fois le développement côté client et côté serveur. Cette formation complète vous donne les compétences pour construire des applications web de A à Z, du design à la base de données."}
            </p>
            <div className="mt-4 text-gray-700 space-y-2">
              <p className="text-xl">
                <span className="font-bold">Capacité :</span>{" "}
                {classroom.capacity} étudiants
              </p>
              <p className="text-xl">
                <span className="font-bold">Étudiants inscrits :</span>{" "}
                {classroom.nbStudents}
              </p>
              <p className="text-xl">
                <span className="font-bold">
                  Date limite d&apos;inscription :
                </span>{" "}
                {formatDate(classroom.registerDeadline)}
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <Link href={`/register/${classroom.id}`}  
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              S&apos;inscrire à cette formation
            </Link>
            <Link
              href="/"
              className="bg-gray-200 hover:bg-gray-700 text-gray-400 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Retour
            </Link>
          </div>
        </div>
      </div>
    )
}