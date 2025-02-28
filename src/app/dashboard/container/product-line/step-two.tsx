import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const StepTwo = () => {
  const [productLine, setProductLine] = useState("");
  const [productType, setProductType] = useState("");
  const [productImage, setProductImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? URL.createObjectURL(e.target.files[0]) : null;
    setSelectedFile(file);
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("productData") || "{}");
    if (savedData.productLine) setProductLine(savedData.productLine);
    if (savedData.productType) setProductType(savedData.productType);
    if (savedData.productImage) setProductImage(savedData.productImage);
  }, []);

  const handleSave = () => {
    const productData = {
      selectedFile,
      productLine,
      productType,
      productImage,
    };

    if(typeof window !=="undefined"){
      localStorage.setItem("product-data", JSON.stringify(productData))
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="w-[380px] h-[380px] border border-[#0A2629] rounded-[4px] flex justify-center items-center">
        {selectedFile ? (
          <div>
            <Image
              src={selectedFile}
              width={380}
              height={380}
              alt="uploaded image"
              className="w-[380px] h-[380px] object-contain"
            />
          </div>
        ) : (
          <div>
            <label htmlFor="upload-image" className="text-[14px] font-[300]">
              Add or browse product image
            </label>
            <input
              type="file"
              hidden
              id="upload-image"
              onChange={handleFileChange}
            />
            
          </div>
        )}
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <label className="text-[18px] font-[400]">Product Line </label>
          <div>
            <Input
              value={productLine}
              onChange={(e) => setProductLine(e.target.value)}
              className="border-none border-black focus:ring-0 focus:ring-transparent focus-visible:ring-transparent"
            />
            <div className="h-[0.6px] border bg-black border-black"></div>
          </div>
        </div>
        <div>
          <label className="text-[18px] font-[400]">Product Type </label>
          <div>
            <Input
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="border-none border-black focus:ring-0 focus:ring-transparent focus-visible:ring-transparent"
            />
            <div className="h-[0.6px] border bg-black border-black"></div>
          </div>
        </div>
        <div>
          <label className="text-[18px] font-[400]">Product Image </label>
          <div>
            <Input
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              className="border-none border-black focus:ring-0 focus:ring-transparent focus-visible:ring-transparent"
            />
            <div className="h-[0.6px] border bg-black border-black"></div>
          </div>
        </div>
        <div className="w-full">
          <Dialog>
            <DialogTrigger className="w-full">
              <Button
                onClick={handleSave}
                className="w-full rounded-full h-[55px] bg-[#0A2629] text-white hover:bg-[#0A2629] text-[18px] font-[400]"
              >
                Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
                <div className="fle flex-col gap-5 items-center justify-center">
                  <Image
                    src="/images/cheers.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <p>
                    Product has been successfully added to your product line
                  </p>
                  {/* <Button></Button> */}
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export { StepTwo };
