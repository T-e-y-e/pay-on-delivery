import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] flex-col items-center justify-between">
      <div className="px-6 md:p-24 mt-6 md:mt-0">
        <div className="flex items-center justify-between">
          <h6 className="font-semibold text-xl text-[#080445]">Login</h6>
          <p className="text-sm">
            <span className="text-[#2C353CB2]">Don't have an account?</span>{" "}
            <span className="text-[#6D60F6]">Sign Up</span>
          </p>
        </div>
        <div class="max-w-lg mx-auto mt-12">
          <form class="w-full">
            <div className="w-full">
              <label
                for="email"
                class="block mb-2 text-base font-medium text-[#080445]">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                class="bg-white border border-[#E1E1E1] placeholder-[#6C7277] text-[#080445] font-medium text-sm rounded-lg w-full p-3"
                placeholder="Enter your email address"
              />
            </div>
            <div className="w-full mt-6">
              <label
                for="password"
                class="block mb-2 text-base font-medium text-[#080445]">
                Enter your password
              </label>
              <input
                type="password"
                id="password"
                aria-describedby="helper-text-explanation"
                class="bg-white border border-[#E1E1E1] placeholder-[#6C7277] text-[#080445] font-medium text-sm rounded-lg w-full p-3"
                placeholder="Enter your password"
              />
            </div>
            <button className="bg-[#6D60F6] py-3 w-full rounded-lg mt-6">
              <Link href={"/POD-seller-partner-program"} className="text-white font-semibold">Log In</Link>
            </button>
          </form>
          <div className="my-10 flex items-center">
            <div className="w-full h-[1px] bg-[#E1E1E1]"></div>
            <div className="block px-3 text-sm font-medium text-[#6C7277] flex-shrink-0">
              or login with
            </div>
            <div className="w-full h-[1px] bg-[#E1E1E1]"></div>
          </div>
          <div>
            <button className="py-3 border border-[#6D60F6] flex items-center justify-center gap-3 w-full rounded-lg">
              <img
                src="./icons/google.png"
                alt="google icon"
                className="w-[20px] h-[20px]"
              />
              <span className="text-[#080445] font-semibold">
                Continue with google
              </span>
            </button>
            <button className="mt-3 py-3 border border-[#6D60F6] flex items-center justify-center gap-3 w-full rounded-lg">
              <img
                src="./icons/facebook.png"
                alt="facebook icon"
                className="w-[10px] h-[19px]"
              />
              <span className="text-[#080445] font-semibold">
                Continue with facebook
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full h-full bg-[url('/images/bg-desktop.png')] bg-no-repeat bg-cover"></div>
      <div className="md:hidden w-full bg-[url('/images/bg-mobile.png')] bg-no-repeat bg-cover h-[300px] mt-20"></div>
    </div>
  );
}
