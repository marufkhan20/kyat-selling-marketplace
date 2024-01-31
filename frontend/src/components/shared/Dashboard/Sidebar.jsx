"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoBag, IoChatbubblesSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();

  let sidebarMenus = [];

  const role = "seller";

  if (role === "seller") {
    sidebarMenus = [
      {
        id: 1,
        name: "Dashboard",
        Icon: MdDashboard,
        href: "/dashboard",
      },
      {
        id: 2,
        name: "Orders",
        Icon: IoBag,
        href: "/dashboard/orders",
      },
      {
        id: 3,
        name: "Transactions",
        Icon: AiOutlineTransaction,
        href: "/dashboard/transactions",
      },
      {
        id: 4,
        name: "Chat",
        Icon: IoChatbubblesSharp,
        href: "/dashboard/chats",
      },
      {
        id: 5,
        name: "My Profile",
        Icon: FaUser,
        href: "/dashboard/my-profile",
      },
    ];
  } else {
  }
  return (
    <div className="lg:!min-w-[300px] h-fit p-7 rounded-lg bg-[#D4E6FF]">
      <div className="w-[140px] mx-auto p-2 rounded-md border border-white">
        <img className="rounded-md" src="/images/sellers/6.jpg" alt="user" />
      </div>

      <div className="flex flex-col items-center text-center mt-7 gap-1">
        <h3 className="text-lg">Randall Henderson</h3>
        <p className="text-[#3c3c3c]">IT Contractor</p>
      </div>

      <div className="mt-6">
        <ul className="text-lg">
          {sidebarMenus?.map((menu) => {
            const { id, href, Icon, name } = menu || {};
            return (
              <li key={id}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 py-[6px] px-2 rounded-md ${
                    href === pathname
                      ? "bg-white text-primary"
                      : "transition-all hover:bg-white hover:text-primary"
                  }`}
                >
                  <Icon className="text-primary" />
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
