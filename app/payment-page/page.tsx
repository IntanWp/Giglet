"use client"

import React, { useState } from "react";
import { Sidebar } from "@/components/jobs/sidebar"
import { Topbar } from "@/components/jobs/topbar"
import { MobileSidebar } from "@/components/jobs/sidebar"
import { ArrowLeft } from "lucide-react";

type PaymentMethod = {
  id: string
  bank: string
  last4: string
}

export default function PayPage() {
  const [rating, setRating] = useState<number>(4)
  const [selectedMethod, setSelectedMethod] = useState<string>("abc-1")
  const [comment, setComment] = useState<string>("")

  const methods: PaymentMethod[] = [
    { id: "abc-1", bank: "ABC Bank", last4: "4321" },
    { id: "abc-2", bank: "ABC Bank", last4: "4321" },
  ]

  const handlePay = () => {
    console.log("[v0] Paying worker with:", {
      rating,
      selectedMethod,
      comment,
      fee: 3000,
    })
    alert("Payment submitted (demo)")
  }

    const handleChatClick = () => {
      window.location.href = "/chat";
    };

  return (
    <div>
      <main className="min-h-screen w-full pl-64 pt-16 bg-background">
        <Topbar />
        <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8">
          <Sidebar />
          <div className="flex-1">
            <MobileSidebar />
            <section className="ml-10 mt-3 md:mt-0">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <ArrowLeft className="h-7 w-7 md:h-9 md:w-9 text-foreground/80" />
                <h1 onClick={handleChatClick} className="text-xl md:text-2xl lg:text-3xl font-extrabold">Receive</h1>
              </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Job Summary */}
          <section className="left-col">
            <h2 className="section-title">Job Summary</h2>
            <div className="job-summary-card">
              <img
                className="job-hero"
                // MODIFIED: Using a placeholder image
                src="https://via.placeholder.com/600x400.png?text=Job+Image"
                alt="Laundry machine with clothes being washed"
              />
              <div className="job-header">
                <div className="job-title-row">
                  <h3 className="job-title">Washing Clothes</h3>
                  <span className="job-tag" aria-label="Category">
                    Housework & Care
                  </span>
                </div>
                <div className="job-owner-row">
                  <span className="muted">Job Offer Owner</span>
                  <span className="owner-name">Ronald Timothy</span>
                </div>
              </div>

              <div className="job-desc">
                <h4 className="desc-title">Job Description</h4>
                <p className="desc-text">
                  Assisting with washing clothes using a washing machine or by hand, hanging clothes to dry, and folding
                  simple items to keep them neat and clean. Suitable for families who need help with daily household
                  chores.
                </p>
              </div>

              <dl className="details">
                <div className="detail-row">
                  <dt>Date</dt>
                  <dd>01/01/1999</dd>
                </div>
                <div className="detail-row">
                  <dt>Time</dt>
                  <dd>10.00 - 12.00</dd>
                </div>
                <div className="detail-row">
                  <dt>Location</dt>
                  <dd>66818 McGlynn Ramp, Apt. 089, 32994-9987, Lake Melbamount, Minnesota, United States</dd>
                </div>
                <div className="detail-row">
                  <dt>Fee</dt>
                  <dd>3000</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Right: Pay to Workers */}
          <section className="right-col">
            <h2 className="section-title">Pay to Workers</h2>

            <div className="worker-card">
              <img 
                className="worker-avatar" 
                // MODIFIED: Using a placeholder image
                src="https://via.placeholder.com/150.png?text=Avatar" 
                alt="Worker avatar" 
              />
              <div className="worker-meta">
                <div className="worker-name">Tucker Davidson</div>
                <div className="worker-sub muted">Housework & Care</div>
              </div>
            </div>

            {/* Rating */}
            <label className="field-label" htmlFor="rate">
              Rate
            </label>
            <div id="rate" className="rating" role="radiogroup" aria-label="Rate worker from 1 to 5 stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`star ${rating >= n ? "active" : ""}`}
                  onClick={() => setRating(n)}
                  aria-checked={rating === n}
                  role="radio"
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Comment */}
            <label className="field-label" htmlFor="comment">
              Comments
            </label>
            <textarea
              id="comment"
              className="comment"
              placeholder="Provide comments, criticism and suggestions for workers"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
            />

            {/* Payment method */}
            <div className="pm-header">
              <h3 className="pm-title">Payment Method</h3>
              <button className="icon-btn" aria-label="Add payment method">
                ＋
              </button>
            </div>
            <ul className="pm-list" role="radiogroup" aria-label="Select payment method">
              {methods.map((m) => (
                <li key={m.id} className={`pm-item ${selectedMethod === m.id ? "selected" : ""}`}>
                  <div className="pm-bank">{m.bank}</div>
                  <div className="pm-last4">•••• {m.last4}</div>
                  <input
                    type="radio"
                    name="payment"
                    aria-label={`Select ${m.bank} ending in ${m.last4}`}
                    checked={selectedMethod === m.id}
                    onChange={() => setSelectedMethod(m.id)}
                  />
                </li>
              ))}
            </ul>

            {/* Fee + Pay */}
            <div className="fee-row">
              <div className="fee-label">Fee</div>
              <div className="fee-amount">3000</div>
            </div>
            <button className="pay-btn" onClick={handlePay}>
              Pay
            </button>
          </section>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
