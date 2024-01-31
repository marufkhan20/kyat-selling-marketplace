import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(/images/hero-bg.jpg)` }}
      className="px-5 sm:px-0 pt-[65px]"
    >
      <div className="container flex-col lg:flex-row py-20 w-full min-h-[92vh] flex items-center gap-20">
        <div className="w-full xl:w-[60%] flex flex-col gap-8">
          <h4 className="text-xl">We Have 208,000+ Live Jobs</h4>
          <h2 className="text-[40px] leading-[50px] sm:text-[50px] md:text-[66px] sm:leading-[60px] md:leading-[72px]">
            Find the job that fits <br />
            your life
          </h2>
          <p className="text-lg">
            Type your keyword, then click search to find your perfect job.
          </p>
          <div>
            <Button>Get Started</Button>
          </div>
        </div>
        <div className="hidden w-full xl:w-[40%] lg:flex items-end">
          <img src="/images/hero-banner.svg" alt="hero banner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
