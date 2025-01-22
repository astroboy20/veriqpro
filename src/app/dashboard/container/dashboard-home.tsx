import {
  ArrowLeft,
  ChartLine,
  Code,
  Eye,
  ListFilter,
  Menu,
} from "lucide-react";
import React from "react";

const dashboardItems = [
  {
    item_id: 1,
    icon: <Code className="text-[#292D32]" />,
    type: "generate-code",
    name: "Generate new code",
  },
  {
    item_id: 2,
    icon: <Eye className="text-[#292D32]" />,
    type: "view-code",
    name: "View generated code",
  },
  {
    item_id: 3,
    icon: <ListFilter className="text-[#292D32]" />,
    type: "product-line",
    name: "Product Line",
  },
  {
    item_id: 4,
    icon: <ChartLine className="text-[#292D32]" />,
    type: "analytics",
    name: "Analytics",
  },
];

const DashboardHome = () => {
  return (
    <main className="px-6 py-5">
      <header className="flex justify-between items-center">
        <ArrowLeft className="text-[#292D32]" />
        <h1 className="text-[24px] font-[600]">Dashbaord</h1>
        <Menu className="text-[#292D32]" />
      </header>

      <section className="mt-10 flex flex-col gap-2">
        {dashboardItems.map((item) => (
          <div
            key={item.item_id}
            className="flex flex-col gap-2 border-[0.5px] border-[#0000001A] text-center py-7"
          >
            <span className="m-auto">{item.icon}</span>
            <h3 className="text-[14px] font-[500]">{item.name}</h3>
          </div>
        ))}
      </section>
    </main>
  );
};

export { DashboardHome };
/* Rectangle 26 */

// box-sizing: border-box;

// position: absolute;
// width: 380px;
// height: 100px;
// left: 24px;
// top: 139px;

// background: rgba(255, 255, 255, 0.2);
// border: 0.5px solid rgba(0, 0, 0, 0.1);
// box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.06);
// border-radius: 2px;
