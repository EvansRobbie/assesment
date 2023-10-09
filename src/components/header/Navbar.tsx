import Link from "next/link";
import React from "react";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/", name: "Blog" },
  { path: "/", name: "WordPress" },
  { path: "/", name: "1w3" },
];

const icons = [
  {
    id: 1,
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
];
const Navbar = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between px-20 text-slate-200 bg-slate-950">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <nav>
        <ul className="flex justify-between gap-10 w-full">
          {navItems.map((item) => (
            <li key={item.name} className="flex justify-between w-full">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4">
        {icons.map((icon) => (
          <Link key={icon.id} href={icon.path}>
            {icon.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
