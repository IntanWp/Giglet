"use client";

import type React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5 1.5-1.5-5-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
      />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 12c2.76 0 5-2.46 5-5.5S14.76 1 12 1 7 3.46 7 6.5 9.24 12 12 12Zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5Z"
      />
    </svg>
  );
}

export function Topbar() {
  const router = useRouter(); 

  return (
    <header
      className="w-full fixed top-0 z-10 shadow-sm"
      style={{ backgroundColor: "#3282B8" }}
    >
      <div
        className="fixed top-0 right-0 h-[70px] flex items-center justify-between px-[3vw] shadow-sm z-40"
        style={{
          left: "min(18vw, 280px)",
          backgroundColor: "#3282B8",
        }}
      >
        {/* Left: Search */}
        <div className="w-[28vw] min-w-[300px] max-w-[550px]">
          <div className="flex items-center gap-3 rounded-lg bg-white border border-border shadow-sm px-2 py-1">
            <SearchIcon className="h-6 w-6 text-foreground/60" />
            <input
              id="search"
              placeholder="Search"
              className="w-full bg-transparent outline-none text-base"
              aria-label="Search"
            />
          </div>
        </div>

        {/* Right: Button + Account */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => router.push("/job-offer")} 
            className="hidden sm:inline-flex items-center gap-2 rounded-lg text-brand-foreground px-4 py-2 font-semibold shadow-sm hover:opacity-95"
            style={{ backgroundColor: "#0F4C75" }}
          >
            <Image
              src="/images/job_offer_icon.png"
              alt="Job Offer"
              width={22}
              height={22}
            />
            <span className="text-base text-white">Make a Job Offer</span>
          </button>

          <div
            aria-label="Account"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3282B8]"
          >
            <UserIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
}
