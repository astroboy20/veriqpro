"use client";
import { ArrowLeft, ArrowUp } from "lucide-react";
import React from "react";
import { InputContainer } from "../../components/input-container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col h-[100dvh] justify-center items-center">
        <div className="flex flex-col gap-5 p-6 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-[36px] font-[600] text-center">
              Welcome to Veriqpro
            </h1>
            <p className="text-[18px] font-[400]">
              Authenticate your product and ensure its authenticity with our
              advanced VQ code system.
            </p>
          </div>
          <div>
            <Button
              onClick={() => router.push("/dashboard")}
              className="w-full rounded-full h-[55px] bg-[#0A2629] text-white hover:bg-[#0A2629] text-[18px] font-[400]"
            >
              Proceed
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1 fixed bottom-10 rounded-[4px] w-fit p-3 border border-[#00000033] text-[14px]">
          <p className="font-[600]">Powered by veriqpro</p>
          <p className="font-[400]">
            Generating secure and unique product codes for your brand.
          </p>
        </div>
      </div>
    </div>
  );


};

export { Success };
