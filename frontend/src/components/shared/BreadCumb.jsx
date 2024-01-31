import Link from "next/link";

const BreadCumb = ({ page = "" }) => {
  return (
    <section
      className="pt-[200px] pb-8"
      style={{ backgroundImage: `url(/images/breadcumb-banner.jpg)` }}
    >
      <div className="container-custom flex flex-col items-center">
        <h2 className="text-[28px]">{page}</h2>
        <ul className="flex items-center gap-2 text-lg mt-7">
          <li className="transition-all hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li>-</li>
          <li className="text-primary">{page}</li>
        </ul>
      </div>
    </section>
  );
};

export default BreadCumb;
