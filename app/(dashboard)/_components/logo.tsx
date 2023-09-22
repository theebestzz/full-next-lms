import React from "react";

import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="Fek Lms"
        title="Fek Lms"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Logo;
