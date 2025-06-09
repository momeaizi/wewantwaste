interface LoadingStateProps {
  location: {
    area: string
  }
}

export default function LoadingState({ location }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Loading Available Skips</h3>
      <p className="text-slate-600">Finding the best options for {location.area}...</p>
    </div>
  )
}
