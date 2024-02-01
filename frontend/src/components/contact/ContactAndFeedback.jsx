import Heading from "../shared/Heading";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";

const ContactAndFeedback = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <Heading title="Contact Us" />
        <h4 className="text-lg mt-2 text-center">
          {"We're"} here to help We like feedback
        </h4>

        <div className="flex flex-col justify-center items-center mt-10">
          <h4 className="text-xl">What do you need help with?</h4>

          <ul className="mt-5 flex flex-col gap-4">
            <li className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                className="w-5 h-5 rounded-full border-2 border-primary"
                id="1"
                name="whatNeed"
              />
              <label htmlFor="1">
                I require help setting up a transition or other support
              </label>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                className="w-5 h-5 rounded-full border-2 border-primary"
                id="2"
                name="whatNeed"
              />
              <label htmlFor="2">
                {"I'd"} like to leave some feedback and improvement
              </label>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                className="w-5 h-5 rounded-full border-2 border-primary"
                id="3"
                name="whatNeed"
              />
              <label htmlFor="3">{"I'd"} like to make a complaint</label>
            </li>
          </ul>

          <form
            action=""
            className="w-full md:w-[700px] mt-10 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="Email">Email</Label>
              <Input type="email" id="Email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="Phone Number">Phone Number</Label>
              <Input type="text" id="Phone Number" placeholder="Phone Number" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="Transaction Number">Transaction Number</Label>
              <Input
                type="text"
                id="Transaction Number"
                placeholder="Transaction Number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="Feedback">Feedback</Label>
              <textarea
                className="bg-[#F0F6FE] px-4 py-3 rounded-lg outline-none w-full block h-[120px]"
                id="Feedback"
                placeholder="Please Provide Detailed Feedback On Your Issue"
              />
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactAndFeedback;
