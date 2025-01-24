import { Button } from "@/components/ui/button";
import React from "react";
import QRCode from "react-qr-code";

interface StepOneProps {
  randomString: string;
  router: any;
}
const StepTwo = ({ randomString, router }: StepOneProps) => {
  return (
    <>
      <div className="w-[300px] h-[300px] border-[0.5px] border-black border-dashed mx-auto flex justify-between items-center">
        {randomString && (
          <div className="flex justify-center items-center w-full">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={randomString}
              viewBox={`0 0 256 256`}
            />
          </div>
        )}
      </div>

      <p className="text-center text-[20px] font-[400]">{randomString}</p>
      <div className="m-10">
        <Button
          className="h-[55px] w-full py-2 px-6 border border-[#0A2629] rounded-full text-[14px] font-[400]"
          onClick={() => router.push("/dashboard/view-code")}
        >
          View generated code
        </Button>
      </div>

      <div className="flex flex-col gap-1 fixed left-1/2 bottom-10 transform -translate-x-1/2 rounded-[4px] w-[88%] m-auto p-3 border border-[#00000033] text-[13px] bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.06)]">
        <p className="font-[600]">Powered by veriqpro</p>
        <p className="font-[400]">
          Generating secure and unique product codes for your brand.
        </p>
      </div>
    </>
  );
};

export { StepTwo };
