import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center rounded-lg justify-between max-w-6xl mx-auto px-6 py-4">
      {/* Logo */}
      <div className="text-xl font-bold text-primary cursor-pointer" onClick={() => router.push("/")}>
        Airbnb
      </div>

      {/* Nav links */}
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-primary">
            Experiences
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-primary">
            Services
          </Link>
        </li>

        {/* Right side buttons */}
        
      </ul>
      <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-bg-light transition">
            Become a Guest
          </button>

          <button
            className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition"
            onClick={() => router.push("/login")}
          >
            Log In
          </button>
        </div>
    </nav>
  );
};

export default NavBar;
