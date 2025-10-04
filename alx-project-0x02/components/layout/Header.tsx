import { FC } from "react";
import { HeaderProps } from "@/interfaces";
import Head from 'next/head'
import NavBar from "../common/NavBar";

const Header: FC<HeaderProps> = ({
  title,
  links,
  logUrl = "/logo.png",
  alt = "Logo",
}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} page`}/>



    </Head>
    <header className="bg-white shadow">
        <NavBar/>
      {/* your header content */}
    </header>
    </>
  );
};

export default Header;
