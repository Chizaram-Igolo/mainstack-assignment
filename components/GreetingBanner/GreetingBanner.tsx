import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IGreetingBanner {
  name: string;
}

const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];

const GreetingBanner: React.FC<IGreetingBanner> = ({ name }) => {
  const [welcomeText, setWelcomeText] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setWelcomeText(welcomeTypes[0]);
    else if (hour < 18) setWelcomeText(welcomeTypes[1]);
    else setWelcomeText(welcomeTypes[2]);
  }, []);

  return (
    <div className="flex flex-row pt-8 pb-6 justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h2 className="py-2 text-[1.5rem] leading-6 tracking-[0.015rem] heading-semibold">
            {welcomeText}, {name}
          </h2>
          <div className="pt-[0.3rem] px-1 text-[1.5rem]">⛅️</div>
        </div>

        <p className="py-1 textLightFont text-[0.875rem] leading-[22px] text-[#31373D]">
          Check out your dashboard summary
        </p>
      </div>

      <div className="flex flex-col justify-center text-[0.875rem] leading-[22px]">
        <Link href="/">
          <p className="text-[#FF5403]">View analytics</p>
        </Link>
      </div>
    </div>
  );
};

export default GreetingBanner;
