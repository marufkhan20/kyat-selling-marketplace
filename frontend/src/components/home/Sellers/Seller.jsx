import Link from "next/link";

const Seller = () => {
  return (
    <div className="p-4 rounded-lg bg-white border flex items-center justify-center sm:justify-between gap-5 flex-wrap">
      <div className="flex items-center justify-center sm:justify-normal flex-wrap gap-10">
        <div className="p-5 rounded-lg bg-white seller-img">
          <img className="w-[100px]" src="/images/sellers/1.jpg" alt="seller" />
        </div>
        <div className="text-center sm:text-left">
          <div className="flex text-center sm:text-left items-center flex-wrap gap-1">
            <h3 className="text-lg">Senior Web Designer , Developer </h3>
            <span className="text-sm font-medium text-green-500">
              / 1 days ago
            </span>
          </div>
          <p className="mt-1">
            1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
          </p>
          <Link className="mt-5 inline-block text-primary" href="#">
            https://thewebmax.com
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center sm:justify-normal items-end">
        <button className="px-3 py-1 inline-block rounded-md bg-green-500 text-white">
          New
        </button>
        <h4>
          $2500 <span>/ Month</span>
        </h4>
        <Link href="#" className="font-medium text-primary">
          Contact Seller
        </Link>
      </div>
    </div>
  );
};

export default Seller;
