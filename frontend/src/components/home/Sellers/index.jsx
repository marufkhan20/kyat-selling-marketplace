import Heading from "@/components/shared/Heading";
import Button from "@/components/ui/Button";
import Seller from "./Seller";

const Sellers = () => {
  return (
    <section className="section-container bg-[#F0F6FE]">
      <div className="container-custom">
        <Heading
          title={
            <span>
              Find Your Career You <br />
              Deserve it
            </span>
          }
          subTitle="All Sellers"
        />

        <div className="flex flex-col gap-10 mt-14">
          <Seller />
          <Seller />
          <Seller />
          <Seller />
          <Seller />
        </div>

        <div className="mt-10 flex justify-center w-full">
          <Button href="#">Browse All Sellers</Button>
        </div>
      </div>
    </section>
  );
};

export default Sellers;
