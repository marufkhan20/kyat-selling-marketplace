import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <section
      className="section-container"
      style={{ backgroundImage: `url(/images/call-to-action-bg.jpg)` }}
    >
      <div className="container-custom flex flex-col lg:flex-row items-center">
        <img
          src="/images/call-to-action-banner.png"
          alt="call to action banner"
        />
        <div className="px-8 py-16 sm:p-16 bg-[#1967D2] rounded-lg text-white">
          <h4 className="text-lg">Explore New Life</h4>
          <h2 className="text-[40px] leading-[50px] md:text-[45px] md:leading-[55px] mt-5 mb-10">
            Don’t just find. be found put your CV in front of great employers
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry the standard dummy text ever since the when an printer
            took.
          </p>
          <div className="mt-10">
            <Button className="bg-white text-primary hover:bg-white hover:text-primary px-10">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
