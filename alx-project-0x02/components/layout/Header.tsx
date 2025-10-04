import { FC } from "react";
import { HeaderProps } from "@/interfaces";
import Head from "next/head";
import NavBar from "../common/NavBar";

const Header: FC<HeaderProps> = ({
  title,
  links = [],
  logUrl = "/logo.png",
  alt = "Logo",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} page`} />
      </Head>

      <header className="bg-white shadow">
        <NavBar links={links} logUrl={logUrl} alt={alt} />
      </header>
    </>
  );
};

export default Header;
