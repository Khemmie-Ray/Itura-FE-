import React from "react";
import PasswordReset from "@/components/dashboard/PasswordReset";

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center w-[100%] lg:h-[100vh] md:h-[100vh] h-auto">
      <div className="lg:w-[706px] md:w-[600px] w-[380px] lg:h-[353px] md:h-[300px] h-[190px] bg-gradient-to-b from-gradientYellow to-gradientRed lg:blur-[315px] md:blur-[280px] blur-[150px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 z-10"></div>
      <PasswordReset />
    </div>
  );
};

export default ResetPassword;
