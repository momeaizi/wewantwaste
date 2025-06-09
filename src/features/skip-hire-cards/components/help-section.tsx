import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export default function HelpSection() {
  return (
    <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Need Expert Guidance?</h3>
        <p className="text-slate-300 text-lg mb-8">
          Our skip specialists are here to help you choose the perfect size for your project
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Live Chat Support
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call: 0800 123 4567
          </Button>
        </div>
      </div>
    </div>
  )
}
