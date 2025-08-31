"use client";
import { Classroom } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// fonction pour formater la date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
};

export default function ClassroomsList() {
  const [datas, setDatas] = useState<Classroom[] | null>(null);
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    const fetchClassrooms = async () => {
      const res = await fetch("https://hippo-api.ld-web.net/api/classrooms");
      const data = await res.json();

      setDatas(data.member);
      setLoad(true);

      console.log(data);
    };
    fetchClassrooms();
  }, []);

  if (!load) {
    return (
      <div className="text-center py-12 text-gray-600">
        {" "}
        chargement des formations en cours...
      </div>
    );
  }

  if (!datas || datas.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        {" "}
        Aucune formation disponible
      </div>
    );
  }

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-gray-800 mb-8 border-b-4 border-[#4F90C0] pb-2 inline-block">
          NOS FORMATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((classroom, index) => (
            <div
              key={classroom.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/images/hero-dev.jpg"
                  alt={classroom.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute top-0 left-0 bg-[#4F90C0] text-white text-sm md:text-xl font-bold px-3 py-3 rounded-br-lg uppercase">
                  {classroom.name.split(" ")[0]}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {classroom.name}
                  </h3>
                  <p className="text-gray-700 text-xl mb-3">
                    Capacité: {classroom.capacity} étudiants
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    Étudiants inscrits: {classroom.nbStudents}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
                  <span className="bg-gray-200 text-gray-700 font-medium text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 rounded">
                    Date limite: {formatDate(classroom.registerDeadline)}
                  </span>
                  <Link href={`/classroom/${classroom.id}`} key={index} className="inline-block bg-[#4F90C0] text-white font-bold py-1 px-2 md:py-2 md:px-3 rounded shadow-lg hover:bg-[#09416F] transition-colors duration-300 transform hover:scale-105 text-xs md:text-sm"> S&apos;inscrire</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
