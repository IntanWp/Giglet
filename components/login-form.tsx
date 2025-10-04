"use client"

import type * as React from "react"
import Link from "next/link"

export function LoginForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.log("[v0] Login form submitted:", data)
  }

  const inputClass =
    "w-full rounded-lg bg-input-surface text-foreground placeholder:text-foreground/60 px-5 py-2 md:py-2.5 text-base md:text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5">
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

      <div className="flex items-center justify-end gap-4 pt-2">
        <button
            type="submit"
            className="rounded-lg px-5 py-2 md:py-2.5 text-lg md:text-xl font-black shadow-sm 
                        hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: "#F8FCFF", color: "#0F4C75" }}
            aria-label="Register"
            >
            Login
        </button>
      </div>

      <span className="sr-only">All fields are labeled and required.</span>
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
