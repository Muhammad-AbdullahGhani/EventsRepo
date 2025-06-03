import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import FeaturedEvents from "@/components/FeaturedEvents"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedEvents />
    </div>
  )
}
