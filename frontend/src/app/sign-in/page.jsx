import Heading from "@/components/shared/Heading";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

const SignInPage = () => {
  return (
    <main className="pt-[75px] min-h-[100vh]">
      <section className="section-container">
        <div className="container-custom">
          <Heading title="Welcome Back" />

          <form
            action=""
            className="w-full md:w-[700px] mt-10 mx-auto flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="Email">Email</Label>
              <Input type="email" id="Email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="Password">Password</Label>
              <Input type="password" id="Password" placeholder="Password" />
            </div>
            <div>
              <Button type="submit">Sign in</Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
