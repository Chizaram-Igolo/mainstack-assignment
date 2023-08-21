import Pill from "@/components/Pill/Pill";
import { useState } from "react";

const pillsData = [
  { text: "1 Day", isSelected: false },
  { text: "3 Days", isSelected: false },
  { text: "7 Days", isSelected: false },
  { text: "30 Day", isSelected: false },
  { text: "All Time", isSelected: true },
  { text: "Custom Date", isSelected: false },
];

export default function PillsBanner() {
  const [pillsData, setPillsData] = useState([
    { text: "1 Day", isSelected: false },
    { text: "3 Days", isSelected: false },
    { text: "7 Days", isSelected: false },
    { text: "30 Day", isSelected: false },
    { text: "All Time", isSelected: true },
    { text: "Custom Date", isSelected: false },
  ]);

  function onChangeDateRange(pillIndex: number) {
    const pillsDataClone = [...pillsData];

    const indexOfSelected = pillsDataClone.findIndex((pill) => pill.isSelected);

    pillsDataClone[pillIndex].isSelected = true;
    pillsDataClone[indexOfSelected].isSelected = false;

    setPillsData(pillsDataClone);

    console.log(pillIndex, indexOfSelected);
  }

  return (
    <div className="flex flex-row h-auto gap-[10px]">
      {pillsData.map((pill, idx) => (
        <Pill
          key={pill.text}
          pillIndex={idx}
          isSelected={pill.isSelected}
          onChangeDateRange={onChangeDateRange}
        >
          {pill.text}
        </Pill>
      ))}
    </div>
  );
}
