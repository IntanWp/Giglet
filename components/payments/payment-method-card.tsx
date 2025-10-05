"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

type PaymentMethodCardProps = {
  logoAlt: string
  logoQuery: string
  name: string
  onRemove?: () => void
  className?: string
  logoSize?: string
}

export function PaymentMethodCard({ logoAlt, logoQuery, name, onRemove, className, logoSize = "w-10 h-auto" }: PaymentMethodCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl bg-[#F8FCFF] shadow-md",
        "px-4 py-3 md:px-5 md:py-4",
        className,
      )}
      role="listitem"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <div className="flex items-center justify-center h-8 w-10">
            <Image
                src={`/images/${logoQuery}.png`}
                alt={logoAlt}
                width={45}
                height={20}
                className={cn("object-contain", logoSize)}
            />
        </div>
        
        <span className="font-medium text-foreground">{name}</span>
      </div>

      <button
        type="button"
        aria-label="Remove payment method"
        onClick={onRemove}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-black font-extrabold hover:bg-muted"
      >
        {/* minus icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
        </svg>
      </button>
    </div>
  )
}
