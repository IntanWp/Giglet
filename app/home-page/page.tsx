import { Sidebar, MobileSidebar } from "@/components/jobs/sidebar";
import { Topbar } from "@/components/jobs/topbar";
import { JobCard } from "@/components/job-card";
import Image from "next/image";

export default function HomePage() {
  
  const recommendedJobs = [
    {
      title: "Washing Clothes",
      date: "2025/12/20",
      description: "Help wash clothes using a washing machine or manually, dry them, and fold simple clothes so they are neat and clean.",
      fee: "Rp 100.000",
      imageQuery: "washing-clothes",
    },
    {
      title: "Basic Cleaning (House)",
      date: "2025/12/20",
      description: "Sweeping, mopping, and dusting the living room and kitchen.",
      fee: "Rp 75.000",
      imageQuery: "cleaning_sanitizing_staff",
    },
    {
      title: "Caring for the Elderly",
      date: "2025/12/12",
      description: "Accompanying the elderly at home, helping with light activities excluding medical.",
      fee: "Rp 100.000",
      imageQuery: "receptionist", 
    },
    {
      title: "Help Lift Moving Items",
      date: "2025/11/28",
      description: "Help lift household items (not too heavy) when moving boarding house.",
      fee: "Rp 100.000",
      imageQuery: "assisting-with-production-relocation",
    },
    {
      title: "Washing Car",
      date: "2025/11/25",
      description: "Washing 1 car until light inside + outside. Tools are provided by the employer.",
      fee: "Rp 80.000",
      imageQuery: "stiker_barcode_applier", 
    },
    {
      title: "Light Babysitting",
      date: "2025/11/22",
      description: "Accompanying a 4 year old child to play at home (not including cooking or cleaning).",
      fee: "Rp 90.000",
      imageQuery: "ditributing_drinking_water", 
    },
     {
      title: "Packing Goods",
      date: "2025/12/27",
      description: "Help pack items into cardboard or plastic according to instructions.",
      fee: "Rp 75.000",
      imageQuery: "Packing_Goods",
    },
    {
      title: "Guest Registration Officer",
      date: "2025/12/02",
      description: "Record the names of guests who come to the event/meeting.",
      fee: "Rp 60.000",
      imageQuery: "guest_registration_officer",
    },
    {
      title: "Promo Labeler",
      date: "2025/10/14",
      description: "Attach discount or promo stickers to products.",
      fee: "Rp 75.000",
      imageQuery: "promo-labeler",
    },
  ];

  return (
    <main className="min-h-screen w-full lg:pl-75 pt-16 bg-background">
      <Topbar />
      <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8">
        <Sidebar activeCategory="home" />
        <div className="flex-1">
          <MobileSidebar />
          
          {/* Hero Section */}
          <section className="relative h-64 md:h-72 w-full rounded-xl overflow-hidden flex items-center justify-center p-8 mt-3 md:mt-0">
             <Image
                src="/images/assisting-with-production-relocation.png"
                alt="Easy Tasks, Real Rewards"
                layout="fill"
                objectFit="cover"
                className="brightness-50"
             />
             <h1 className="relative text-4xl md:text-5xl font-extrabold text-white text-center">
                "Easy Tasks, Real Rewards"
             </h1>
          </section>

          {/* Recommendations Section */}
          <section className="mt-8">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Recommendations Job</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {recommendedJobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
