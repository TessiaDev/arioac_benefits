import Image from "next/image";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import { FaRegHandshake } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { GiMexico } from "react-icons/gi";
import { useEffect, useState } from "react";

import arioacLogo from "../assets/arioac_benefits.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [num, setNum] = useState(220);

  return (
    <Layout>
      <>
        <div className="bg-gradient-to-r from-[#293B85] to-[#B82E69]  h-92">
          <div className="grid lg:grid-cols-3 p-6 md:pd-16 container mx-auto md:grid-cols-1 h-3/6">
            <div className="mt-5 md:mt-10 lg:col-span-2 lg:p-10 lg:pr-12">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-300 md:text-5xl lg:text-5xl">
                Únete al Club de Beneficios y obtén acceso a recompensas
                exclusivas
              </h1>
            </div>
            <div className="flex lg:items-start justify-center p-6 mt-6">
              <div className="pattern-dots-md text-gray-100">
                <Image
                  className="w-auto translate-x-6 -translate-y-5 bg-zinc-100 p-8 rounded-tl-3xl rounded-br-3xl"
                  src={arioacLogo}
                  alt="Club de beneficios por arioac"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 container p-7 mx-auto">
          <p className=" mx-auto text-center text-lg text-gray-800 font-light lg:text-xl">
            El Club de Beneficios es un programa que reúne empresas en nuestra
            Comunidad ARIOAC, ofreciendo tarifas preferenciales y promociones.
            {/* &nbsp;
            <b>¡Contáctanos para unirte al Club de Beneficios!</b> */}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:gap-10">
            <div className="flex items-center gap-10 justify-center my-6 md:gap-6">
              <div className="flex rounded-full bg-violet-200 p-4 items-center justify-center">
                <MdFamilyRestroom className="text-2xl" />
              </div>
              <div className="p-1">
                <h3 className="font-bold text-xl md:text-2xl">
                  Comparte con la familia
                </h3>
                <p className="font-light md:text-lg my-2">
                  Los colaboradores pueden extender los beneficios a sus
                  familiares.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10 justify-center my-6 md:gap-6">
              <div className="flex rounded-full bg-violet-200 p-4 items-center justify-center">
                <FaRegHandshake className="text-2xl" />
              </div>
              <div className="p-1">
                <h3 className="font-bold text-xl md:text-2xl">
                  +{num} Alianzas
                </h3>
                <p className="font-light md:text-lg my-2">
                  Conoce los productos y servicios que nuestra comunidad puede
                  ofrecer.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10 justify-center my-6 md:gap-6">
              <div className="flex rounded-full bg-violet-200 p-4 items-center justify-center">
                <GiMexico className="text-2xl" />
              </div>
              <div className="p-1">
                <h3 className="font-bold text-xl md:text-2xl">
                  Alcance nacional
                </h3>
                <p className="font-light md:text-lg my-2">
                  Promociones en multiples establecimientos a nivel nacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

{
  /* <main className="flex min-h-screen flex-col items-center justify-between p-24">   
<h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
 Templates{' '}
 <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
   -&gt;
 </span>
</h2>
<p
 className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
>
 Discover and deploy boilerplate example Next.js&nbsp;projects.
</p>
</main> */
}
