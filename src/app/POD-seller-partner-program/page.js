import Image from "next/image";
import Link from "next/link";

export default function PodSellerPartnerProgram() {
  return (
    <div className="px-6 md:p-24 gap-24 grid grid-cols-1 md:grid-cols-2 min-h-[80vh] flex-col items-center justify-between">
      <div className="mt-6 md:mt-0">
        <div className="">
          <h6 className="font-semibold text-2xl text-[#080445]">
            Welcome shop thanau
          </h6>
          <p className="text-sm mt-3">
            <span className="text-[#2C353CB2]">
              Sign up for the POD seller partner program.{" "}
            </span>
          </p>
        </div>
        <div class="max-w-xl mx-auto mt-12">
          <form class="w-full">
            <div className="w-full">
              <label
                for="password"
                class="block mb-2 text-base font-medium text-[#080445]">
                Where do you sell
              </label>
              <select
                id="media"
                class="bg-white border border-[#E1E1E1] placeholder-[#6C7277] text-[#6C7277] font-medium text-sm rounded-lg block w-full pr-8 p-3">
                <option selected className="text-[#6C7277]">
                  select
                </option>
                <option value="IG">Instagram</option>
                <option value="FB">Facebook</option>
                <option value="X">X</option>
                <option value="SN">Snapchat</option>
              </select>
            </div>
            <div className="w-full mt-6">
              <label
                for="instagram-handle"
                class="block mb-2 text-base font-medium text-[#080445]">
                Instagram handle
              </label>
              <input
                type="text"
                id="instagram-handle"
                aria-describedby="helper-text-explanation"
                class="bg-white border border-[#E1E1E1] placeholder-[#6C7277] text-[#080445] font-medium text-sm rounded-lg w-full p-3"
                placeholder="Type your business instagram handle"
              />
            </div>
            <div className="w-full mt-6">
              <label
                for="followers"
                class="block mb-2 text-base font-medium text-[#080445]">
                Number of followers
              </label>
              <input
                type="text"
                id="followers"
                aria-describedby="helper-text-explanation"
                class="bg-white border border-[#E1E1E1] placeholder-[#6C7277] text-[#080445] font-medium text-sm rounded-lg w-full p-3"
                placeholder="Type your business instagram handle"
              />
            </div>
            <div className="w-full mt-6">
              <label
                for="followers"
                class="block mb-2 text-base font-medium text-[#080445]">
                Number of transactions
              </label>
              <div className="flex items-center gap-6">
                <input
                  type="text"
                  id="followers"
                  aria-describedby="helper-text-explanation"
                  class="bg-white border border-[#E1E1E1] placeholder-[#6C7277] text-[#080445] font-medium text-sm rounded-lg w-full p-3"
                  placeholder="Enter transaction count"
                />
                <select
                  id="duration"
                  class="bg-white border border-[#E1E1E1] placeholder-[#6C7277] text-[#6C7277] font-medium text-sm rounded-lg block w-full pr-8 p-3">
                  <option value="per day">Per day</option>
                  <option value="per week">Per week</option>
                  <option value="per month">Per month</option>
                  <option value="per year">Per year</option>
                </select>
              </div>
            </div>
            <button className="bg-[#6D60F6] py-3 w-full rounded-lg mt-10">
              <Link href={"/success"} className="text-white font-semibold">
                Sign up to as a seller partner
              </Link>
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="bg-[#221D58] mb-16 md:mb-0 text-white rounded-[30px] overflow-hidden relative">
          <div className="bg-[#FDAE09] h-[55px] w-[55px] rounded-full absolute top-[-34px] right-3 hidden md:block"></div>
          <div className="md:flex my-6 px-10 hidden">
            <span className="block bg-[#FDAE09] w-[8px] h-[8px] rounded-full"></span>
          </div>
          <div className="md:px-12 px-6 py-8">
            <h2 className="text-xl">POD seller partner program</h2>
            <p className="text-sm text-[#FFFFFFCC] mt-3">
              Get accurate and updated live rates of over 38+ currencies,perform
              instant exchange, forward rate or quick currency conversion.
            </p>
            <div className="mt-12">
              <div className="flex items-center gap-4">
                <img
                  src="./icons/icon-right.png"
                  alt="icon-right"
                  className="w-[10px] h-[6.66px]"
                />
                <p className="text-sm text-[#FFFFFFCC]">Revenue sharing</p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src="./icons/icon-right.png"
                  alt="icon-right"
                  className="w-[10px] h-[6.66px]"
                />
                <p className="text-sm text-[#FFFFFFCC]">
                  Sell more, make more money
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src="./icons/icon-right.png"
                  alt="icon-right"
                  className="w-[10px] h-[6.66px]"
                />
                <p className="text-sm text-[#FFFFFFCC]">invite only</p>
              </div>
            </div>
            <div className="flex justify-end md:justify-start">
              <button className="rounded-lg border border-white py-2 px-2.5 mt-8">
                <span className="text-sm font-semibold">Learn more</span>
              </button>
            </div>
          </div>
          <div className="md:flex justify-end mb-10 px-10 hidden">
            <span className="block bg-[#AAD7E1] w-[10px] h-[10px] rounded-full"></span>
          </div>
          <div>
            <img
              src="./images/bg-desktop2.png"
              alt="bg-desktop"
              className="w-full h-[300px] object-cover hidden md:block"
            />
            <img
              src="./images/bg-mobile2.png"
              alt="bg-desktop"
              className="w-full h-[100px] object-cover md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
