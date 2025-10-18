"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Plus, Edit, Trash2, Shield } from "lucide-react"

const mockPaymentMethods = [
  {
    id: 1,
    type: "visa",
    last4: "4242",
    expiryMonth: 12,
    expiryYear: 2025,
    isDefault: true,
    holderName: "John Doe",
  },
  {
    id: 2,
    type: "mastercard",
    last4: "8888",
    expiryMonth: 8,
    expiryYear: 2026,
    isDefault: false,
    holderName: "John Doe",
  },
]

const getCardIcon = (type: string) => {
  switch (type) {
    case "visa":
      return (
        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">
          VISA
        </div>
      )
    case "mastercard":
      return (
        <div className="w-8 h-5 bg-red-600 rounded text-white text-xs font-bold flex items-center justify-center">
          MC
        </div>
      )
    default:
      return <CreditCard className="h-5 w-5 text-muted-foreground" />
  }
}

export function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods)

  const handleSetDefault = (id: number) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
  }

  const handleDelete = (id: number) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-poppins font-bold">Payment Methods</h2>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Payment Method
        </Button>
      </div>

      {/* Security Notice */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900">Your payment information is secure</h3>
              <p className="text-sm text-blue-700 mt-1">
                We use industry-standard encryption to protect your payment details. Your card information is never
                stored on our servers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods List */}
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <Card key={method.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {getCardIcon(method.type)}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">•••• •••• •••• {method.last4}</span>
                      {method.isDefault && <Badge className="bg-primary text-white">Default</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {method.holderName} • Expires {method.expiryMonth.toString().padStart(2, "0")}/{method.expiryYear}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!method.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSetDefault(method.id)}
                      className="bg-transparent"
                    >
                      Set as Default
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(method.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {paymentMethods.length === 0 && (
        <div className="text-center py-12">
          <CreditCard className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-poppins font-bold mb-4">No payment methods</h3>
          <p className="text-muted-foreground mb-8">Add a payment method to make booking tours quick and easy.</p>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Payment Method
          </Button>
        </div>
      )}

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Santorini Sunset & Wine Tour</p>
                <p className="text-sm text-muted-foreground">Jan 15, 2024 • •••• 4242</p>
              </div>
              <span className="font-medium">$598.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Tokyo Food & Culture Walking Tour</p>
                <p className="text-sm text-muted-foreground">Mar 1, 2024 • •••• 8888</p>
              </div>
              <span className="font-medium">$159.00</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full bg-transparent">
              View All Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
