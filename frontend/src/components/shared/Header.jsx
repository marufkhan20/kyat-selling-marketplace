"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Button from "../ui/Button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);
  return (
    <header className="absolute bg-[#F7F7F7] top-0 left-0 right-0 w-full">
      <div className="w-full px-5 smpx-0 lg:w-[80%] 2xl:w-[65%] mx-auto">
        <div className="mx-auto flex items-center justify-between gap-1 sm:gap-5 py-5 rounded-lg">
          <Link
            className="text-primary font-bold text-2xl sm:text-3xl"
            href="/"
          >
            Escrow Myanmar
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center flex-wrap gap-5">
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/about">Our Purpose</Link>
              </li>
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/about#about">About Us</Link>
              </li>
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/contact#faq">Faq</Link>
              </li>
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/contact">Feedback</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-7">
            <Button
              variant="secondary"
              size="sm"
              className="hidden lg:flex items-center gap-2"
              href="/sign-in"
            >
              <CiLogin />
              <span>Login</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="hidden lg:flex items-center gap-2"
              href="/sign-up"
            >
              <CiLogin />
              <span>Sign Up</span>
            </Button>

            <Button
              variant="secondary"
              size="sm"
              className="block lg:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <FaBars />
            </Button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`transition-all z-50 duration-300 ${
          openMenu
            ? "opacity-100 visible lg:opacity-0 lg:invisible"
            : "opacity-0 invisible"
        } fixed inset-0 w-full h-full bg-white p-5`}
      >
        <div className="flex justify-end">
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => setOpenMenu(false)}
          >
            <MdClose />
          </Button>
        </div>

        <div className="w-full h-full flex justify-center items-center flex-col">
          <nav>
            <ul className="flex items-center flex-col flex-wrap gap-5">
              <li
                onClick={() => setOpenMenu(false)}
                className="transition-all hover:text-primary text-lg"
              >
                <Link href="/about">Our Purpose</Link>
              </li>
              <li
                onClick={() => setOpenMenu(false)}
                className="transition-all hover:text-primary text-lg"
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                onClick={() => setOpenMenu(false)}
                className="transition-all hover:text-primary text-lg"
              >
                <Link href="/contact">Contact Us</Link>
              </li>
              <li
                onClick={() => setOpenMenu(false)}
                className="transition-all hover:text-primary text-lg"
              >
                <Link href="/contact">Faq</Link>
              </li>
              <li
                onClick={() => setOpenMenu(false)}
                className="transition-all hover:text-primary text-lg"
              >
                <Link href="/contact">Feedback</Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col mt-5 items-center gap-7">
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-2"
              href="/sign-in"
              onClick={() => setOpenMenu(false)}
            >
              <CiLogin />
              <span>Login</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-2"
              href="/sign-up"
              onClick={() => setOpenMenu(false)}
            >
              <CiLogin />
              <span>Sign Up</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
