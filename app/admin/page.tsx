import { ChartAreaInteractive } from "@/components/sideber/chart-area-interactive";
import { DataTable } from "@/components/sideber/data-table";
import { SectionCards } from "@/components/sideber/section-cards";
import data from "./data.json"

export default function AdminIndexPage() {
  return(
    <>
    <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
    </>
  )
}
