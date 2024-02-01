import Heading from "@/components/shared/Heading";
import Button from "@/components/ui/Button";

const AboutPage = () => {
  return (
    <main className="pt-[75px]">
      <section className="section-container">
        <div className="container-custom">
          <Heading title="Our Purpose" center={false} />
          <p className="mt-10 text-lg">
            The purpose of Escrow Myanmar is to provide a secure and seamless
            platform for individuals to buy and sell Myanmar Kyat, while
            protecting them from scams and excessive fees. We aim to facilitate
            international money transfers for individuals who want to send money
            back to their families and friends in Myanmar without incurring
            losses. Our 1% fees for seller and 0% fees tor thoose byuing Myanmar
            Kyat are designed to support people in foreign contries who wish to
            send money back home. By prioritizing safety, transparency, and
            affordability, we seek to empower our customers and contribute to
            the financial well-being of the people of Myanmar.
          </p>
          <div className="flex justify-center mt-12">
            <Button href="/sign-up">Get started now</Button>
          </div>
        </div>
      </section>

      <section id="about" className="section-container bg-[#F0F6FE]">
        <div className="container-custom">
          <Heading title="About Us" center={false} />
          <p className="mt-10 text-lg">
            We are a small team with a big hear, dedicated to helping our
            customers. Our journey began as echange agents, facilitating
            transactions between buyers and sellers. Without technology, it was
            challenging to individually response to customers and manage
            multiple platforms like Facebook Messsenger or Viber while reviewing
            numerous bank transactions for verification. Unfortunately, this
            limited our ability to assist all customers, leaving some
            unattended. We genuinely felt sorry for not being able to help
            everyone, especially those transferring small amounts. Due to them
            time-consuming process, {""} fees were high. Adiitionally, the
            exchange rates were not transparent, and there were many scammers
            out there trying to take hard-earned money.
          </p>
          <p className="mt-10 text-lg">
            Therefore, we established Escrow Myanmar to streamline the process
            and implement seamless technology for submission, verification, and
            approval. Our aim is to protect people form scammers, reduce agent
            fees, and make the process transparent. Our 1% fees are lower than
            the 2-2.5% minimum chaged by most agents and aim to protect people
            form potential sacma while helping those back home. We genuinely
            welcome feedback for improvement and are committted to making a
            positive dirrefence in our customs lives. Your hard-earned money is
            protected with us.
          </p>

          <div className="mt-12">
            <Heading title="Our core values have guided every decision" />

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              <div className="p-4 rounded-lg border-2 border-heading">
                <h3 className="text-3xl mb-2">Integrity</h3>
                <p className="text-lg">
                  At Escrow Myanmar, we say what we mean and do what we say. We
                  build reliable partnerships.
                </p>
              </div>
              <div className="p-4 rounded-lg border-2 border-heading">
                <h3 className="text-3xl mb-2">Team Work</h3>
                <p className="text-lg">
                  Escrow Myanmar success belongs to our people. We collaborate
                  to solve problems and deliver improved outcomes. Everyone
                  respects one another and contributes to the team, regardless
                  of poisiton or backgorund.
                </p>
              </div>
              <div className="p-4 rounded-lg border-2 border-heading">
                <h3 className="text-3xl mb-2">Innovate</h3>
                <p className="text-lg">
                  At Escrow Myanmar, we value continues improvement and
                  innovation to find solutions to difficult challenges and to
                  delivery expectional quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
