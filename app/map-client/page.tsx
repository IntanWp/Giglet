import type React from "react"
import { Sidebar, MobileSidebar } from "@/components/jobs/sidebar"
import { Topbar } from "@/components/jobs/topbar"
import { Button } from "@/components/ui/button"

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  )
}

export default function JobInProgressPage() {
  const job = {
    title: "Washing Clothes",
    category: "Housework & Care",
    owner: "Ronald Timothy",
    date: "01/01/1999",
    time: "10.00 - 12.00",
    location: "66818 McGlynn Ramp, Apt. 089, 32994-9987, Lake Meibamouth, Minnesota, United States",
    fee: "3000",
    coords: { lat: 19.432608, lng: -99.133209 },
  }

  const mapsUrl = `https://www.google.com/maps?q=${job.coords.lat},${job.coords.lng}&z=14`

  return (
    <main className="min-h-screen w-full pl-64 pt-16 bg-background">
      <Topbar />
      <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8">
        <Sidebar activeCategory="" />
        <div className="flex-1">
          <MobileSidebar />
          <section className="ml-10 mt-3 md:mt-0">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <ArrowLeft className="h-7 w-7 md:h-9 md:w-9 text-foreground/80" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold">Job in Progress</h1>
            </div>

            {/* Map preview links to Google Maps */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
              className="block overflow-hidden rounded-xl border border-black/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <iframe
                src={`https://www.google.com/maps?q=${job.coords.lat},${job.coords.lng}&z=14&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full md:h-72 lg:h-120"
                title="Job location map"
              />
            </a>

            {/* Details and actions */}
            <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-start">
              {/* LEFT CONTENT  */}
              <div className="lg:col-span-9">
                <div className="flex flex-col gap-3 bg-transparent p-3 sm:p-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <img
                      src="/images/washing-clothes.png"
                      alt="Washing clothes"
                      className="h-24 w-36 rounded-lg object-cover sm:h-28 sm:w-40"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg sm:text-xl font-extrabold leading-tight">{job.title}</h2>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex rounded-full px-2.5 py-1 text-xs font-medium text-brand" style={{backgroundColor: "#E7F6FC"}}>
                          {job.category}
                        </span>
                        
                      </div>
                      <div className="mt-2">
                        <DetailRow label="Job Offer Owner" value={job.owner} />
                      </div>
                      
                    </div>
                    
                  </div>
                  <div className="mt-3">
                        
                        <DetailRow label="Date" value={job.date} />
                        <DetailRow label="Time" value={job.time} />
                        <DetailRow label="Location" value={job.location} />
                        <DetailRow label="Fee" value={job.fee} />
                      </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                
                <Button className="rounded-lg bg-brand/20 text-foreground hover:bg-brand/25 font-bold text-lg" variant="secondary" style={{backgroundColor: "#BBE1FA"}}>
                  Chat with Worker
                </Button>

                <div className="rounded-xl border border-black bg-white p-4 text-center shadow-sm">
                  <div className="text-xl font-medium text-foreground/70">Enter Pass Code</div>
                  <input
    type="text"
    maxLength={6}
    className="mt-3 w-24 mx-auto text-center text-2xl font-bold border-0 border-b-2 border-gray-400 bg-transparent focus:border-brand focus:outline-none"
  />
                </div>

                <Button className="text-lg font-bold rounded-lg bg-brand text-brand-foreground hover:opacity-95">Done</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex text-sm md:text-base">
      <div className="w-32 md:w-40 font-extrabold text-foreground">{label}</div>
      <div className="flex-1 text-foreground/90">{value}</div>
    </div>
  )
}
