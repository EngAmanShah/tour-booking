"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingHistory } from "@/components/profile/booking-history"
import { ProfileSettings } from "@/components/profile/profile-settings"
import { ReviewsTab } from "@/components/profile/reviews-tab"
import { WishlistTab } from "@/components/profile/wishlist-tab"
import { PaymentMethods } from "@/components/profile/payment-methods"

export function ProfileTabs() {
  return (
    <Tabs defaultValue="bookings" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
        <TabsTrigger value="bookings">Bookings</TabsTrigger>
        <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="payments">Payments</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="bookings">
        <BookingHistory />
      </TabsContent>

      <TabsContent value="wishlist">
        <WishlistTab />
      </TabsContent>

      <TabsContent value="reviews">
        <ReviewsTab />
      </TabsContent>

      <TabsContent value="payments">
        <PaymentMethods />
      </TabsContent>

      <TabsContent value="settings">
        <ProfileSettings />
      </TabsContent>
    </Tabs>
  )
}
