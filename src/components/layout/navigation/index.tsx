import React from "react";

// Next components
import Link from "next/link";

// Components
import Search from "@/components/ui/search";

// Config
import { menuLinks, app } from "@/config";

// Types
import { menuLinks as menuLinksType } from "@/types/menuLinks";

const Navigation = () => {
  return (
    <>
      <div className="py-4 mb-10 border-y dark:border-none dark:bg-dark-600">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Left */}
            <div>
              <Link href="/" className="text-primary-500 text-2xl font-[500]">
                {app.name}
              </Link>
            </div>

            {/* Links */}
            <ul className="flex items-center gap-10">
              {menuLinks.map((link: menuLinksType, key: number) => (
                <li key={key}>
                  <Link
                    href={link.href}
                    className="dark:text-white font-[500] transition hover:text-primary-500"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right */}
            <div>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
