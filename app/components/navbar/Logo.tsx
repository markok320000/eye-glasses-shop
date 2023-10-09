"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="cursor-pointer"
      src="/images/logo.png"
      height="13"
      width="172"
      alt="Logo"
      layout="intrinsic"
    />
  );
};

export default Logo;
