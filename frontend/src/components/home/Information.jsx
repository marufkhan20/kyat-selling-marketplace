import Button from "../ui/Button";

const Information = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-10 flex-wrap">
          <div>
            <h4 className="text-xl">+MMK 1, 700,000,000</h4>
            <span className="text-lg">Kyat Processed</span>
          </div>
          <div>
            <h4 className="text-xl">+13, 000</h4>
            <span className="text-lg">Customers Trust Escrow</span>
          </div>
        </div>

        <h2 className="text-[40px] leading-[50px] md:text-[46px] mt-10 md:leading-[55px] text-center">
          Over MMK 1, 700,000,000 protected <br /> with Escrow Myanmar
        </h2>

        <div className="flex justify-center mt-10">
          <Button>Learn More About Escrow</Button>
        </div>
        <p className="text-center mt-5 text-lg">
          Safeguarding both buyer and seller.
        </p>
      </div>
    </section>
  );
};

export default Information;
