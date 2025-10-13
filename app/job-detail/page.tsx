"use client";

import { Sidebar, MobileSidebar } from "@/components/jobs/sidebar";
import { Topbar } from "@/components/jobs/topbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


// Mock data
const jobDetails = {
  title: "Washing Clothes",
  category: "Housework & Care",
  image: "/images/washing-clothes.png",
  description: "Assisting with washing clothes using a washing machine or by hand, hanging clothes to dry, and folding simple items to keep them neat and clean. Suitable for families who need help with daily household chores.",
  requirements: [
    "Minimum age 18 years.",
    "Physically able to perform light household chores.",
    "Meticulous and careful when handling clothes (do not mix whites with colored items).",
    "Basic knowledge of washing machine operation or manual washing techniques.",
    "Disciplined with time and able to complete work as agreed.",
    "Willing to maintain a clean work area.",
  ],
  location: "United State",
  date: "01/01/1999",
  time: "10.00 - 12.00",
  fee: "Rp 3000",
  client: {
    name: "Ronald Timothy",
    email: "ronald.timothy@gmail.com",
    avatar: "/placeholder-user.jpg",
  },
  reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
};

export default function JobDetailPage() {
  const router = useRouter();
  return (
    // FIX 1: Changed padding to `lg:pl-75` to match your sidebar's width
    <main className="min-h-screen w-full lg:pl-75 pt-16 bg-background">
      <Topbar />
      <div className="mx-auto w-full px-4 md:px-8 py-4 md:py-6 flex gap-4 md:gap-8">
        <Sidebar activeCategory="housework-care" />
        <div className="flex-1 min-w-0"> {/* Added min-w-0 to parent for flexbox safety */}
          <MobileSidebar />
          <section className="mt-3 md:mt-0">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Link href="/" className="text-foreground/80 hover:text-foreground">
                <ArrowLeft className="h-7 w-7 md:h-9 md:w-9" />
              </Link>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold">Job Detail</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Column: Job Details */}
              <div className="lg:col-span-2 space-y-6 min-w-0">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="relative w-full sm:w-1/3 shrink-0 aspect-square">
                    <Image
                      src={jobDetails.image}
                      alt={jobDetails.title}
                      layout="fill"
                      className="object-cover rounded-xl border border-border"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl md:text-3xl font-extrabold break-words">{jobDetails.title}</h2>
                    <span className="mt-2 inline-block rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold">
                      {jobDetails.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Job Description</h3>
                  <p className="mt-2 text-foreground/70 break-words">{jobDetails.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Job Requirements</h3>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-foreground/70">
                    {jobDetails.requirements.map((req, i) => (
                      <li key={i} className="break-words">{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-6">
                  <div>
                    <h4 className="font-bold text-sm text-muted-foreground">Location</h4>
                    <p className="font-semibold break-words">{jobDetails.location}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-muted-foreground">Date</h4>
                    <p className="font-semibold">{jobDetails.date}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-muted-foreground">Time</h4>
                    <p className="font-semibold">{jobDetails.time}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Client, Reviews, Fee */}
              <div className="space-y-6 min-w-0">
                <div className="bg-secondary rounded-xl p-4 flex items-center gap-4">
                  <Image
                    src={jobDetails.client.avatar}
                    alt={jobDetails.client.name}
                    width={56}
                    height={56}
                    className="rounded-full shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-bold truncate">{jobDetails.client.name}</div>
                    {/* FIX 2: Added `break-words` to prevent email from overflowing */}
                    <div className="text-sm text-muted-foreground break-words">{jobDetails.client.email}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Reviews</h3>
                  <p className="mt-2 text-sm text-foreground/70 break-words">{jobDetails.reviews}</p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Fee</span>
                    <span className="text-xl font-bold">{jobDetails.fee}</span>
                  </div>
                  <Button className="w-full text-lg font-bold" style={{ backgroundColor: "#1F7A8C", color: "white" }}
                  onClick={() => router.push('/chat')}>
                    Request Job
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
