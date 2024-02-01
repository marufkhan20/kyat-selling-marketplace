import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="absolute bg-[#F7F7F7] top-0 left-0 right-0 w-full">
      <div className="w-full px-5 smpx-0 lg:w-[80%] 2xl:w-[65%] mx-auto">
        <div className="mx-auto flex items-center justify-between gap-1 sm:gap-5 flex-wrap py-5 rounded-lg">
          <Link
            className="text-primary font-bold text-2xl sm:text-3xl"
            href="/"
          >
            Escrow Myanmar
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center flex-wrap gap-5">
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/">Our Purpose</Link>
              </li>
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/">About Us</Link>
              </li>
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/">Contact Us</Link>
              </li>
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/">Faq</Link>
              </li>
              <li className="transition-all hover:text-primary text-lg">
                <Link href="/">Feedback</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-7">
            <Link href="#" className="text-2xl text-primary hidden sm:block">
              <LuSearch />
            </Link>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-2"
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
