"use client"

import { FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import { Sidebar } from "@/components/jobs/sidebar"
import { Topbar } from "@/components/jobs/topbar"
import { MobileSidebar } from "@/components/jobs/sidebar"
import type React from "react"

const ProfilePage = () => {

  return (
    <div>
      <main className="min-h-screen w-full pl-64 pt-16 bg-background">
      <Topbar />
      <div className="mx-auto w-full px-6 md:px-10 py-4 md:py-6 flex gap-4 md:gap-8">
        <Sidebar />
        <div className="flex-1">
          <MobileSidebar />
          <section className="ml-10 mt-3 md:mt-0">

            <section className="profile-header">
            {/* Button has been moved out of this div */}
            <div className="profile-header-top">
              <h1 className="profile-title">Profile</h1>
            </div>
            <div className="cover-wrapper">
              <img src="./assets/cover.jpg" alt="Cover" className="cover-img" />
              <button className="edit-btn"><FaEdit /> Edit</button>
              <div className="location-badge">
                <FaMapMarkerAlt /> United States
              </div>
              <div className="profile-info">
                <img src="./assets/profilepic.png" alt="Ronald Timothy" className="profile-pic" />
                <div className="profile-text">
                  <div className="name-pill">Ronald Timothy</div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="personal-info">
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

          <div className="flex-section">
            <section className="offered-jobs">
              <h3>Offered Job</h3>
              <ul>
                <li>
                  <img src="https://via.placeholder.com/60" alt="Basic Cleaning"/>
                  <div>
                    <h4>Basic Cleaning (House)</h4>
                    <p>Sweeping, mopping, and dusting the living room and kitchen.</p>
                    <div className="job-date">2025/12/20</div>
                  </div>
                </li>
                <li>
                  <img src="https://via.placeholder.com/60" alt="Caring For The Elderly"/>
                  <div>
                    <h4>Caring For The Elderly</h4>
                    <p>Accompanying the elderly at home, helping with light activities.</p>
                    <div className="job-date">2025/12/12</div>
                  </div>
                </li>
              </ul>
            </section>

            <div className="right-panel">
              <section className="skills">
                <h3>Skills</h3>
                <div className="skill-section">
                  <div className="skill-type">Hard Skills</div>
                  <div className="skill-tags">
                    <span>Communication</span>
                    <span>Teamwork</span>
                    <span>Problem Solving</span>
                  </div>
                </div>
                <div className="skill-section">
                  <div className="skill-type">Soft Skills</div>
                  <div className="skill-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>CSS</span>
                  </div>
                </div>
              </section>
              
              <section className="latest-jobs">
                <h3>Latest Job</h3>
                <ul>
                   <li>
                      <img src="https://via.placeholder.com/60" alt="Washing Clothes"/>
                      <div>
                        <h4>Washing Clothes</h4>
                        <div className="job-meta">
                          <span className="star-icon">⭐</span> 5 <span style={{margin: '0 5px'}}>•</span> <span className="job-date">2025/12/29</span>
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
    
  );
};

export default ProfilePage;