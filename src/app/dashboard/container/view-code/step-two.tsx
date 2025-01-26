import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { MoreIcon } from "@/assets";

interface StepTwoProps {
  productNames: string[];
  defaultProduct: string;
}

const productGenerated = [
  {
    id: 1,
    code_name: "abcd12",
    generated_at: " 10/10/2024 at 16:17",
    src: "/images/qr.png",
  },
  {
    id: 2,
    code_name: "abcd12",
    generated_at: " 10/10/2024 at 16:17",
    src: "/images/qr.png",
  },
  {
    id: 3,
    code_name: "abcd12",
    generated_at: " 10/10/2024 at 16:17",
    src: "/images/qr.png",
  },
  {
    id: 4,
    code_name: "abcd12",
    generated_at: " 10/10/2024 at 16:17",
    src: "/images/qr.png",
  },
  {
    id: 5,
    code_name: "abcd12",
    generated_at: " 10/10/2024 at 16:17",
    src: "/images/qr.png",
  },
  {
    id: 6,
    code_name: "abcd12",
    generated_at: " 10/10/2024 at 16:17",
    src: "/images/qr.png",
  },
];

const StepTwo = ({ productNames, defaultProduct }: StepTwoProps) => {
  const [selectedProduct, setSelectedProduct] =
    useState<string>(defaultProduct);
  const [orderedProductNames, setOrderedProductNames] = useState<string[]>([]);

  useEffect(() => {
    const reordered = [
      defaultProduct,
      ...productNames.filter((name) => name !== defaultProduct),
    ];
    setOrderedProductNames(reordered);
  }, [defaultProduct, productNames]);

  const handleSelect = (value: string) => {
    setSelectedProduct(value);
  };

  return (
    <>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-[180px] border-none focus:ring-0 focus:ring-transparent">
          <SelectValue placeholder={selectedProduct || "Product Name"} />
        </SelectTrigger>
        <SelectContent>
          {orderedProductNames.map((name, index) => (
            <SelectItem value={name} key={index}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex flex-col gap-2 mt-8">
        {productGenerated.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center border-[0.5px] border-[#0000001A] rounded-[2px] px-3 py-2 shadow-[2px_2px_4px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center gap-4">
              <Image
                src={product.src}
                width={40}
                height={40}
                alt={product.code_name}
              />
              <div className="flex flex-col gap-[1px] text-[12px] font-[400]">
                <p>{product.code_name}</p>
                <p className="font-[500]">generated {product.generated_at}</p>
              </div>
            </div>
            <span>
              <MoreIcon />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export { StepTwo };
