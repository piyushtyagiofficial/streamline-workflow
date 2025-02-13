import { Zap, Users, BarChart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our optimized platform ensures quick load times and seamless performance.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together effortlessly with real-time updates and intuitive sharing features.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive reporting and analytics tools.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

