import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Info, RefreshCw } from "lucide-react"
import type { SkipWithDetails } from "../types/skip"

interface FilterSectionProps {
  skips: SkipWithDetails[]
  filter: string
  onFilterChange: (filter: string) => void
  loading: boolean
  onRefresh: () => void
}

export default function FilterSection({ skips, filter, onFilterChange, loading, onRefresh }: FilterSectionProps) {
  return (
    <div className="mb-10">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <Tabs value={filter} className="w-full lg:w-auto" onValueChange={onFilterChange}>
            <TabsList className="bg-slate-100 p-1 rounded-xl">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg px-6 py-2"
              >
                All Skips ({skips.length})
              </TabsTrigger>
              <TabsTrigger
                value="road"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg px-6 py-2"
              >
                Road Placement ({skips.filter((s) => s.allowed_on_road).length})
              </TabsTrigger>
              <TabsTrigger
                value="offroad"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg px-6 py-2"
              >
                Off-Road Only ({skips.filter((s) => !s.allowed_on_road).length})
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={onRefresh}
              disabled={loading}
              className="border-slate-300 hover:bg-slate-50"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <div className="flex items-center space-x-2 text-slate-600">
              <Info className="h-4 w-4" />
              <span className="text-sm">
                Need help? <button className="text-blue-600 hover:underline font-medium">Get guidance</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
