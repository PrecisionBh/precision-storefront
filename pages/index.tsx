import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import CategoryGrid from "@/components/CategoryGrid"
import WholesaleBanner from "@/components/WholesaleBanner"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      <Hero />

      <LayoutContainer>
        <CategoryGrid />
      </LayoutContainer>

      <LayoutContainer>
        <WholesaleBanner />
      </LayoutContainer>

      <Footer />

    </main>
  )
}