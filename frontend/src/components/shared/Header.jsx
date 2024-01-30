import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="bg-[#F7F8FA]">
      <div className="px-5 w-full lg:px-0 lg:w-[80%] 2xl:w-[65%] mx-auto">
        <div className="mx-auto flex items-center justify-between gap-1 sm:gap-5 flex-wrap sm:px-6 py-5 rounded-lg">
          <Link
            className="text-primary font-bold text-2xl sm:text-3xl"
            href="/"
          >
            Logo Here
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
            <Link href="#" className="text-2xl text-primary">
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
