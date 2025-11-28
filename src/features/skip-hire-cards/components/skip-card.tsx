import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Ruler, Package, Award } from "lucide-react"
import type { SkipWithDetails } from "../types/skip"
import { calculateTotalPrice } from "../utils/skip-helpers"
import skipImg from "@/assets/skip.webp";


interface SkipCardProps {
  skip: SkipWithDetails
  isSelected: boolean
  onSelect: (skipId: number) => void
}

export default function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 cursor-pointer ${
        isSelected
          ? "ring-2 ring-blue-500 shadow-2xl scale-105 bg-white"
          : "hover:shadow-xl hover:-translate-y-1 bg-white border border-slate-200"
      }`}
      onClick={() => onSelect(skip.id)}
    >
      {skip.popular && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
            <Award className="h-3 w-3" />
            <span>MOST POPULAR</span>
          </div>
        </div>
      )}

      <div className="relative overflow-hidden">
        <img
          src={skip.imageUrl}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = skipImg
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-blue-600 text-white px-3 py-1 text-sm font-semibold shadow-lg">{skip.size} Yards</Badge>
        </div>
        {!skip.allowed_on_road && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-amber-500 text-white px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 shadow-lg">
              <AlertTriangle className="h-4 w-4" />
              <span>Requires Private Land Placement</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{skip.size} Yard Skip</h3>
            <div className="flex items-center space-x-2 text-slate-600">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{skip.hire_period_days} day hire period</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">{calculateTotalPrice(skip)}</div>
            <div className="text-sm text-slate-500">inc. VAT</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Ruler className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm font-medium">{skip.dimensions}</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-700">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Package className="h-4 w-4 text-green-600" />
            </div>
            <span className="text-sm font-medium">Holds {skip.capacity}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Perfect For:</div>
          <div className="flex flex-wrap gap-2">
            {skip.bestFor.slice(0, 2).map((use, i) => (
              <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                {use}
              </span>
            ))}
            {skip.bestFor.length > 2 && (
              <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs">
                +{skip.bestFor.length - 2} more
              </span>
            )}
          </div>
        </div>

        <Button
          className={`w-full py-4 text-base font-semibold transition-all duration-200 ${
            isSelected
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          {isSelected ? (
            <>
              <CheckCircle className="mr-2 h-5 w-5" />
              Selected
            </>
          ) : (
            <>
              Select This Skip
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}
