import { useState } from "react"
import { DEFAULT_LOCATION } from "./services/skip-api"
import { useSkipData } from "./hooks/use-skip-data"

// Components
import ProgressIndicator from "./components/progress-indicator"
import HeroSection from "./components/hero-section"
import FilterSection from "./components/filter-section"
import SkipCard from "./components/skip-card"
import LoadingState from "./components/loading-state"
import ErrorState from "./components/error-state"
import SelectionSummary from "./components/selection-summary"
import HelpSection from "./components/help-section"

export default function SkipSelectionPage() {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const location = DEFAULT_LOCATION;

  const { skips, loading, error, refetch } = useSkipData(location)

  const filteredSkips =
    filter === "all"
      ? skips
      : filter === "road"
        ? skips.filter((skip) => skip.allowed_on_road)
        : skips.filter((skip) => !skip.allowed_on_road)

  const selectedSkipData = skips.find((skip) => skip.id === selectedSkip)

  const handleSkipSelect = (skipId: number) => {
    setSelectedSkip(skipId)
  }

  const handleContinue = () => {
    // Navigate to next step
    console.log("Continuing to permit check with skip:", selectedSkipData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <ProgressIndicator currentStep={3} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <HeroSection location={location} />

        <FilterSection skips={skips} filter={filter} onFilterChange={setFilter} loading={loading} onRefresh={refetch} />

        {loading && <LoadingState location={location} />}

        {error && <ErrorState error={error} onRetry={refetch} />}

        {!loading && !error && filteredSkips.length === 0 && skips.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No skips match your filter</h3>
            <p className="text-slate-600 mb-4">
              There are no skips matching your current filter. Please try a different filter.
            </p>
            <button onClick={() => setFilter("all")} className="text-blue-600 hover:underline font-medium">
              View All Skips
            </button>
          </div>
        )}

        {!loading && !error && filteredSkips.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkips.map((skip) => (
              <SkipCard key={skip.id} skip={skip} isSelected={selectedSkip === skip.id} onSelect={handleSkipSelect} />
            ))}
          </div>
        )}

        {!loading && !error && selectedSkipData && (
          <SelectionSummary selectedSkip={selectedSkipData} onContinue={handleContinue} />
        )}

        <HelpSection />
      </div>
    </div>
  )
}
