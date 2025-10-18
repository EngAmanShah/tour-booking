import { AboutHeader } from "@/components/about-header"
import { AboutStory } from "@/components/about-story"
import { AboutTeam } from "@/components/about-team"
import { AboutValues } from "@/components/about-values"
import { AboutStats } from "@/components/about-stats"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHeader />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
      <Footer />
    </div>
  )
}
