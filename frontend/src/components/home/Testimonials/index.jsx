import Heading from "@/components/shared/Heading";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <Heading
          title={
            <span>
              What Our Customers <br />
              Say About Us
            </span>
          }
          subTitle="Clients Testimonials"
          center={false}
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
