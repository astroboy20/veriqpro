import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StepTwoProps {
  productNames: string[];
  defaultProduct: string;
}

const StepTwo = ({ productNames, defaultProduct }: StepTwoProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(defaultProduct);
  const [orderedProductNames, setOrderedProductNames] = useState<string[]>([]);

  useEffect(() => {
    // Reorder the product names to place the selected product at the top
    const reordered = [
      defaultProduct,
      ...productNames.filter((name) => name !== defaultProduct),
    ];
    setOrderedProductNames(reordered);
  }, [defaultProduct, productNames]);

  const handleSelect = (value: string) => {
    setSelectedProduct(value); // Update the selected product
  };

  return (
    <>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-[180px] border-none focus:ring-0 focus:ring-transparent">
          <SelectValue
            placeholder={selectedProduct || "Product Name"}
          />
        </SelectTrigger>
        <SelectContent>
          {orderedProductNames.map((name, index) => (
            <SelectItem value={name} key={index}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export { StepTwo };
