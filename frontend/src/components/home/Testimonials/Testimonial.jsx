const Testimonial = () => {
  return (
    <div className="flex gap-8 bg-[#F9FCFF] rounded-xl">
      <div className="hidden sm:flex w-[400px] items-end">
        <img
          className="w-full"
          src="/images/testimonials/1.png"
          alt="testimonial"
        />
      </div>
      <div className="py-10 pl-7 sm:pl-0 pr-7 w-full flex flex-col gap-12">
        <div>
          <img src="/images/icons/quote-dark.png" alt="quote" />
        </div>
        <p className="italic">
          I just got a job that I applied for via careerfy! I used the site all
          the time during my job hunt.
        </p>
        <div>
          <h4 className="text-lg text-primary">John Doe</h4>
          <span>Accountant</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
