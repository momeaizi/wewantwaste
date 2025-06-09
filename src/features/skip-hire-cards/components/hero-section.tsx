import { Star } from "lucide-react"

interface HeroSectionProps {
  location: {
    postcode: string
    area: string
  }
}

export default function HeroSection({ location }: HeroSectionProps) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Star className="h-4 w-4" />
        <span>Trusted by 10,000+ customers</span>
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
        Choose Your Perfect
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Skip Size</span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Select the ideal skip for your project in {location.area}, {location.postcode}
      </p>
    </div>
  )
}
