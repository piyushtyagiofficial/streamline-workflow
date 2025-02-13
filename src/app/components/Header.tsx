import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          StreamLine
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-primary">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-primary">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-primary">
            Pricing
          </Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

