import React from "react";
import styles from "./Pill.module.css";

interface IPill {
  children: string;
  isSelected?: boolean;
  pillIndex: number;
  onChangeDateRange(pillIndex: number): void;
}

const Pill: React.FC<IPill> = ({
  children,
  isSelected,
  pillIndex,
  onChangeDateRange,
}) => {
  return (
    <button onClick={() => onChangeDateRange(pillIndex)}>
      <div
        className={`${
          styles["pill-wrapper"]
        }  transition-all duration-[2008] border ${
          isSelected ? "bg-[#FFDDCD] border-[#FF5403]" : "border-[#EFF1F6]"
        }`}
      >
        <span
          className={`${
            styles["pill-text"]
          } transition-all duration-[2008]  text-[0.875rem] ${
            isSelected ? "text-[#FF5403]" : "text-[#31373D]"
          }`}
        >
          {children}
        </span>
      </div>
    </button>
  );
};

export default Pill;
