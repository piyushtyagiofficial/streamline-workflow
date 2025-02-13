import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["5 team members", "10 projects", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited team members", "Unlimited projects", "Advanced analytics", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom features", "Dedicated account manager", "On-premise deployment", "24/7 phone support"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">
                {plan.price}
                <span className="text-sm font-normal text-gray-500">/month</span>
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

