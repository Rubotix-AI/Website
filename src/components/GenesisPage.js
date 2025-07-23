import React from "react";
import "./ProjectGrid.css"; // shared styles for all project pages

const projects = [
  {
    id: 1,
    title: "Smart Conveyor System",
    description: "Real-time sorting system using IoT sensors and PLCs.",
    video: "/assets/videos/loco.mp4"
  },
  {
    id: 2,
    title: "Predictive Maintenance Dashboard",
    description: "Analytics dashboard for industrial machines using sensor data.",
    video: "/assets/videos/loco.mp4"
  },
  {
    id: 3,
    title: "SCADA Control Suite",
    description: "Custom-built SCADA system for factory-level automation.",
    video: "/assets/videos/loco.mp4"
  },
  // Add more projects as needed
];

const NexusPage = () => {
  return (
    <div className="project-page">
      <h1 className="page-title">Rubotix Genesis</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-tile" key={project.id}>
            <video
              className="project-video"
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NexusPage;
