import FeeCalculator from "../shared/Dashboard/FeeCalculator";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/images/hero-bg.jpg)`,
        backgroundSize: "cover",
      }}
      className="px-5 sm:px-0 py-[150px] lg:pt-[65px] lg:pb-0"
    >
      <div className="container-custom flex-col lg:flex-row py-20 w-full min-h-[92vh] flex items-center gap-20">
        <div className="w-full flex flex-col gap-8">
          <p className="text-xl">
            With Escrow Myanmar you can buy and sell Myanmar Kyat safely. We
            work to protect you and your family.
          </p>
          <FeeCalculator />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex items-center gap-5 flex-wrap">
            <div className="w-[140px] h-[140px] rounded-full border-2 border-primary flex items-center justify-center text-center p-4 text-xl">
              Buy or Sell With Kyat Safely.
            </div>
            <div className="text-xl">
              <span>Today Selling Market Rate</span>
              <br />
              <span className="text-primary">USD 3390</span>
            </div>
          </div>
          <ul className="mt-5 flex flex-col gap-4">
            <li className="flex items-center gap-2 text-lg">
              <div className="w-5 h-5 rounded-full border-2 border-primary" />
              <span>Buyer pays Escrow Myanmar</span>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <div className="w-5 h-5 rounded-full border-2 border-primary" />
              <span>Escrow Myanmar confirmed payment</span>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <div className="w-5 h-5 rounded-full border-2 border-primary" />
              <span>Seller transfers to buyer</span>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <div className="w-5 h-5 rounded-full border-2 border-primary" />
              <span>Buyer inspect & confirmed the transfer</span>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <div className="w-5 h-5 rounded-full border-2 border-primary" />
              <span>Escrow Myanmar pays seller</span>
            </li>
          </ul>
          <div className="mt-10">
            <Button href="/sign-up">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
