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
    title: "Packing Goods",
    date: "2025/12/27",
    description: "Help pack items into cardboard or plastic according to instructions.",
    fee: "Rp 75.000",
    imageQuery: "Packing_Goods",
  },
  {
    title: "Product Labeling",
    date: "2025/12/22",
    description: "Attaching labels/stickers to products before distribution.",
    fee: "Rp 70.000",
    imageQuery: "product-labeling",
  },
  {
    title: "Item Sorter",
    date: "2025/12/18",
    description: "Sort items according to category (size/color/type).",
    fee: "Rp 80.000",
    imageQuery: "item-sorter",
  },
  {
    title: "Arranging Goods in the Warehouse",
    date: "2025/12/13",
    description: "Arranging products on warehouse shelves.",
    fee: "Rp 80.000",
    imageQuery: "Arranging-Goods-in-the-Warehouse",
  },
  {
    title: "Manual Stock Counting",
    date: "2025/12/10",
    description: "Count the number of products in the warehouse for record keeping.",
    fee: "Rp 70.000",
    imageQuery: "Manual-Stock-Counting",
  },
  {
    title: "Assisting with Product Relocation",
    date: "2025/12/07",
    description: "Lifting goods from one production area to another.",
    fee: "Rp 90.000",
    imageQuery: "assisting-with-production-relocation",
  },
  {
    title: "Sorting Production Waste",
    date: "2025/12/02",
    description: "Sorting plastic, cardboard, or other material waste.",
    fee: "Rp 65.000",
    imageQuery: "Sorting-Production-Waste",
  },
  {
    title: "Wrapping Finished Products",
    date: "2025/11/25",
    description: "Wrap the product with plastic wrap/cardboard before distribution.",
    fee: "Rp 75.000",
    imageQuery: "Wrapping-Finished-Products",
  },
  {
    title: "Raw Material Preparer",
    date: "2025/11/22",
    description: "Prepare raw materials to enter the production machine.",
    fee: "3000",
    imageQuery: "Raw-Material-Preparer",
  },
  {
    title: "Cleaning & Sanitizing Staff",
    date: "2025/11/16",
    description: "Clean production equipment to keep it hygienic.",
    fee: "Rp 70.000",
    imageQuery: "cleaning_sanitizing_staff",
  },
  {
    title: "Stiker & Barcode Applier",
    date: "2025/11/12",
    description: "Attach stickers or barcodes to products.",
    fee: "Rp 50.000",
    imageQuery: "Stiker_Barcode_Applier",
  },
  {
    title: "Empty Box Composer",
    date: "2025/11/07",
    description: "Prepare and fold empty cardboard.",
    fee: "Rp 50.000",
    imageQuery: "Empty-Box-Composer",
  },
  {
    title: "Dust Cleaner Product",
    date: "2025/10/28",
    description: "Clean the finished product with a simple cloth/tool.",
    fee: "Rp 70.000",
    imageQuery: "Dust-Cleaner-Product",
  },
  {
    title: "Clothes Hanger Installer",
    date: "2025/10/23",
    description: "Insert hangers into production clothes.",
    fee: "Rp 75.000",
    imageQuery: "Clothes-Hanger-Installer",
  },
  {
    title: "Promo Labeler",
    date: "2025/10/14",
    description: "Attach discount or promo stickers to products.",
    fee: "Rp 75.000",
    imageQuery: "Promo-Labeler",
  }
]

  return (
    <main className="min-h-screen w-full pl-64 pt-16 bg-background">
      <Topbar />
      <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8">
        <Sidebar activeCategory="manufacturing-production"/>
        <div className="flex-1">
          <MobileSidebar />
          <section className="ml-10 mt-3 md:mt-0">
            <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 hover:opacity-90 transition">
              <ArrowLeft className="h-7 w-7 md:h-9 md:w-9 text-foreground/80" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold group-hover:underline">Manufacturing &amp; Production</h1>
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
