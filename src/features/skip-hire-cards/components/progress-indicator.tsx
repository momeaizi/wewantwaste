import { MapPin, Trash2, TruckIcon, Shield, Calendar, CreditCard } from "lucide-react"

interface ProgressIndicatorProps {
  currentStep: number
}

export default function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const steps = [
    {
      icon: MapPin,
      label: "Postcode",
      status: currentStep > 1 ? "completed" : currentStep === 1 ? "current" : "pending",
    },
    {
      icon: Trash2,
      label: "Waste Type",
      status: currentStep > 2 ? "completed" : currentStep === 2 ? "current" : "pending",
    },
    {
      icon: TruckIcon,
      label: "Select Skip",
      status: currentStep > 3 ? "completed" : currentStep === 3 ? "current" : "pending",
    },
    {
      icon: Shield,
      label: "Permit Check",
      status: currentStep > 4 ? "completed" : currentStep === 4 ? "current" : "pending",
    },
    {
      icon: Calendar,
      label: "Choose Date",
      status: currentStep > 5 ? "completed" : currentStep === 5 ? "current" : "pending",
    },
    {
      icon: CreditCard,
      label: "Payment",
      status: currentStep > 6 ? "completed" : currentStep === 6 ? "current" : "pending",
    },
  ]

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Desktop Progress */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                    step.status === "completed"
                      ? "bg-emerald-500"
                      : step.status === "current"
                        ? "bg-blue-600 ring-4 ring-blue-100"
                        : "bg-slate-300"
                  } aspect-square`}
                >
                  <step.icon
                    className={`h-6 w-6 ${
                      step.status === "completed" || step.status === "current" ? "text-white" : "text-slate-500"
                    }`}
                  />
                </div>
                <div>
                  <div
                    className={`font-semibold ${
                      step.status === "completed" || step.status === "current" ? "text-slate-900" : "text-slate-500"
                    }`}
                  >
                    {step.label}
                  </div>
                  <div
                    className={`text-sm ${
                      step.status === "completed"
                        ? "text-emerald-600"
                        : step.status === "current"
                          ? "text-blue-600"
                          : "text-slate-400"
                    }`}
                  >
                    {step.status === "completed" ? "Completed" : step.status === "current" ? "Current Step" : "Pending"}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 ${step.status === "completed" ? "bg-emerald-500" : "bg-slate-300"}`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Progress */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold text-slate-900">
              Step {currentStep} of {steps.length}
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-slate-600">{Math.round((currentStep / steps.length) * 100)}%</span>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900">{steps[currentStep - 1]?.label}</h2>
            <p className="text-slate-600">
              {currentStep === 3 ? "Choose your skip size" : `Complete step ${currentStep}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
