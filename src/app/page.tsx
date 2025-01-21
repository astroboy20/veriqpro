"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="">
      <div className="h-[400px] bg-[url('/images/scan.svg')] bg-cover bg-no-repeat"></div>
      <div className="text-center p-[10%] flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-[24px] font-[600]">Welcome to Veriqpro</h1>
          <p className="text-[18px] font-[400]">
            Before you proceed, take few minutes to complete this account
            authentication process
          </p>
        </div>

        <div>
          <Button
            onClick={() => router.push("/register")}
            className="w-full rounded-full h-[55px] bg-[#0A2629] text-white hover:bg-[#0A2629] text-[18px] font-[400]"
          >
            Proceed
          </Button>
        </div>
      </div>
    </main>
  );
}
