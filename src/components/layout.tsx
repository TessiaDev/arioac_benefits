import { type ReactElement } from "react";

import Footer from "./footer";
import Navbar from "./navbar";

interface IPropLayout {
  children: ReactElement
}

export default function Layout({children}: IPropLayout) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}