"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

type FeedbackFormProps = {
  role?: "worker" | "client" // determines the perspective
}

export default function FeedbackForm({ role = "worker" }: FeedbackFormProps) {
  const router = useRouter();

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     router.push("/");
  }

  // Dynamic text based on role
  const title =
    role === "worker"
      ? "Feedback Form Job Bidders"
      : "Feedback Form Worker"

  const commentLabel =
    role === "worker"
      ? "Comments, criticism and suggestions from job bidders"
      : "Comments, criticism and suggestions from worker"

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-4 w-full max-w-xl"
    >
      <h2 className="text-lg font-extrabold mb-2">{title}</h2>

      {/* Rating Section */}
      <div className="flex items-center justify-between px-4 py-2 mb-5 border-2 border-[#0BA6DF] rounded-md">
        <label className="text-lg font-bold">Rate</label>
        <div className="flex items-center gap-1">
           {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className="text-2xl"
              style={{
                color: "#F5C543", // always active yellow
                cursor: "default",
              }}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Feedback Input */}
      <label htmlFor="feedback" className="block text-md font-bold mb-2">
        {commentLabel}
      </label>
      <div
        className="w-full min-h-20 border-2 border-[#0BA6DF] rounded-md p-3 text-sm bg-gray-50"
      >
        This worker did a great job. Very disciplined, very polite,
        and completed the task ahead of schedule. Will definitely hire again.
      </div>

      {/* Submit */}
      <div className="mt-5 flex justify-end">
        <button
          type="submit"
          className="bg-[#2D81B5] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#236799] transition w-150"
        >
          Close
        </button>
      </div>
    </form>
  )
}
