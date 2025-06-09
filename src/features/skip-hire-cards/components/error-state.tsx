import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface ErrorStateProps {
  error: string
  onRetry: () => void
}

export default function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-8 flex items-start space-x-4 mb-8">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
        <AlertCircle className="h-6 w-6 text-red-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-red-900 mb-2">Unable to Load Skips</h3>
        <p className="text-red-700 mb-4">{error}</p>
        <Button onClick={onRetry} className="bg-red-600 hover:bg-red-700 text-white">
          Try Again
        </Button>
      </div>
    </div>
  )
}
