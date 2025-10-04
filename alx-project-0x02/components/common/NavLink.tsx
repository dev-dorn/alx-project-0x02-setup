import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "@/interfaces";

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "", activeClassName = "text-primary font-semibold" }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={`${className} ${isActive ? activeClassName : ""}`}>
      {children}
    </Link>
  );
};

export default NavLink;
