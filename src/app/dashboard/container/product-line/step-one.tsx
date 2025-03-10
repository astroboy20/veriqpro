import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

interface StepOneProps {
  handleNext: () => void;
}
const StepOne = ({ handleNext }: StepOneProps) => {
  return (
    <>
      <div className="relative">
        <span className="absolute left-5 top-1/2 -translate-y-1/2">
          <Search className="text-[#292D3280] h-5 w-5" />
        </span>
        <Input
          className="border border-[#0000001A] rounded-[80px] h-10 text-[14px] text-[#00000080] pl-12"
          placeholder="Search by product name"
        />
      </div>
      <div className="flex flex-col gap-[18px] mt-8">
        <div className="flex flex-col gap-7">
          <div className="m-auto">
            <Image
              src={"/images/not-found.png"}
              width={280}
              height={280}
              alt="not-found"
            />
          </div>

          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-[24px] font-[400]"> Oopss!</h3>
            <p className="text-[18px] font-[400]">
              {" "}
              You haven’t added your product line
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <Button
            onClick={handleNext}
            className="w-full rounded-full h-[55px] bg-[#0A2629] text-white hover:bg-[#0A2629] text-[18px] font-[400]"
          >
            Proceed
          </Button>
        </div>
      </div>
    </>
  );
};

export { StepOne };
