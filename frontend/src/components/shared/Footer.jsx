import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(/images/footer-bg.jpg)` }}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-12 border-b border-gray-700">
          <div className="w-full lg:w-[40%]">
            <h3 className="text-white text-xl">
              Join our email subscription now to get updates on new jobs and
              notifications.
            </h3>
          </div>
          <div className="w-full lg:w-[60%] gap-5 sm:gap-0 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-white outline-none rounded-lg sm:rounded-none p-5 w-full sm:rounded-tl-lg sm:rounded-bl-lg"
            />
            <Button className="w-[250px] sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg">
              Subscribe Now
            </Button>
          </div>
        </div>

        <div className="py-16 flex justify-between flex-col md:flex-row gap-10 text-white border-b border-gray-700">
          <div className="w-full md:w-[25%]">
            <h2 className="text-3xl">Logo Here</h2>
            <p className="mt-5">
              Many desktop publishing packages and web page editors now.
            </p>
            <ul className="mt-5 flex flex-col gap-2">
              <li>
                <span className="font-medium">Address</span> : 65 Sunset CA
                90026, USA
              </li>
              <li>
                <span className="font-medium">Email</span> : example@max.com
              </li>
              <li>
                <span className="font-medium">Call</span> : 555-555-1234
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[75%] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div>
              <div>
                <h3 className="text-xl text-primary font-normal">For Buyers</h3>
                <div className="w-10 h-[3px] mt-3 bg-primary" />
              </div>
              <ul className="flex flex-col gap-4 mt-8">
                <li>
                  <Link href="#">User Dashboard</Link>
                </li>
                <li>
                  <Link href="#">Alert resume</Link>
                </li>
                <li>
                  <Link href="#">Candidates</Link>
                </li>
                <li>
                  <Link href="#">Blog List</Link>
                </li>
                <li>
                  <Link href="#">Blog Single</Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="text-xl text-primary font-normal">
                  For Sellers
                </h3>
                <div className="w-10 h-[3px] mt-3 bg-primary" />
              </div>
              <ul className="flex flex-col gap-4 mt-8">
                <li>
                  <Link href="#">Post Jobs</Link>
                </li>
                <li>
                  <Link href="#">Blog Grid</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <Link href="#">Jobs Listing</Link>
                </li>
                <li>
                  <Link href="#">Jobs Details</Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="text-xl text-primary font-normal">
                  Helpful Resources
                </h3>
                <div className="w-10 h-[3px] mt-3 bg-primary" />
              </div>
              <ul className="flex flex-col gap-4 mt-8">
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Employer detail</Link>
                </li>
                <li>
                  <Link href="#">Profile</Link>
                </li>
                <li>
                  <Link href="#">404 Page</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="text-xl text-primary font-normal">
                  Quick Links
                </h3>
                <div className="w-10 h-[3px] mt-3 bg-primary" />
              </div>
              <ul className="flex flex-col gap-4 mt-8">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Bookmark</Link>
                </li>
                <li>
                  <Link href="#">Jobs</Link>
                </li>
                <li>
                  <Link href="#">Employer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 text-white flex items-center justify-between flex-wrap gap-5">
          <p>Copyright © 2023 All Rights Reserved.</p>
          <div className="text-primary flex items-center gap-5 text-xl">
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
