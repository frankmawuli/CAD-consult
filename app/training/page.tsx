import { HardHat } from "lucide-react"

export default function TrainingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <HardHat className="w-20 h-20 text-[#ffc425] mb-6" strokeWidth={1.5} />
      <h1 className="text-3xl lg:text-4xl font-bold text-[#0e3874] mb-3">Coming Soon</h1>
      <p className="text-gray-500 text-lg max-w-md">
        We&apos;re building something great. The Training Centre page will be available soon.
      </p>
    </div>
  )
}
