import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-12 md:py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Workflow?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using StreamLine to boost their productivity and collaboration.
        </p>
        <Button size="lg" variant="secondary">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

