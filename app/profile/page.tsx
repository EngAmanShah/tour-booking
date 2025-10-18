import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileTabs } from "@/components/profile/profile-tabs"
import { Footer } from "@/components/footer"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader />
      <div className="container px-4 py-8">
        <ProfileTabs />
      </div>
      <Footer />
    </div>
  )
}
