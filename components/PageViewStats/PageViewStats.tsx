import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function titleCase(input: string) {
  let sentence = input.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");
}

const PageViewStats: React.FC<IPageViewStats> = ({
  heading,
  statItems,
  colors,
}) => {
  const [sources, setSources] = useState<string[]>([]);
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    let sourcesArr = statItems.map((item) => `${titleCase(item.source)}`);
    let countsArr = statItems.map((item) => item.count);
    setSources(sourcesArr);
    setCounts(countsArr);
  }, [heading, statItems]);

  return (
    <div className="w-[50%] border border-[#EFF1F6] mt-8 pb-8 mb-12 rounded-md">
      <div className="flex flex-row justify-between px-6 py-4">
        <h3 className="py-2 text-[1.125rem] leading-6 tracking-[0.015rem] heading-semibold">
          {heading}
        </h3>
        <div className="flex flex-col justify-center text-[0.875rem] leading-[22px]">
          <Link href="/">
            <p className="text-[#FF5403]">View full reports</p>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <ul className="mt-3 pl-6">
            {statItems.map((item) => (
              <div className="flex flex-row" key={item.source}>
                <li className="text-1rem leading-[200%] flex flex-row gap-3">
                  <span className="pt-[0.6rem] rounded-md">{item.icon}</span>

                  <span>{titleCase(item.source)}</span>

                  <span className="textRegularFont">{item.percent}%</span>

                  <span
                    className={`w-3 h-3 mt-[0.65rem] rounded-full`}
                    style={{ backgroundColor: item.color }}
                  ></span>
                </li>
              </div>
            ))}
          </ul>

          {typeof window !== "undefined" && (
            <div className="w-[48%]">
              <ReactApexChart
                options={{
                  chart: {
                    type: "donut",
                  },
                  legend: {
                    show: false,
                    position: "left",
                    fontSize: "16px",
                    fontFamily: "SohneLight",
                  },
                  labels: sources,

                  colors: colors,

                  dataLabels: { enabled: false },
                }}
                series={counts}
                type="donut"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageViewStats;
