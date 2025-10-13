"use client";

import { useState } from "react";
import { Sidebar, MobileSidebar } from "@/components/jobs/sidebar";
import { Topbar } from "@/components/jobs/topbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ArrowLeft, Calendar as CalendarIcon, ClockIcon, UploadCloudIcon } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function JobOfferPage() {
  const [date, setDate] = useState<Date | undefined>();
  const [datepickerOpen, setDatepickerOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date) {
      alert("Please select a date.");
      return;
    }
    alert(`Job offer posted for: ${format(date, "PPP")}`);
    router.push("/");
  };

  return (
    <div>
      <Topbar />
      <div className="mx-auto w-full px-4 md:px-8 py-4 md:py-6 flex gap-4 md:gap-8"></div>
      <Sidebar />
      <main className="min-h-screen w-full lg:pl-75 pt-16 bg-background">
        <div className="mx-auto w-full px-4 md:px-8 py-4 md:py-6">
          <div className="flex-1 min-w-0"></div>

          <MobileSidebar />
          <section className="mt-3 md:mt-0">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Link href="/" className="text-foreground/80 hover:text-foreground">
                <ArrowLeft className="h-7 w-7 md:h-9 md:w-9" />
              </Link>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold">Make a Job Offer</h1>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col items-center justify-center h-full w-full bg-secondary rounded-xl border-2 border-dashed border-border p-8 text-center">
                <UploadCloudIcon className="w-16 h-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold text-foreground">Upload Image</h3>
                <p className="text-sm text-muted-foreground mt-1">Drag and drop or click to upload</p>
                <Input type="file" className="sr-only" id="image-upload" required />
                <label htmlFor="image-upload" className="mt-4 cursor-pointer">
                  <Button asChild>
                    <span>Choose File</span>
                  </Button>
                </label>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="job-title" className="font-bold">Job Title</label>
                  <Input id="job-title" placeholder="Enter job title" required />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="category" className="font-bold">Category</label>
                  <Select required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select job category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public-service">Public Services & Security</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing & Production</SelectItem>
                      <SelectItem value="construction">Construction & Engineering</SelectItem>
                      <SelectItem value="housework">Housework & Care</SelectItem>
                      <SelectItem value="admin">Administration & Office</SelectItem>
                      <SelectItem value="it">IT & Software</SelectItem>
                      <SelectItem value="health">Health & Medical</SelectItem>
                      <SelectItem value="education">Education & Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="job-description" className="font-bold">Job Description</label>
                  <Textarea id="job-description" placeholder="Write a job description" required />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="location" className="font-bold">Location</label>
                  <Select required>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jakarta">Jakarta</SelectItem>
                      <SelectItem value="bekasi">Bekasi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label className="font-bold">Date</label>
                    <Popover open={datepickerOpen} onOpenChange={setDatepickerOpen}>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "w-full justify-start text-left font-normal",
          !date && "text-muted-foreground"
        )}
        onClick={() => setDatepickerOpen(true)}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>

    <PopoverContent className="w-auto p-0">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(d) => {
          if (!d) {
            setDate(undefined);
            return;
          }
          const newDate = Array.isArray(d)
            ? (d[0] as Date | undefined)
            : (d as Date | undefined);
          setDate(newDate);
          setDatepickerOpen(false); // close popover after selection
        }}
        initialFocus
      />
    </PopoverContent>
  </Popover>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="time" className="font-bold">Time</label>
                    <div className="relative flex items-center">
                      <Input id="time" type="time" required />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="fee" className="font-bold">Fee</label>
                  <Input id="fee" placeholder="Enter job fee" required />
                </div>

                <div className="flex justify-end pt-2">
                  <Button type="submit" className="text-lg font-bold" style={{ backgroundColor: "#1F7A8C", color: "white" }}>
                    Post Job
                  </Button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
