import type React from "react"
import Image from "next/image"

function NavLink({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <a
      href="#"
      className={
        "block rounded-md px-3 py-2 text-sm md:text-base " +
        (active ? "text-white font-semibold" : " hover:text-white")
      }
      style={active ? {} : { color: "#BBE1FA" }}
    >
      {children}
    </a>
  )
}

export function Sidebar({ activeCategory }: { activeCategory?: string }) {
  return (
<aside className="hidden lg:flex fixed top-0 left-0 h-screen w-75 flex-col justify-between text-brand-foreground shadow-md p-4 z-20" style={{backgroundColor: "rgba(15, 76, 117, 1)"}}>
      <div>
        <div className="px-3 pt-2 pb-4">
          <div className="text-4xl pb-1 font-extrabold tracking-tight" style={{ color: "rgba(187, 225, 250, 1)" }}>Giglet</div>

        <div className="mt-2 border-b-1" style={{ borderColor: "#E7EDF1" }}></div>

        </div>
        <nav className="space-y-2">
          <div className="px-2 text-xl">
            <NavLink><span className="text-2xl font-bold text-white">Home</span></NavLink>
            <NavLink><span className="text-2xl font-bold text-white">Jobs</span></NavLink>
          </div>
          <div className=" pl-6 -mt-2">
            <div className="text-xl tracking-tight text-white mb-2 pl-3 font-semibold">Category</div>
            <div className="-space-y-1">
              <NavLink active={activeCategory === "public-service-security"}>Public Services &amp; Security</NavLink>
              <NavLink active={activeCategory === "manufacturing-production"}>Manufacturing &amp; Production</NavLink>
              <NavLink active={activeCategory === "construction-engineering"}>Construction &amp; Engineering</NavLink>
              <NavLink active={activeCategory === "housework-care"}>Housework &amp; Care</NavLink>
              <NavLink active={activeCategory === "administration-office"}>Administration &amp; Office</NavLink>
              <NavLink active={activeCategory === "it-software"}>IT &amp; Software</NavLink>
              <NavLink active={activeCategory === "health-medical"}>Health &amp; Medical</NavLink>
              <NavLink active={activeCategory === "education-training"}>Education &amp; Training</NavLink>
            </div>
          </div>
          <div className="px-2 text-xl">
            <NavLink><span className="text-2xl font-bold text-white">Profile</span></NavLink>
          </div>
        </nav>
      </div>

      <div className="px-2 pb-2">
        <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-white/90 hover:text-white">
          <Image
      src="/images/logout.png"
      alt="Logout"
      width={22}
      height={22}
    />
          <span className="text-2xl font-extrabold">Log Out</span>
        </a>
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
