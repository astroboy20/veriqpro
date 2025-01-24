"use client";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Menu, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import StepOne from "./step-one";
import { StepTwo } from "./step-two";

const ViewCode = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

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

  return (
    <main className="px-6 py-5">
      <header className="flex justify-between items-center">
        <ArrowLeft className="text-[#292D32]" onClick={handlePrev} />
        <h1 className="text-[24px] font-[600]">View Generate Code</h1>
        <Menu className="text-[#292D32]" />
      </header>

      <section className="mt-10 flex flex-col gap-2">
        {step === 1 && <StepOne handleNext={handleNext} />}
        {step === 2 && <StepTwo />}
      </section>
    </main>
  );
};

export { ViewCode };