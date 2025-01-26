import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { MoreIcon } from "@/assets/index";

interface Product {
  product_id: number;
  name: string;
  volume: string;
  code_generated: number;
  src: string;
}

interface StepOneProps {
  products: Product[];
  handleNext: (productName: string) => void;
}

const StepOne = ({ products, handleNext }: StepOneProps) => {
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
        {products.map((product) => (
          <div
            key={product.product_id}
            className="flex justify-between items-center border-[0.5px] border-[#0000001A] rounded-[2px] px-[18px] py-3 shadow-[2px_2px_4px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center gap-4">
              <Image
                src={product.src}
                width={56}
                height={56}
                alt={product.name}
              />
              <div className="flex flex-col gap-[6px] text-[12px] font-[400]">
                <p>{product.name}</p>
                <p>{product.volume}</p>
                <p className="font-[500]">
                  Code generated: {product.code_generated}
                </p>
              </div>
            </div>
            <span onClick={() => handleNext(product.name)}>
              <MoreIcon />
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 fixed bottom-10 rounded-[4px] w-[88%] p-3 border border-[#00000033] text-[14px]">
        <p className="font-[600]">Powered by veriqpro</p>
        <p className="font-[400]">
          Generating secure and unique product codes for your brand.
        </p>
      </div>
    </>
  );
};

export { StepOne };
