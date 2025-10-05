"use client"

import type React from "react"

import { useState } from "react"

export function PaymentForm() {
  const [saveForFuture, setSaveForFuture] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border bg-card px-4 py-4 shadow-md md:px-6 md:py-6"
      aria-labelledby="add-method-title"
    >
      <div className="flex items-center gap-2 border-b pb-3 md:pb-4">
        {/* radio-like target icon */}
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
        </span>
        <h2 id="add-method-title" className="text-xl font-extrabold md:text-xl">
          Add Payment Method
        </h2>
      </div>

      <div className="mt-4 grid gap-4 md:mt-6">
        <div className="grid gap-2">
          <label htmlFor="cardNumber" className="text-md font-bold">
            Card Number
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            inputMode="numeric"
            placeholder="1234 5678 9012 3456"
            className="h-10 rounded-md border-2 text-foreground px-3 placeholder:text-muted-foreground/70 md:h-11"
            required
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="exp" className="text-md font-bold">
              Expiration Date
            </label>
            <input
              id="exp"
              name="exp"
              placeholder="MM / YY"
              className="h-10 rounded-md border-2 text-foreground px-3 placeholder:text-muted-foreground/70 md:h-11"
              required
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="cvc" className="text-md font-bold">
              Security Code
            </label>
            <input
              id="cvc"
              name="cvc"
              inputMode="numeric"
              placeholder="123"
              className="h-10 rounded-md border-2 text-foreground px-3 placeholder:text-muted-foreground/70 md:h-11"
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="name" className="text-md font-bold">
            Cardholder&apos;s Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Full name as shown on card"
            className="h-10 rounded-md border-2 text-foreground px-3 placeholder:text-muted-foreground/70 md:h-11"
            required
          />
        </div>

        <label className="mt-2 flex items-center gap-2">
          <input
            type="checkbox"
            checked={saveForFuture}
            onChange={(e) => setSaveForFuture(e.target.checked)}
            name="save"
            className="h-4 w-4 rounded border"
          />
          <span className="text-sm font-bold">Save this card for future payments</span>
        </label>

        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-[#BBE1FA] px-4 py-2 text-sm font-bold text-black shadow-sm hover:opacity-90"
          >
            Add Payment Method
          </button>
        </div>
      </div>
    </form>
  )
}
