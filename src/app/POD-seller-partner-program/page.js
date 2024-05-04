"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PodSellerPartnerProgram() {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

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
        {!readMore ? (
          <div className="bg-[#221D58] max-h-[90vh] mb-16 md:mb-0 text-white rounded-[30px] overflow-hidden relative">
            <div className="bg-[#FDAE09] h-[55px] w-[55px] rounded-full absolute top-[-34px] right-3 hidden md:block"></div>
            <div className="md:flex my-6 px-10 hidden">
              <span className="block bg-[#FDAE09] w-[8px] h-[8px] rounded-full"></span>
            </div>
            <div className="md:px-12 px-6 py-8">
              <h2 className="text-xl">POD seller partner program</h2>
              <p className="text-sm text-[#FFFFFFCC] mt-3">
                Get accurate and updated live rates of over 38+
                currencies,perform instant exchange, forward rate or quick
                currency conversion.
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
                <button
                  className="rounded-lg border border-white py-2 px-2.5 mt-8"
                  onClick={handleReadMore}>
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
        ) : (
          <div className="bg-[#221D58] max-h-[90vh] mb-16 md:mb-0 text-white rounded-[30px] overflow-hidden relative">
            <div className="bg-[#FDAE09] h-[55px] w-[55px] rounded-full absolute top-[-24px] right-[-10px] hidden md:block"></div>
            <div className="md:px-12 px-6 py-8 max-h-[70vh] overflow-y-scroll">
              <style jsx>{`
                ::-webkit-scrollbar {
                  width: 6px;
                }

                ::-webkit-scrollbar-track {
                  background: transparent;
                  border-radius: 30px;
                }

                ::-webkit-scrollbar-thumb {
                  background: #6d60f6;
                  border-radius: 30px;
                }

                ::-webkit-scrollbar-button {
                  display: none;
                }
              `}</style>
              <p className="text-sm text-[#FFFFFFCC] mt-3">
                Welcome to the POD Partnership Program, where your success is
                our priority! Joining our program opens up a world of
                opportunities to take your business to new heights. Here's what
                you need to know:
              </p>
              <div className="mt-8">
                <p className="text-base text-[#FFFFFFCC] mb-6">
                  What is the POD Partnership Program?
                </p>
                <p className="text-sm text-[#FFFFFFCC] mt-3">
                  The POD Partnership Program is a unique opportunity for
                  sellers like you to earn additional income by referring
                  businesses to join POD. As they sign up and start selling
                  through POD, you'll earn a percentage of the revenue
                  generated.
                </p>
              </div>
              <div className="mt-12">
                <p className="text-base text-[#FFFFFFCC] mt-6 mb-6">
                  Why join the POD Partnership Program?
                </p>
                <div className="flex items-center gap-4">
                  <span className="block w-1 h-1 bg-[#FFFFFFCC] rounded-full"></span>
                  <p className="text-sm text-[#FFFFFFCC]">
                    Boost Your Earnings: Earn extra income simply by sharing
                    your unique referral link with other businesses.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="block w-1 h-1 bg-[#FFFFFFCC] rounded-full"></span>
                  <p className="text-sm text-[#FFFFFFCC]">
                    Empowerment: Take control of your financial future and
                    unlock new revenue streams.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="block w-1 h-1 bg-[#FFFFFFCC] rounded-full"></span>
                  <p className="text-sm text-[#FFFFFFCC]">
                    Support: Receive dedicated support from the POD team to help
                    you succeed in the program.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="block w-1 h-1 bg-[#FFFFFFCC] rounded-full"></span>
                  <p className="text-sm text-[#FFFFFFCC]">
                    Flexibility: Work at your own pace and fit the program into
                    your existing schedule.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-base text-[#FFFFFFCC] mt-6 mb-6">
                  How Does it Work?
                </p>
                <div className="flex items-center gap-4">
                  <span className="block w-1 h-1 bg-[#FFFFFFCC] rounded-full"></span>
                  <p className="text-sm text-[#FFFFFFCC]">
                    Sign up for the POD Partnership Program.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="block w-1 h-1 bg-[#FFFFFFCC] rounded-full"></span>
                  <p className="text-sm text-[#FFFFFFCC]">
                    Receive your unique referral link.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="block w-1 h-1 bg-[#FFFFFFCC] rounded-full"></span>
                  <p className="text-sm text-[#FFFFFFCC]">
                    Share your link with other businesses.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="block w-1 h-1 bg-[#FFFFFFCC] rounded-full"></span>
                  <p className="text-sm text-[#FFFFFFCC]">
                    Earn a percentage of the revenue generated by the businesses
                    you refer.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-[#FFFFFFCC] mt-3">
                  Ready to Get Started? Joining the POD Partnership Program is
                  quick and easy. Simply sign up, start sharing your referral
                  link, and watch your earnings grow! Sign Up Now and Start
                  Earning!
                </p>
              </div>
            </div>

            <div className="mb-10 px-10">
              <div className="flex justify-end">
                <button
                  className="rounded-lg border border-white py-2 px-2.5 mt-8"
                  onClick={handleReadMore}>
                  <span className="text-sm font-semibold">Okay, Got it</span>
                </button>
              </div>
              <span className="block bg-[#AAD7E1] w-[10px] h-[10px] rounded-full"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
