"use client"

import type React from "react"
import { useState } from "react"
import { FaArrowLeft, FaUser, FaPaperPlane, FaSearch, FaPlus } from "react-icons/fa"
import { Sidebar } from "@/components/jobs/sidebar"
import { Topbar } from "@/components/jobs/topbar"
import { MobileSidebar } from "@/components/jobs/sidebar"
import { ArrowLeft } from "lucide-react"

// Define a type for a single message object for type safety
interface Message {
  id: number
  sender: "user" | "worker" // Use literal types for sender
  text: string
}

const ChatPage: React.FC = () => {
  const goToPayPage = () => {
    // Navigate to pay page
    window.location.href = "/payment-page"
  }

  // Type the state variables
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "worker", text: "Hello! I'm interested in this job." },
    { id: 2, sender: "user", text: "Great! When can you start?" },
    { id: 3, sender: "worker", text: "I can start tomorrow morning." },
  ])

  const handleSendMessage = (): void => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "user", text: message }])
      setMessage("")
    }
  }

  // Type the keyboard event for the input element
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div>
      <main className="min-h-screen w-full pl-64 pt-16 bg-background">
        <Topbar />
        <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8">
          <Sidebar activeCategory="public-service-security"/>
          <div className="flex-1">
            <MobileSidebar />
            <section className="ml-10 mt-3 md:mt-0">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <ArrowLeft className="h-7 w-7 md:h-9 md:w-9 text-foreground/80" />
                <h1 onClick={goToPayPage} className="text-xl md:text-2xl lg:text-3xl font-extrabold">Chat with Worker</h1>
              </div>

              <h3>Job Summary</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <section className="left-col">
            <h2 className="section-title">Job Summary</h2>
            <div className="job-summary-card">
              <img
                className="job-hero"
                // MODIFIED: Using a placeholder image
                src="https://via.placeholder.com/600x400.png?text=Job+Image"
                alt="Laundry machine with clothes being washed"
              />
              <div className="job-header">
                <div className="job-title-row">
                  <h3 className="job-title">Washing Clothes</h3>
                  <span className="job-tag" aria-label="Category">
                    Housework & Care
                  </span>
                </div>
                <div className="job-owner-row">
                  <span className="muted">Job Offer Owner</span>
                  <span className="owner-name">Ronald Timothy</span>
                </div>
              </div>

              <div className="job-desc">
                <h4 className="desc-title">Job Description</h4>
                <p className="desc-text">
                  Assisting with washing clothes using a washing machine or by hand, hanging clothes to dry, and folding
                  simple items to keep them neat and clean. Suitable for families who need help with daily household
                  chores.
                </p>
              </div>

              <dl className="details">
                <div className="detail-row">
                  <dt>Date</dt>
                  <dd>01/01/1999</dd>
                </div>
                <div className="detail-row">
                  <dt>Time</dt>
                  <dd>10.00 - 12.00</dd>
                </div>
                <div className="detail-row">
                  <dt>Location</dt>
                  <dd>66818 McGlynn Ramp, Apt. 089, 32994-9987, Lake Melbamount, Minnesota, United States</dd>
                </div>
                <div className="detail-row">
                  <dt>Fee</dt>
                  <dd>3000</dd>
                </div>
              </dl>
            </div>
          </section>
          <section className="right-col">
              <div className="chat-area">
            <div className="chat-interface-card">
              <div className="chat-interface-header">
                <div className="chat-user-info">
                  <div className="chat-user-avatar">
                    <FaUser />
                  </div>
                  <span>Ronald Timothy</span>
                </div>
                <button onClick={goToPayPage} className="confirm-btn">
                  Confirm
                </button>
              </div>
              <div className="chat-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message-wrapper ${msg.sender === "user" ? "sent" : "received"}`}>
                    <div className="message-avatar">
                      <FaUser />
                    </div>
                    <div className="message-bubble">{msg.text}</div>
                  </div>
                ))}
              </div>
              <div className="chat-input-area">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="chat-input"
                  />
                <button onClick={handleSendMessage} className="send-btn">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ChatPage
