import Link from "next/link";

export default function PodSellerPartnerProgram() {
    return (
      <div className="flex justify-center pt-32 px-6">
        <div className="flex flex-col items-center justify-center max-w-xl gap-6">
          <h5 className="text-center font-semibold text-2xl text-[#080445]">
            Success
          </h5>
          <img
            src="./images/success.png"
            alt="success-img"
            className="w-[74px] h-[74px]"
          />
          <p className="text-center text-[#2C353CB2]">
            We have received your form. Pease look out for a mail from us. We
            will reach out to you soon. PPP is dependent on sales volume. Sell
            more to qualify.
          </p>
          <button className="bg-[#6D60F6] py-3 w-full rounded-lg mt-6">
            <Link
              href={"/POD-seller-partner-program"}
              className="text-white font-semibold">
              Go back to store
            </Link>
          </button>
        </div>
      </div>
    );
}