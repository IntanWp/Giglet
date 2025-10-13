"use client"

import { Sidebar } from "@/components/jobs/sidebar"
import { Topbar } from "@/components/jobs/topbar"
import { MobileSidebar } from "@/components/jobs/sidebar"
import type React from "react"

const ProfilePage = () => {
  return (
    <div className="!shadow-none !drop-shadow-none">
      <main className="min-h-screen w-full pl-64 pt-16 bg-background !shadow-none !drop-shadow-none">
        <Topbar />
        <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8 !shadow-none !drop-shadow-none">
          <Sidebar />
          <div className="flex-1 !shadow-none !drop-shadow-none">
            <MobileSidebar />
            <section className="ml-10 mt-3 md:mt-0 !shadow-none !drop-shadow-none">
              
              {/* --- Profile Header Top --- */}
              <div className="flex items-center justify-between mb-3 px-1 md:px-2 lg:px-3 !shadow-none !drop-shadow-none">
                <h1 className="font-extrabold text-3xl text-gray-900 ml-3.5">Profile</h1>
                <button className="flex items-center gap-2 bg-[#2D81B5] text-white px-3 py-1.5 rounded-md hover:bg-[#236799] transition !shadow-none !drop-shadow-none mr-3.5">
                  <img src="/images/edit.png" alt="Edit" className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              </div>

              {/* --- Profile Header --- */}
              <section className="profile-header relative !shadow-none !drop-shadow-none">
                <div className="cover-wrapper relative rounded-md overflow-hidden !shadow-none !drop-shadow-none">
                  <img
                    src="/images/profile-banner.jpg"
                    alt="Cover"
                    className="w-full h-48 object-cover rounded-md !shadow-none !drop-shadow-none"
                  />

                  {/* Location Badge */}
                  <div className="absolute top-37 right-4 flex items-center gap-2 bg-white/90 text-gray-700 text-sm px-3 py-1 rounded-sm !shadow-none !drop-shadow-none">
                    <img src="/images/location.png" alt="" className="w-4 h-4" />
                    United States
                  </div>

                  {/* Profile Info */}
                  <div className="profile-info !shadow-none !drop-shadow-none ml-6">
                    <img
                      className="w-40 h-40 rounded-full object-cover !shadow-none !drop-shadow-none"
                      src="/images/profile-picture.png"
                      alt="Ronald Timothy"
                    />

                    {/* Name and Description */}
                    <div className="profile-text absolute bottom-1 left-50 !shadow-none !drop-shadow-none">
                      <div className="bg-white px-3 py-1 rounded-md font-extrabold text-2xl inline-block mb-3 !shadow-none !drop-shadow-none">
                        Ronald Timothy
                      </div>

                      <p className="bg-white/90 p-3 rounded-md text-sm text-gray-700 leading-relaxed max-w-[480px] !shadow-none !drop-shadow-none">
                        Hi, I’m Ronald Timothy — a motivated and detail-oriented professional with a strong passion for continuous learning and growth. I take pride in being reliable, adaptable, and collaborative, always striving to deliver high-quality results in everything I do.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- Personal Info --- */}
              <section className="personal-info mt-10 !shadow-none !drop-shadow-none">
                <h3>Personal Info</h3>
                <div className="info-grid">
                  <div>
                    <div className="label">Full Name</div>
                    <p>Ronald Timothy</p>
                  </div>
                  <div>
                    <div className="label">Phone</div>
                    <p>+62 812345678</p>
                  </div>
                  <div>
                    <div className="label">Email</div>
                    <p>ronald.timothy@gmail.com</p>
                  </div>
                </div>
              </section>

              {/* --- Offered Jobs --- */}
              <div className="flex-section !shadow-none !drop-shadow-none">
                <section className="offered-jobs !shadow-none !drop-shadow-none">
                  <h3>Offered Job</h3>
                  <ul>
                    <li className="!shadow-none !drop-shadow-none">
                      <img src="https://via.placeholder.com/60" alt="Basic Cleaning" />
                      <div>
                        <h4>Basic Cleaning (House)</h4>
                        <p>Sweeping, mopping, and dusting the living room and kitchen.</p>
                        <div className="job-date">2025/12/20</div>
                      </div>
                    </li>
                    <li className="!shadow-none !drop-shadow-none">
                      <img src="https://via.placeholder.com/60" alt="Caring For The Elderly" />
                      <div>
                        <h4>Caring For The Elderly</h4>
                        <p>Accompanying the elderly at home, helping with light activities.</p>
                        <div className="job-date">2025/12/12</div>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* --- Right Panel --- */}
                <div className="right-panel !shadow-none !drop-shadow-none">
                  <section className="skills !shadow-none !drop-shadow-none">
                    <h3>Skills</h3>
                    <div className="skill-section !shadow-none !drop-shadow-none">
                      <div className="skill-type">Hard Skills</div>
                      <div className="skill-tags">
                        <span>Communication</span>
                        <span>Teamwork</span>
                        <span>Problem Solving</span>
                      </div>
                    </div>
                    <div className="skill-section !shadow-none !drop-shadow-none">
                      <div className="skill-type">Soft Skills</div>
                      <div className="skill-tags">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>CSS</span>
                      </div>
                    </div>
                  </section>

                  <section className="latest-jobs !shadow-none !drop-shadow-none">
                    <h3>Latest Job</h3>
                    <ul>
                      <li className="!shadow-none !drop-shadow-none">
                        <img src="https://via.placeholder.com/60" alt="Washing Clothes" />
                        <div>
                          <h4>Washing Clothes</h4>
                          <div className="job-meta">
                            <span className="star-icon">⭐</span> 5{" "}
                            <span style={{ margin: "0 5px" }}>•</span>{" "}
                            <span className="job-date">2025/12/29</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage
