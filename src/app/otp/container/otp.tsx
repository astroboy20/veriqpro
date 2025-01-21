"use client";
import { ArrowLeft, ArrowUp } from "lucide-react";
import React from "react";
import { InputContainer } from "../../components/input-container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const OTP = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-[400px] bg-[url('/images/scan.svg')] bg-cover bg-no-repeat relative">
        <div
          className="absolute top-[12%] left-[5%] "
          onClick={() => router.push("/register")}
        >
          <ArrowLeft />
        </div>
      </div>
      <div className="px-[5%] py-[10%]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[24px] font-[600] text-center">
            Welcome to Veriqpro
          </h1>
          <form className="flex flex-col gap-6">
            <InputContainer
              label="Enter code"
              value={""}
              variant="text"
              name={""}
              placeholder={"123456"}
            />

            <div>
              <Button
                onClick={() => router.push("/success")}
                className="w-full rounded-full h-[55px] bg-[#0A2629] text-white hover:bg-[#0A2629] text-[18px] font-[400]"
              >
               Signup
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { OTP };
