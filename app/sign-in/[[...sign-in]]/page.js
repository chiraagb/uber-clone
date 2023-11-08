import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        src="/uber-banner.jpg"
        width={2000}
        height={1333}
        className="object-contain h-full w-full opacity-50"
      />
      <div className="absolute top-10 left-10">
        <SignIn />;
      </div>
    </div>
  );
}
