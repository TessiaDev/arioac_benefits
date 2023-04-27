import Image from "next/image";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

import bannerFooter from "../assets/arioac_footer_img.png";

export default function Footer() {
  return (
    <footer className="w-full md:flex justify-between bg-gradient-to-r from-[#293B85] to-[#B82E69] sm:grid sm:grid-rows-2">
      <div className="grid grid-rows-1 p-6 text-center m-auto">
        <p className="text-md text-gray-300 font-semibold my-5">
          SIGUENOS EN REDES SOCIALES
        </p>
        <div className="grid grid-cols-5 w-full p-2 md:mx-auto justify-items-center">
          <a href="#">
            <SiFacebook color="white" />
          </a>
          <a href="#">
            <SiInstagram color="white" />
          </a>
          <a href="#">
            <SiTiktok color="white" />
          </a>
          <a href="#">
            <SiLinkedin color="white" />
          </a>
          <a href="#">
            <SiTwitter color="white" />
          </a>
        </div>
      </div>
      <Image
        className="w-auto"
        src={bannerFooter}
        alt="Club beneficios exclusivos socios"
      ></Image>
    </footer>
  );
}
