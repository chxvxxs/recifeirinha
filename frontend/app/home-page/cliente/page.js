import Header from "@/components/header-cliente"
import HeroSection from "@/components/hero-section"
import VendedoresSection from "@/components/vendedores-section"
import TestimonialsSection from "@/components/testimonials-section"
import HomeCards from "@/components/homecards"
import Footer from "@/components/footer"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <VendedoresSection />
        <TestimonialsSection />
        <HomeCards />
      </main>
      <Footer />
    </div>
  )
}
