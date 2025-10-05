"use client"

import { Sidebar, MobileSidebar } from "@/components/jobs/sidebar"
import { Topbar } from "@/components/jobs/topbar"
import { PaymentMethodCard } from "@/components/payments/payment-method-card"
import { PaymentForm } from "@/components/payments/payment-form"

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  )
}


export default function NewPaymentMethodClient() {
  return (
    <main className="min-h-screen w-full pl-64 pt-16 bg-background">
      {/* Topbar (fixed header) */}
      <Topbar />

      <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8">
        {/* Sidebar (desktop) */}
        <Sidebar activeCategory="payments" />

        {/* Main content */}
        <div className="flex-1">
          {/* Mobile sidebar toggle */}
          <MobileSidebar />

          <section className="ml-10 mt-3 md:mt-0">
            {/* Page header */}
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <ArrowLeft className="h-7 w-7 md:h-9 md:w-9 text-foreground/80" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold">Job in Progress</h1>
            </div>

            {/* Two-column layout */}
            <section className="grid gap-6 md:grid-cols-2 md:gap-8">
              {/* Left: Current Payment Methods */}
              <div>
                <div className=" px-4 py-3 md:px-6 md:py-4">
                  <h2 className="text-2xl font-extrabold md:text-xl -mb-5">
                    Current Payment Method
                  </h2>
                </div>

                <div
                  role="list"
                  className="space-y-3 px-4 py-4 md:space-y-4 md:px-6 md:py-6"
                >
                  <PaymentMethodCard
                    logoAlt="Visa"
                    logoQuery="visa"
                    name="Ronald Timothy"
                  />
                  <PaymentMethodCard
                    logoAlt="PayPal"
                    logoQuery="paypal"
                    name="Ronald Timothy"
                    logoSize="w-6 h-auto"
                  />
                  <PaymentMethodCard
                    logoAlt="Mastercard"
                    logoQuery="mastercard"
                    name="Ronald Timothy"
                  />
                </div>
              </div>

              {/* Right: Add Payment Method */}
              <PaymentForm />
            </section>
          </section>
        </div>
      </div>
    </main>
  )
}
