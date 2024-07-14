import { Button } from "@/components/ui/button";
import ClientSidePieChart from "@/components/ui/client-side-pie-chart";
import TokenomicsCard from "@/components/ui/tokenomics-card";
import Image from "next/image";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#003354]">
      <header className="h-full bg-header bg-cover bg-no-repeat">
        <nav className="flex items-center justify-between px-10 py-5">
          <Image
            src="/assets/images/logo.svg"
            width={71.74}
            height={59.69}
            alt=""
          />

          <div className="flex items-center gap-5">
            <Image src="/assets/icons/sun.svg" width={24} height={24} alt="" />
            <Image
              src="/assets/icons/telegram.svg"
              width={24}
              height={24}
              alt=""
            />
            <Image src="/assets/icons/x.svg" width={24} height={24} alt="" />

            <Button className="h-min rounded-[10px] bg-white px-8 py-[14px] font-open-sans text-[16px] text-slate-950 hover:bg-white">
              BUY $SCAT
            </Button>
          </div>
        </nav>

        <div className="-mt-20 h-[1000px] bg-kite bg-cover bg-top bg-no-repeat px-20 pt-40">
          {/* text */}
          <div>
            <p className="font-open-sans text-[27.31px] font-bold uppercase text-white">
              Welcome to the Simon’s Cat official Token
            </p>
            <h1 className="mt-6 font-cat-comic text-[104.39px] leading-[109.61px] text-white">
              One Cat, Billions <br /> of Owners’
            </h1>
          </div>
        </div>
      </header>
      <div className="mt-20 flex justify-between px-20">
        <div className="h-[400px] w-[450px] bg-clouds bg-contain bg-no-repeat pl-20 pr-10 pt-24">
          <div>
            <h4 className="font-cat-comic text-[35.09px]">Floki</h4>
            <p className="font-mulish text-[26.32px] font-medium leading-[27.63px]">
              We need a small description here
            </p>
          </div>
        </div>
        <div className="mt-32 h-[400px] w-[400px] bg-clouds bg-contain bg-no-repeat pl-20 pr-10 pt-24">
          <div>
            <h4 className="font-cat-comic text-[35.09px]">Floki</h4>
            <p className="font-mulish text-[26.32px] font-medium leading-[27.63px]">
              We need a small description here
            </p>
          </div>
        </div>
      </div>
      {/* wall */}
      <div className="relative flex justify-center">
        <div className="absolute top-[189.46px] z-20 w-[80%] px-24">
          <p className="mt-5 text-center font-cat-comic text-[46.42px] leading-[48.75px] text-white">
            Tokenomics
          </p>
          <div className="grid grid-cols-3 items-start">
            <div className="space-y-8">
              <TokenomicsCard
                textColor="text-[#A55AF1]"
                color="fill-[#A55AF1]"
                title="Airdrop"
                content="100% TGE"
                value={5}
              />
              <TokenomicsCard
                textColor="text-[#6C61F1]"
                color="fill-[#6C61F1]"
                title="Contributors"
                content="50% TGE | 2 Months Linear Vesting"
                value={9.2}
              />
              <TokenomicsCard
                textColor="text-[#FFB462]"
                color="fill-[#FFB462]"
                title="Public"
                content="100% TGE"
                value={17}
              />
            </div>
            <div>
              <div className="h-[42vh]">
                <ClientSidePieChart />
              </div>
              <TokenomicsCard
                textColor="text-[#F15A5F]"
                color="fill-[#F15A5F]"
                title="Liquidity / MM / CEX"
                content="Strategic Unlock 100% TGE"
                value={30}
              />
            </div>

            <div className="space-y-8">
              <TokenomicsCard
                textColor="text-[#9CD489]"
                color="fill-[#9CD489]"
                title="Ecosystem"
                content="36 Months Linear Vesting"
                value={16.75}
              />
              <TokenomicsCard
                textColor="text-[#FB9731]"
                color="fill-[#FB9731]"
                title="Treasury"
                content="36 Months Linear Vesting"
                value={9.2}
              />
              <TokenomicsCard
                textColor="text-[#F9D284]"
                color="fill-[#F9D284]"
                title="Public"
                content="100% TGE"
                value={17}
              />
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/wall.svg"
          width={1447.49}
          height={963.51}
          className="w-full"
          alt=""
        />

        <Image
          src="/assets/images/left-grass.svg"
          width={616.25}
          height={411.93}
          className="absolute -bottom-12 left-0 z-30 w-[54%]"
          alt=""
        />
        <Image
          src="/assets/images/right-grass.svg"
          width={550.12}
          height={413.21}
          className="absolute -bottom-14 right-0 w-[40%]"
          alt=""
        />
      </div>
      {/* road */}
      <div className="relative -mt-7">
        <Image
          src="/assets/images/road.svg"
          width={1332.59}
          height={875}
          className="w-full"
          alt=""
        />
        {/* phase 1 */}
        <div className="absolute left-28 top-10">
          <p className="text-[20px] font-extrabold text-[#00AEC7]">Phase 1</p>
          <ul className="mt-2.5 space-y-3">
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#00AEC7]"
                size={8}
              />
              <p className="-mt-2">
                Launch initial community engagement campaigns on social media
                and forums.
              </p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#00AEC7]"
                size={8}
              />
              <p className="-mt-2">Pre-sale on Token-Fi</p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#00AEC7]"
                size={8}
              />
              <p className="-mt-2">
                Airdrop to Floki holders and core BNB communities
              </p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#00AEC7]"
                size={8}
              />
              <p className="-mt-2">BNB chain integration</p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#00AEC7]"
                size={8}
              />
              <p className="-mt-2">Dex listings</p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#00AEC7]"
                size={8}
              />
              <p className="-mt-2">
                Socialfi Campaign on Apex Launch{" "}
                <br className="hidden md:block" /> including DAO campaign
              </p>
            </li>
          </ul>
        </div>
        {/* phase 2 */}
        <div className="absolute right-7 top-[20%]">
          <p className="text-[20px] font-extrabold text-[#F15A5F]">Phase 2</p>
          <ul className="mt-2.5 space-y-3">
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#F15A5F]"
                size={8}
              />
              <p className="-mt-2">CEX listings</p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#F15A5F]"
                size={8}
              />
              <p className="-mt-2">
                Official Simon Cat foundation launch (charitable events)
              </p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#F15A5F]"
                size={8}
              />
              <p className="-mt-2">Expansion and unity of the BNB ecosystem</p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#F15A5F]"
                size={8}
              />
              <p className="-mt-2">
                Co-marketing event with BNB chain and core BNB protocols
              </p>
            </li>
            <li className="flex w-[350px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#F15A5F]"
                size={8}
              />
              <p className="-mt-2">Expanding Simon’s Cat to global audience</p>
            </li>
          </ul>
        </div>
        {/* phase 3 */}
        <div className="absolute left-[30%] top-[50%]">
          <p className="text-[20px] font-extrabold text-[#51D2CA]">Phase 3</p>
          <ul className="mt-2.5 space-y-3">
            <li className="flex w-[700px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#51D2CA]"
                size={8}
              />
              <p className="-mt-2">
                Simon’s cat quests: Launch the Simon’s cat platform for
                community engagement.
              </p>
            </li>
            <li className="flex w-[700px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#51D2CA]"
                size={8}
              />
              <p className="-mt-2">Simon’s Cat crypto focused web series</p>
            </li>
            <li className="flex w-[700px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#51D2CA]"
                size={8}
              />
              <p className="-mt-2">
                Integration of Web3 into Simon’s Cat app game with 18M+
                downloads
              </p>
            </li>
            <li className="flex w-[700px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#51D2CA]"
                size={8}
              />
              <p className="-mt-2">
                Onboard the next 10 million web2 holders with off-chain events
                and content
              </p>
            </li>
            <li className="flex w-[700px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#51D2CA]"
                size={8}
              />
              <p className="-mt-2">
                Simon’s cat private community passes (burn tokens to get access
                to exclusive closed community discord)
              </p>
            </li>
            <li className="flex w-[700px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#51D2CA]"
                size={8}
              />
              <p className="-mt-2">
                Feature Enhancements: Continuously improve existing features
                based on community feedback.
              </p>
            </li>
            <li className="flex w-[700px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#51D2CA]"
                size={8}
              />
              <p className="-mt-2">
                Sustainability Measures: Implement measures to ensure the
                long-term sustainability and growth of the project.
              </p>
            </li>
            <li className="flex w-[700px] items-start gap-[7px] font-mulish text-[16px] leading-[20.08px] text-white">
              <FaCircle
                className="min-h-[8px] min-w-[8px] text-[#51D2CA]"
                size={8}
              />
              <p className="-mt-2">Expanding CEX listings</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-40 -mt-24">
        <div className="px-10">
          <h1 className="mt-6 font-cat-comic text-[100px] leading-[109.61px] text-white">
            SAY NO TO <br className="hidden md:block" /> EMPTY BOWLS
          </h1>
          <p className="font-open-sans text-[27.31px] font-bold uppercase text-white">
            Every trade feeds hungry <br /> cats around the world
          </p>
        </div>
        <Image
          src="/assets/images/lake.svg"
          width={1332.59}
          height={500}
          className="-mt-[350px] w-full"
          alt=""
        />
      </div>
      <div className="relative z-50 -mt-[200px] w-full border-t border-t-[#ECE9E24D] px-20">
        <div className="flex items-center justify-between border-b border-b-slate-950 py-6">
          <Image
            src="/assets/images/logo-dark.svg"
            width={71.74}
            height={59.69}
            alt=""
          />

          <div className="item-center font-poppins flex gap-5 text-[16px]">
            <Link href="" className="">
              <p className="hover:underline"> Terms & Conditions</p>
            </Link>
            <Link href="" className="">
              <p className="hover:underline">Privacy Policy</p>
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
              <Image
                src="/assets/icons/telegram-dark.svg"
                width={24}
                height={24}
                alt=""
              />
            </span>
            <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
              <Image
                src="/assets/icons/x-dark.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="pb-10 pt-6">
          <p className="text-center font-open-sans text-[16px] text-slate-700">
            $SCAT ©2024 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
