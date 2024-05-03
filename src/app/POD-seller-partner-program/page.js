import Image from "next/image";
import Link from "next/link";

export default function PodSellerPartnerProgram() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] flex-col items-center justify-between">
      <div className="px-6 md:p-24 mt-6 md:mt-0">
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
          <div></div>
      {/* <div className="hidden md:block w-full h-full bg-[url('/images/bg-desktop.png')] bg-no-repeat bg-cover"></div>
      <div className="md:hidden w-full bg-[url('/images/bg-mobile.png')] bg-no-repeat bg-cover h-[300px] mt-20"></div> */}
    </div>
  );
}
