import Image from "next/image";
import { Button } from "./button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-5 md:px-10">
      <Image
        src="/assets/images/logo.svg"
        width={71.74}
        height={59.69}
        alt=""
      />

      <div className="flex items-center gap-5">
        <Image
          src="/assets/icons/sun.svg"
          className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
          width={24}
          height={24}
          alt=""
        />
        <Image
          src="/assets/icons/telegram.svg"
          className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
          width={24}
          height={24}
          alt=""
        />
        <Image
          src="/assets/icons/x.svg"
          className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
          width={24}
          height={24}
          alt=""
        />

        <Button className="h-min rounded-[10px] bg-white px-5 py-2 font-open-sans text-sm font-bold text-slate-950 hover:bg-white md:px-8 md:py-[14px] md:text-[16px]">
          BUY $SCAT
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
