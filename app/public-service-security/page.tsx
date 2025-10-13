import type React from "react"
import { Sidebar, MobileSidebar } from "@/components/jobs/sidebar"
import { Topbar } from "@/components/jobs/topbar"
import { JobCard } from "@/components/job-card"
import Link from "next/link"

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  )
}

export default function JobsPage() {
  const jobs = [
    {
      title: "Maintaining Event Parking",
      date: "2025/12/05",
      description: "Helps direct vehicles in small parking areas.",
      fee: "Rp 70.000",
      imageQuery: "maintaining_event_parking",
    },
    {
      title: "Guest Registration Officer",
      date: "2025/12/02",
      description: "Record the names of guests who come to the event/meeting.",
      fee: "Rp 60.000",
      imageQuery: "Guest_Registration_Officer",
    },
    {
      title: "Temporary Gatekeeper",
      date: "2025/11/25",
      description: "Guard the entrance to a house or event for several hours.",
      fee: "Rp 75.000",
      imageQuery: "Temporary_Gatekeeper",
    },
    {
      title: "Information Brochure Distributer",
      date: "2025/11/20",
      description: "Distribute brochures in public areas as directed.",
      fee: "Rp 50.000",
      imageQuery: "Information_Brochure_Distributer",
    },
    {
      title: "Queue Attendant",
      date: "2025/11/18",
      description: "Arrange the lines to be orderly in the service area.",
      fee: "Rp 55.000",
      imageQuery: "Queue_Attendant",
    },
    {
      title: "Directional Officer",
      date: "2025/11/05",
      description: "Help visitors find specific locations at an event.",
      fee: "Rp 60.000",
      imageQuery: "directional_officer",
    },
    {
      title: "Event Ticket Checker",
      date: "2025/11/01",
      description: "Checking entry tickets at the event entrance.",
      fee: "Rp 70.000",
      imageQuery: "Event_Ticket_Checker",
    },
    {
      title: "Tour Guide at the Event",
      date: "2025/10/24",
      description: "Directing participants to their seats or rooms.",
      fee: "Rp 60.000",
      imageQuery: "Tour_Guide_at_the_Event",
    },
    {
      title: "Supervisor of Consigned Goods",
      date: "2025/10/23",
      description: "Keep items entrusted to you at the event safe.",
      fee: "Rp 75.000",
      imageQuery: "Supervisor_of_Consigned_Goods",
    },
    {
      title: "Distributing Drinking Water",
      date: "2025/10/15",
      description: "Distribute simple equipment to event participants.",
      fee: "Rp 50.000",
      imageQuery: "ditributing_drinking_water",
    },
    {
      title: "Receptionist",
      date: "2025/10/04",
      description: "Greet guests in a friendly manner and show them directions.",
      fee: "Rp 80.000",
      imageQuery: "Receptionist",
    },
    {
      title: "Temporary Locker Officer",
      date: "2025/10/01",
      description: "Maintaining a locker or simple storage of goods.",
      fee: "Rp 70.000",
      imageQuery: "Temporary_Locker_Officer",
    },
    {
      title: "Installation of Signage",
      date: "2025/09/29",
      description: "Put up event signs or information boards.",
      fee: "Rp 65.000",
      imageQuery: "Installation_of_Signage",
    },
    {
      title: "Hand Stamp Checking Officer",
      date: "2025/09/23",
      description: "Checking the stamp/bracelet of guests who have entered.",
      fee: "Rp 55.000",
      imageQuery: "Hand_Stamp_Checking_Officer",
    },
    {
      title: "Volunteer Donation Box Guard",
      date: "2025/09/10",
      description: "Keep an eye on the donation box to make sure it's safe.",
      fee: "Rp 55.000",
      imageQuery: "Volunteer_Donation_Box_Guard",
    }


  ]

  return (
    <main className="min-h-screen w-full pl-64 pt-16 bg-background">
      <Topbar />
      <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8">
        <Sidebar activeCategory="public-service-security"/>
        <div className="flex-1">
          <MobileSidebar />
          <section className="ml-10 mt-3 md:mt-0">
            <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 hover:opacity-90 transition">
              <ArrowLeft className="h-7 w-7 md:h-9 md:w-9 text-foreground/80" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold group-hover:underline">Public Service &amp; Security</h1>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {jobs.map((j, i) => (
                <JobCard key={i} {...j} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
