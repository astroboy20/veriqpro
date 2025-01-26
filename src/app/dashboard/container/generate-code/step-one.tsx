"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import QRCode from "react-qr-code";

interface StepOneProps {
  randomString: string;
  handleGenerateClick: () => void;
  handleNext: () => void;
}
const StepOne = ({
  randomString,
  handleGenerateClick,
  handleNext,
}: StepOneProps) => {
  return (
    <>
      <div className="w-[300px] h-[300px] border-[0.5px] border-black border-dashed mx-auto flex justify-between items-center">
        {randomString ? (
          <div className="flex justify-center items-center w-full">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={randomString}
              viewBox={`0 0 256 256`}
            />
          </div>
        ) : (
          <div className="p-[50px] flex flex-col gap-3 justify-center w-full">
            <p className="text-[14px] text-[#00000066] text-center">
              <span
                onClick={handleGenerateClick}
                className="underline font-[600]"
              >
                click here{" "}
              </span>{" "}
              to generate code
            </p>
            <div className="m-auto">
              <Button
                className="h-[34px] w-fit py-2 px-6 border border-[#0A2629] rounded-full text-[14px] font-[400]"
                variant={"ghost"}
                onClick={handleGenerateClick}
              >
                Generate
              </Button>
            </div>
          </div>
        )}
      </div>
      <p className="text-center text-[20px] font-[400]">{randomString}</p>
      {randomString ? (
        <div className="flex flex-col gap-1 fixed left-1/2 bottom-16 transform -translate-x-1/2 rounded-[4px] w-[88%] m-auto  text-[14px] bg-white">
          <Button
            className="h-[55px] py-2 px-6 border border-[#0A2629] rounded-full text-[14px] font-[400]"
            onClick={handleNext}
          >
            Continue
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-1 fixed bottom-10 rounded-[4px] w-[88%] p-3 border border-[#00000033] text-[14px]">
        <p className="font-[600]">Powered by veriqpro</p>
        <p className="font-[400]">
          Generating secure and unique product codes for your brand.
        </p>
      </div>
      )}
    </>
  );
};

export { StepOne };
