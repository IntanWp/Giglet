import type React from "react"
import Image from "next/image"
import Link from "next/link"

function NavLink({
  children,
  href,
  active = false,
  disabled = false,
}: {
  children: React.ReactNode
  href?: string
  active?: boolean
  disabled?: boolean
}) {
  const baseClasses =
    "block rounded-md px-3 py-2 text-sm md:text-base transition-colors duration-150"
  const activeClasses = active ? "text-white font-semibold" : "hover:text-white"
  const disabledClasses = disabled
    ? "text-[#BBE1FA]/60 cursor-not-allowed"
    : activeClasses

  // If disabled, render a <span> instead of <Link>
  if (disabled) {
    return (
      <span className={`${baseClasses} ${disabledClasses}`} style={{ color: "#BBE1FA" }}>
        {children}
      </span>
    )
  }

  return (
    <Link
      href={href || "#"}
      className={`${baseClasses} ${activeClasses}`}
      style={active ? {} : { color: "#BBE1FA" }}
    >
      {children}
    </Link>
  )
}


export function Sidebar({ activeCategory }: { activeCategory?: string }) {
  return (
<aside
  className="hidden md:flex fixed top-0 left-0 h-screen flex-col justify-between text-brand-foreground shadow-md p-4 z-20"
  style={{
    backgroundColor: "rgba(15, 76, 117, 1)",
    width: "18vw", 
    minWidth: "230px",
    maxWidth: "280px",
  }}
>
  <div>
    <div className="px-3 pt-2 pb-4">
      <div
        className="font-extrabold tracking-tight"
        style={{
          fontSize: "clamp(1.8rem, 2vw, 2.2rem)", 
          color: "rgba(187, 225, 250, 1)",
        }}
      >
        Giglet
      </div>
      <div className="mt-2 border-b" style={{ borderColor: "#E7EDF1" }} />
    </div>

    <nav className="space-y-2">
      <div className="px-2 text-xl">
        <NavLink href="/"><span className="text-lg font-bold text-white">Home</span></NavLink>
        <NavLink><span className="text-lg font-bold text-white">Jobs</span></NavLink>
      </div>
      <div className="pl-5 -mt-2">
        <div className="text-sm tracking-tight text-white mb-2 pl-3 font-semibold">
          Category
        </div>
        <div className="-space-y-1 text-[0.95rem] leading-tight">
          <NavLink
                href="/public-service-security"
                active={activeCategory === "public-service-security"}
              >
                Public Services & Security
              </NavLink>
              <NavLink
                href="/manufacturing-production"
                active={activeCategory === "manufacturing-production"}
              >
                Manufacturing & Production
              </NavLink>
          <NavLink active={activeCategory === "construction-engineering"}>
            Construction & Engineering
          </NavLink>
          <NavLink active={activeCategory === "housework-care"}>
            Housework & Care
          </NavLink>
          <NavLink active={activeCategory === "administration-office"}>
            Administration & Office
          </NavLink>
          <NavLink active={activeCategory === "it-software"}>IT & Software</NavLink>
          <NavLink active={activeCategory === "health-medical"}>Health & Medical</NavLink>
          <NavLink active={activeCategory === "education-training"}>Education & Training</NavLink>
        </div>
      </div>

      <div className="px-2 text-lg">
        <NavLink
        href="/profile"><span className="text-lg font-bold text-white">Profile</span></NavLink>
      </div>
    </nav>
  </div>

  <div className="px-2 pb-2">
    <Link
      href="/login"
      className="flex items-center gap-2 rounded-md px-3 py-2 text-white/90 hover:text-white"
    >
      <Image src="/images/logout.png" alt="Logout" width={20} height={20} />
      <span className="font-bold text-base">Log Out</span>
    </Link>
  </div>
</aside>
  )
}

/* Mobile sidebar substitute */
export function MobileSidebar() {
  return (
    <section className="lg:hidden bg-brand text-brand-foreground rounded-lg mx-4 mt-3 p-3">
      <div className="flex items-center justify-between">
        <div className="text-xl font-extrabold">Giglet</div>
        <span className="text-sm opacity-90">Jobs</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {[
          "Public Services & Security",
          "Manufacturing & Production",
          "Construction & Engineering",
          "Housework & Care",
          "Administration & Office",
          "IT & Software",
        ].map((c, i) => (
          <span
            key={i}
            className={
              "rounded-full bg-white/10 px-3 py-1 text-xs " + (i === 0 ? "ring-2 ring-white/50 font-semibold" : "")
            }
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  )
}
