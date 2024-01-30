import Heading from "../shared/Heading";

const HowItWorks = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <Heading title="How It Works" subTitle="Working Process" />

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-[75px] text-[#efefef] font-extrabold">01</h2>
            <div className="relative">
              <div className="bg-primary flex justify-center py-4 rounded-lg ml-4">
                <h4 className="text-lg text-white">
                  Register <br />
                  Your Account
                </h4>
              </div>
              <div className="absolute left-0 top-3 bg-white p-4 rounded-lg how-it-works-card">
                <img src="/images/works/1.png" alt="work" />
              </div>
            </div>
            <p className="mt-12">
              You need to create an account to find the best and preferred job.
            </p>
          </div>
          <div>
            <h2 className="text-[75px] text-[#efefef] font-extrabold">02</h2>
            <div className="relative">
              <div className="bg-primary flex justify-center py-4 rounded-lg ml-4">
                <h4 className="text-lg text-white">
                  Contact <br />
                  With Seller
                </h4>
              </div>
              <div className="absolute left-0 top-3 bg-white p-4 rounded-lg how-it-works-card">
                <img src="/images/works/2.png" alt="work" />
              </div>
            </div>
            <p className="mt-12">
              You need to create an account to find the best and preferred job.
            </p>
          </div>
          <div>
            <h2 className="text-[75px] text-[#efefef] font-extrabold">03</h2>
            <div className="relative">
              <div className="bg-primary flex justify-center py-4 rounded-lg ml-4">
                <h4 className="text-lg text-white">
                  Upload <br />
                  Your Resume
                </h4>
              </div>
              <div className="absolute left-0 top-3 bg-white p-4 rounded-lg how-it-works-card">
                <img src="/images/works/3.png" alt="work" />
              </div>
            </div>
            <p className="mt-12">
              You need to create an account to find the best and preferred job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
