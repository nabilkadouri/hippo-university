"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <nav className="w-full bg-white top-0 left-0 right-0 z-20 py-4 px-4">
        <div className=" px-4  md:items-center md:flex justify-between">
          {/* Logo et menu burger */}
          <div className="md:flex items-center ">
            <div className="flex items-center justify-between md:py-2 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/images/logo-hippo-university.png"
                  alt="logo hippo university"
                  width={70}
                  height={70}
                  className="w-16 h-16 md:w-23 md:h-23"
                />
              </Link>
              {/* Menu burger */}
              <div className="md:hidden ">
                <button
                  className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/svg/close.svg"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/svg/burger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Liens de navigation*/}
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className=" text-xl text-[#579ACC] py-4 md:px-6 text-center border-b-1 md:border-b-0  md:hover:text-blue-900 ">
                    <Link href="#accueil" onClick={() => setNavbar(!navbar)}>
                      Accueil
                    </Link>
                  </li>
                  <li className=" text-xl text-[#579ACC] py-4 px-6 text-center  border-b-1 md:border-b-0 md:hover:text-blue-900 ">
                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                      Formations
                    </Link>
                  </li>
                  <li className=" text-xl text-[#579ACC] py-4 px-6 text-center  border-b-1 md:border-b-0 md:hover:text-blue-900 ">
                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                      Contact
                    </Link>
                  </li>

                  <li className=" text-sm bg-[#579ACC] mt-10 py-4 px-4 rounded-xl text-center  md:hover:text-blue-900 md:hidden">
                    <Link
                      href="#login"
                      className="flex items-center gap-2 text-white font-semibold"
                    >
                      <Image
                        src="/svg/login.svg"
                        alt="Icone de connexion"
                        width={20}
                        height={20}
                      />
                      Connexion
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#579ACC] hidden md:block px-4 py-2 rounded-xl">
            <Link
              href="#login"
              className="flex items-center gap-2 text-white font-semibold"
            >
              <Image
                src="/svg/login.svg"
                alt="Icone de connexion"
                width={30}
                height={30}
              />
              Connexion
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
