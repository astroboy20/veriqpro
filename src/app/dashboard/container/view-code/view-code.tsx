"use client";

import { ArrowLeft, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {StepOne} from "./step-one";
import { StepTwo } from "./step-two";

const products = [
  {
    product_id: 1,
    name: "Johnnie Walker Blue Label",
    volume: "750ml",
    code_generated: 50,
    src: "/images/walker.svg",
  },
  {
    product_id: 2,
    name: "Ciroc Vodka",
    volume: "750ml",
    code_generated: 50,
    src: "/images/vodka.svg",
  },
  {
    product_id: 3,
    name: "Malta Guinness",
    volume: "750ml",
    code_generated: 50,
    src: "/images/malt.svg",
  },
];

const ViewCode = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [productNames] = useState(products.map((product) => product.name)); 

  const handleNext = (productName: string) => {
    setSelectedProduct(productName); 
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
        <h1 className="text-[24px] font-[600]">View Generated Code</h1>
        <Menu className="text-[#292D32]" />
      </header>

      <section className="mt-10 flex flex-col gap-2">
        {step === 1 && <StepOne products={products} handleNext={handleNext} />}
        {step === 2 && (
          <StepTwo
            productNames={productNames}
            defaultProduct={selectedProduct}
          />
        )}
      </section>
    </main>
  );
};

export { ViewCode };
