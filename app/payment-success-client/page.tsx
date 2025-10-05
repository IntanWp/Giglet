"use client"

import Image from "next/image"
import FeedbackForm from "@/components/feedback-overlay"

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-[#2D81B5] flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-20 items-center w-full max-w-[1300px]">
        {/* LEFT SIDE - Feedback Form */}
        <div className="flex justify-end mr-3">
          <FeedbackForm role="client" />
        </div>

        {/* RIGHT SIDE - Image + Text */}
        <div className="flex flex-col items-center text-center ">
          <Image
            src="/images/payment.png"
            alt="People waving after payment success"
            width={1200}
            height={1200}
            className="object-contain mb-4 max-w-full"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Payment Successful
          </h1>
          <p className="text-white/90 text-2xl font-bold md:text-2.5xl">
            Thank you for using our platform!
          </p>
        </div>
      </div>
    </main>
  )
}
