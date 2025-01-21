"use client"
import { ArrowLeft, ArrowUp } from "lucide-react";
import React from "react";
import { InputContainer } from "../../components/input-container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();
  return (
    <div>
      <div className="w-full h-[400px] bg-[url('/images/scan.svg')] bg-cover bg-no-repeat relative">
        <div className="absolute top-[12%] left-[5%] " onClick={()=>router.push("/")}>
          <ArrowLeft />
        </div>
      </div>
      <div className="px-[5%] py-[10%]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[24px] font-[600] text-center">Welcome to Veriqpro</h1>
          <form className="flex flex-col gap-6">
            <InputContainer
              label="Holder's name"
              value={""}
              variant="text"
              name={""}
              placeholder={"Patricia Wilson"}
            />
            <InputContainer
              label="Holder's email address"
              value={""}
              variant="email"
              name={""}
              placeholder={"Patriciawilson28@gmail.com"}
            />
            <InputContainer
              label="Password"
              value={""}
              variant="password"
              name={""}
              placeholder={"****************"}
            />
            <InputContainer
              label="Company's name"
              value={""}
              variant="text"
              name={""}
              placeholder={"Diageo"}
            />
            <InputContainer
              label="Company's email address"
              value={""}
              variant="email"
              name={""}
              placeholder={"Diageobrands@yahoo.com"}
            />
            <InputContainer
              label="Address"
              value={""}
              variant="text"
              name={""}
              placeholder={"Southampton road"}
            />
            <InputContainer
              label="City"
              value={""}
              variant="text"
              name={""}
              placeholder={"Lagos"}
            />
            <InputContainer
              label="Country"
              value={""}
              variant="select"
              name={""}
              placeholder={"Country"}
            />
            <InputContainer
              label="Industry Type"
              value={""}
              variant="text"
              name={""}
              placeholder={"alcohol beverage company"}
            />
            <InputContainer
              label="Company size"
              value={""}
              variant="select"
              name={""}
              placeholder={"above 3000"}
            />{" "}
            <InputContainer
              label="Year established"
              value={""}
              variant="select"
              name={""}
              placeholder={"2000"}
            />
            <InputContainer
              label="Website"
              value={""}
              variant="text"
              name={""}
              placeholder={"diageo.com"}
            />
            <InputContainer
              label="Company description"
              value={""}
              variant="text-area"
              name={""}
              placeholder={
                "Diageo plc is a British multinational alcoholic beverage company, with its headquarters in London, England. It operates from 132 sites around the world. It is a major distributor of Scotch whisky and other spirits."
              }
            />
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-[500]">Company logo</span>
              <label
                htmlFor="upload"
                className="flex items-center gap-3  rounded-[4px] w-fit p-3 border border-[#00000033] text-[14px] font-[500]"
              >
                <input type="hidden" id="upload" />
                <ArrowUp /> Upload logo
              </label>
              <p className="text-[12px] font-[400]">
                by confirming registration, you agree to our terms and
                conditions
              </p>
            </div>
            <div>
              <Button
                onClick={() => router.push("/otp")}
                className="w-full rounded-full h-[55px] bg-[#0A2629] text-white hover:bg-[#0A2629] text-[18px] font-[400]"
              >
                Confirm Registration
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export  {Register};
