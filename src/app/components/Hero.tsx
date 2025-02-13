import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Streamline Your Workflow</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Boost productivity and simplify collaboration with our all-in-one project management solution.
        </p>
        <Button size="lg">Start Your Free Trial</Button>
      </div>
    </section>
  )
}

