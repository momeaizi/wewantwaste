import { Button } from "@/components/ui/button"
import { CheckCircle, Zap } from "lucide-react"
import type { SkipWithDetails } from "../types/skip"
import { calculateTotalPrice } from "../utils/skip-helpers"

interface SelectionSummaryProps {
  selectedSkip: SkipWithDetails
  onContinue: () => void
}

export default function SelectionSummary({ selectedSkip, onContinue }: SelectionSummaryProps) {
  return (
    <div className="mt-16 text-center">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 max-w-md mx-auto mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Skip Selected!</h3>
        <p className="text-slate-600 mb-4">
          {selectedSkip.size} Yard Skip - {calculateTotalPrice(selectedSkip)}
        </p>
        <div className="text-sm text-slate-500">
          {selectedSkip.hire_period_days} day hire period in {selectedSkip.area}
        </div>
      </div>

      <Button
        size="lg"
        onClick={onContinue}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
      >
        Continue to Permit Check
        <Zap className="ml-3 h-6 w-6" />
      </Button>
    </div>
  )
}
