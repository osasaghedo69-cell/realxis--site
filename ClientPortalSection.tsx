import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Download, 
  CheckCircle2,
  Clock,
  AlertTriangle,
  Users
} from "lucide-react";

const portalTabs = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { id: "tasks", label: "Tasks & Milestones", icon: <FileText size={18} /> },
  { id: "feedback", label: "Feedback", icon: <MessageSquare size={18} /> },
  { id: "assets", label: "Assets", icon: <Download size={18} /> }
];

const projects = [
  { name: "Open World RPG", progress: 75, status: "In Progress" },
  { name: "FPS Multiplayer", progress: 90, status: "Final Review" },
  { name: "Mobile Racing Game", progress: 40, status: "In Development" }
];

const milestones = [
  { name: "Character Design", status: "completed", dueDate: "May 15" },
  { name: "World Building", status: "completed", dueDate: "June 1" },
  { name: "Core Gameplay", status: "in-progress", dueDate: "July 10" },
  { name: "UI Implementation", status: "in-progress", dueDate: "July 25" },
  { name: "Final Testing", status: "pending", dueDate: "August 5" }
];

export function ClientPortalSection() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section id="client-portal" className="py-24 bg-secondary relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-secondary opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Client Portal Experience</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We provide a seamless client experience with our dedicated portal, keeping you updated on every step of your game's development.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/5 max-w-5xl mx-auto">
          {/* Portal Header */}
          <div className="bg-secondary p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100" fill="none">
                  <path d="M30 35L50 25L70 35V65L50 75L30 65V35Z" stroke="white" strokeWidth="3" />
                  <path d="M50 25V75" stroke="white" strokeWidth="2" />
                  <path d="M30 35L70 35" stroke="white" strokeWidth="2" />
                  <path d="M30 65L70 65" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">Realxis Client Portal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Portal Navigation */}
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-1 bg-secondary/50 border-r border-white/10 p-4">
              <div className="flex flex-col space-y-1">
                {portalTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={cn(
                      "flex items-center gap-3 p-2.5 rounded-lg transition-colors text-left",
                      activeTab === tab.id 
                        ? "bg-primary/20 text-primary" 
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-3 px-2">Active Projects</div>
                {projects.map((project, idx) => (
                  <div 
                    key={idx}
                    className="mb-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white text-sm font-medium">{project.name}</span>
                      <span 
                        className={cn(
                          "text-xs px-1.5 py-0.5 rounded",
                          project.status === "Final Review" 
                            ? "bg-yellow-500/20 text-yellow-400" 
                            : "bg-blue-500/20 text-blue-400"
                        )}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={project.progress} className="h-1.5" />
                      <span className="text-white/70 text-xs">{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Portal Content Area */}
            <div className="lg:col-span-4 p-6">
              {activeTab === "dashboard" && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Project Dashboard</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/70">Current Phase</span>
                        <Clock size={18} className="text-primary" />
                      </div>
                      <div className="text-white text-xl font-semibold">Core Development</div>
                      <div className="text-white/50 text-sm">Phase 2 of 4</div>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/70">Team Members</span>
                        <Users size={18} className="text-primary" />
                      </div>
                      <div className="text-white text-xl font-semibold">8 Developers</div>
                      <div className="text-white/50 text-sm">Currently assigned</div>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/70">Next Milestone</span>
                        <AlertTriangle size={18} className="text-yellow-400" />
                      </div>
                      <div className="text-white text-xl font-semibold">Core Gameplay</div>
                      <div className="text-white/50 text-sm">Due in 14 days</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-4">Project Timeline</h4>
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-2.5 w-0.5 bg-white/10"></div>
                      <div className="space-y-6">
                        {milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div 
                              className={cn(
                                "w-5 h-5 rounded-full mt-0.5 flex items-center justify-center",
                                milestone.status === "completed" 
                                  ? "bg-green-500" 
                                  : milestone.status === "in-progress" 
                                    ? "bg-blue-500" 
                                    : "bg-white/20"
                              )}
                            >
                              {milestone.status === "completed" && (
                                <CheckCircle2 size={14} className="text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h5 className="text-white font-medium">{milestone.name}</h5>
                                <span 
                                  className={cn(
                                    "text-xs",
                                    milestone.status === "completed" 
                                      ? "text-green-400" 
                                      : milestone.status === "in-progress" 
                                        ? "text-blue-400" 
                                        : "text-white/50"
                                  )}
                                >
                                  {milestone.status === "completed" 
                                    ? "Completed" 
                                    : milestone.status === "in-progress" 
                                      ? "In Progress" 
                                      : "Pending"
                                  }
                                </span>
                              </div>
                              <p className="text-white/60 text-sm">Due: {milestone.dueDate}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tasks" && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Tasks & Milestones</h3>
                  <p className="text-white/70 mb-6">Track the progress of your game development with detailed tasks and milestones.</p>
                  {/* Task content would go here */}
                  <div className="text-center py-12 text-white/50">Tasks view selected</div>
                </div>
              )}

              {activeTab === "feedback" && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Feedback & Comments</h3>
                  <p className="text-white/70 mb-6">Communicate directly with your development team and provide feedback.</p>
                  {/* Feedback content would go here */}
                  <div className="text-center py-12 text-white/50">Feedback view selected</div>
                </div>
              )}

              {activeTab === "assets" && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Asset Downloads</h3>
                  <p className="text-white/70 mb-6">Access and download project assets, builds, and documentation.</p>
                  {/* Assets content would go here */}
                  <div className="text-center py-12 text-white/50">Assets view selected</div>
                </div>
              )}
            </div>
          </div>
          
          {/* Portal Footer */}
          <div className="bg-secondary/80 p-4 border-t border-white/10 flex justify-between items-center">
            <span className="text-white/50 text-sm">Last updated: 2 hours ago</span>
            <Button 
              className="bg-primary hover:bg-primary/80 text-white"
              onClick={() => window.location.href = "/portal"}
              title="Log in to Client Portal"
            >
              Log in to Client Portal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}