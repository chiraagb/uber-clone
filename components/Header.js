import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
  const headerMenu = [
    {
      id: 1,
      name: "Ride",
      icon: "/taxi.png",
    },
    {
      id: 2,
      name: "Package",
      icon: "/box.png",
    },
  ];
  return (
    <div className="flex items-center justify-between p-5 pb-3 border-b-[4px] bg-slate-100">
      <div className="flex gap-12">
        <Image src="/uber.png" width={100} height={100} alt="uber-logo" />
        <div className="flex gap-4 items-center">
          {headerMenu.map((item) => (
            <div className="flex gap-2 items-center">
              <Image src={item.icon} width={17} height={17} />
              <h2 className="text-[14px] font-medium text-black">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <UserButton />
    </div>
  );
}
