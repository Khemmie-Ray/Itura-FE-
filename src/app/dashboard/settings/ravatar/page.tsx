import React from "react";
import Image from "next/image";

const Ravatar = () => {
  return (
    <main className="w-[90%] lg:w-[80%] md:w-[80%] mx-auto mb-8">
      <div className="w-[100%] lg:w-[40%] md:w-[40%] mx-auto">
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604688/ravatar-logo_gs3g6n.svg"
          alt="ravatar  user image"
          width={70}
          height={70}
          className="w-[100%] object-cover h-[70px] object-center"
        />
        <p className="text-center font-[500] mt-2">Choose your Ravatar</p>
      </div>
      <div
        className={`flex justify-between items-center border bg-white/10 border-white/20 py-4 lg:px-10 md:px-8 px-4 rounded-2xl mb-10 mt-16 flex-wrap`}
      >
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604687/profile2_psbfwx.svg"
          alt="ravatar  user image"
          width={100}
          height={100}
          className="mb-3 lg:w-[24%] md:w-[24%] w-[45%]"
        />
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604686/profile1_bomasy.svg"
          alt="ravatar  user image"
          width={100}
          height={100}
          className="mb-3 lg:w-[24%] md:w-[24%] w-[45%]"
        />
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604687/profile3_t7upvy.svg"
          alt="ravatar  user image"
          width={100}
          height={100}
          className="mb-3 lg:w-[24%] md:w-[24%] w-[45%]"
        />
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604687/profile2_psbfwx.svg"
          alt="ravatar  user image"
          width={100}
          height={100}
          className="mb-3 lg:w-[24%] md:w-[24%] w-[45%]"
        />
      </div>
    </main>
  );
};

export default Ravatar;
