"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";

const GenerateCode = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [randomString, setRandomString] = useState("");
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    if (step === 1) {
      router.push("/dashboard");
    } else {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const generateRandomString = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  const handleGenerateClick = () => {
    const newString = generateRandomString(7);
    setRandomString(newString);
  };
  return (
    <main className="px-6 py-5">
      <header className="flex justify-between items-center">
        <ArrowLeft className="text-[#292D32]" onClick={handlePrev} />
        <h1 className="text-[24px] font-[600]">
          {step === 1 ? "Generate Code" : "Product Code"}
        </h1>
        <Menu className="text-[#292D32]" />
      </header>

      <section className="mt-10 flex flex-col gap-2">
        {step === 1 && (
          <StepOne
            randomString={randomString}
            handleGenerateClick={handleGenerateClick}
            handleNext={handleNext}
          />
        )}
        {step === 2 && <StepTwo randomString={randomString} router={router} />}
      </section>
    </main>
  );
};

export { GenerateCode };
