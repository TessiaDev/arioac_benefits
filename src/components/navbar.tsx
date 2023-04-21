import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import arioacLogo from "../assets/arioac_logo.png";

export default function Navbar() {
  const [state, setState] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const navigation = [
    { title: "Inicio", path: "/" },
    { title: "Club", path: "/club" },
    { title: "Socio ARIOAC", path: "/socio" },
    { title: "Alianzas", path: "/alianzas" },
    { title: "Membresia", path: "/membresia" },
    { title: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#293B85] to-[#B82E69]">
      <div className="items-center justify-between max-w-7xl px-2 mx-auto md:flex md:px-8 pb-2 transition-all">
        <div className="flex items-center justify-between py-2 md:py-5 md:block">
          <a href="#">
            <Image
              className=" max-h-8 sm:max-h-10 md:max-h-12 w-auto"
              src={arioacLogo}
              alt="Logo de arioac"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, i) => {
              return (
                <li key={i}>
                  <a
                    href={item.path}
                    className="text-gray-300 rounded-md px-3 py-2 text-md font-medium relative group"
                  >
                    {item.title}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-300 transition-all ${
                        item.path === pathname
                          ? " w-full"
                          : " group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
