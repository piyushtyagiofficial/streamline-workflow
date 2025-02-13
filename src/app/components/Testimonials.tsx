import Image from "next/image"

const testimonials = [
  {
    quote: "StreamLine has revolutionized our team's workflow. It's intuitive, powerful, and a joy to use.",
    author: "Jane Doe",
    role: "CEO, TechCorp",
  },
  {
    quote: "Since implementing StreamLine, our productivity has increased by 30%. It's a game-changer!",
    author: "John Smith",
    role: "Project Manager, InnovateCo",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={`/placeholder.svg?height=40&width=40`}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

