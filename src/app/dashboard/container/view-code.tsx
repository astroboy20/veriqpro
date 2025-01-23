import { ArrowLeft, Menu } from "lucide-react";
import React from "react";

const ViewCode = () => {
  return (
    <main className="px-6 py-5">
      <header className="flex justify-between items-center">
        <ArrowLeft className="text-[#292D32]" />
        <h1 className="text-[24px] font-[600]">View Generate Code</h1>
        <Menu className="text-[#292D32]" />
      </header>

      <section className="mt-10 flex flex-col gap-2">
        {/* {dashboardItems.map((item) => (
          <div
            key={item.item_id}
            onClick={()=>router.push(`/${item.url}`)}
            className="flex flex-col gap-2 border-[0.5px] border-[#0000001A] text-center py-7 rounded-[2px] shadow-[2px_2px_4px_rgba(0,0,0,0.06)]"
          >
            <span className="m-auto">{item.icon}</span>
            <h3 className="text-[14px] font-[500]">{item.name}</h3>
          </div>
        ))} */}
      </section>
    </main>
  );
};

export { ViewCode };
