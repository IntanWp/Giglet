"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function RegisterForm() {
  const router = useRouter()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.log("Register form submitted:", data)
    router.push("/")
  }

  const inputClass =
    "w-full rounded-lg bg-input-surface text-foreground placeholder:text-foreground/60 px-5 py-2 md:py-2.5 text-base md:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"

  const labelClass = "block text-brand-foreground font-extrabold tracking-tight mb-2"

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5">
      {/* Full Name */}
      <Field label="Full Name" htmlFor="fullName">
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Full Name"
          className={inputClass}
          aria-label="Full Name"
          required
        />
      </Field>

      {/* Username */}
      <Field label="Username" htmlFor="username">
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          className={inputClass}
          aria-label="Username"
          required
        />
      </Field>

      {/* Email */}
      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className={inputClass}
          aria-label="Email"
          required
        />
      </Field>

      {/* Password */}
      <Field label="Password" htmlFor="password">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className={inputClass}
          aria-label="Password"
          required
        />
      </Field>

      {/* Phone Number */}
      <Field label="Phone Number" htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className={inputClass}
          aria-label="Phone Number"
        />
      </Field>

      {/* Location */}
      <Field label="Location" htmlFor="location">
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Location"
          className={inputClass}
          aria-label="Location"
        />
      </Field>

      {/* Skills */}
      <Field label="Skills" htmlFor="skills">
        <div className="relative">
          <select
            id="skills"
            name="skills"
            className={cn(inputClass, "appearance-none pr-12 bg-input-surface")}
            aria-label="Skills"
            defaultValue=""
          >
            <option value="" disabled>
              Select skills
            </option>
            <option>Design</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Project Management</option>
          </select>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-foreground/60"
          >
            ▾
          </span>
        </div>
      </Field>

      <div className="flex items-center justify-end gap-4 pt-2">
      <button
  type="submit"
  className="rounded-lg px-5 py-2 md:py-2.5 text-lg md:text-xl font-black shadow-sm 
             hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
  style={{ backgroundColor: "#F8FCFF", color: "#0F4C75" }}
  aria-label="Register"
>
  Register
</button>
      </div>

      <p className="text-right text-base md:text-lg text-brand-foreground/90 -mt-2">
  <Link href="/login" className=" text-brand-foreground hover:underline">
    Already have an account?
  </Link>
</p>

      {/* Accessible helpers for screen readers */}
      <span className="sr-only">All fields are labeled and required where applicable.</span>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-y-2 gap-x-0.1">
      <label
        htmlFor={htmlFor}
        className="justify-self-start md:justify-self-start text-xl md:text-2xl font-bold text-brand-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}