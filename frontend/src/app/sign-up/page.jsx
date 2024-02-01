import Heading from "@/components/shared/Heading";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

const SignUpPage = () => {
  return (
    <main className="pt-[75px]">
      <section className="section-container">
        <div className="container-custom">
          <Heading title="Signup & Get Started Now" />

          <form
            action=""
            className="w-full md:w-[700px] mt-10 mx-auto flex flex-col gap-6"
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
              <Label htmlFor="Password">Password</Label>
              <Input type="password" id="Password" placeholder="Password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="Confirm Password">Confirm Password</Label>
              <Input
                type="password"
                id="Confirm Password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="Phone Number">Phone Number</Label>
              <Input type="text" id="Phone Number" placeholder="Phone Number" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="US Phone Number">US Phone Number</Label>
              <Input
                type="text"
                id="US Phone Number"
                placeholder="US Phone Number"
              />
            </div>
            <div>
              <Button type="submit">Sign up</Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
