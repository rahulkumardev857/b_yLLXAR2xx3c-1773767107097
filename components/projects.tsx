"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Hostel Management System",
    description:
      "A centralized system to manage student records and room allocation. Features automated modules for student registration, room allotment, availability tracking, and warden login authentication using data structures like arrays, linked lists, and queues.",
    impact: "Improved efficiency, reduced manual errors, faster data access",
    image: "/projects/hostel.jpg",
    github: "https://github.com/rahulkumardev857",
    technologies: ["C++", "React.js", "MySQL", "Bootstrap", "Node.js"],
  },
  {
    title: "Stock Intraday Screener",
    description:
      "A trading tool to identify high-momentum stocks using multi-timeframe analysis (1 min to 1 hour). Features volume spike detection, price movement tracking (>1%), and integrated real-time market APIs for automated signal detection.",
    impact: "Faster trade decision-making and automated signal detection",
    image: "/projects/screener.jpg",
    github: "https://github.com/rahulkumardev857",
    technologies: ["Python", "Pandas", "NumPy", "TA-Lib", "Node.js"],
  },
];

const otherProjects = [
  {
    title: "LeetCode Solutions",
    description: "Collection of 100+ solved coding problems covering arrays, strings, trees, graphs, and dynamic programming.",
    github: "https://github.com/rahulkumardev857",
    technologies: ["C++", "Python", "DSA"],
  },
  {
    title: "Personal Portfolio",
    description: "Modern portfolio website built with Next.js and Tailwind CSS showcasing projects and skills.",
    github: "https://github.com/rahulkumardev857",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Things I've Built
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 relative aspect-video rounded-lg overflow-hidden bg-secondary group ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 md:absolute md:top-1/2 md:-translate-y-1/2 z-20 ${
                  index % 2 === 1
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="p-6 rounded-lg bg-card shadow-lg border border-border mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-primary text-sm font-medium mt-3">
                    Impact: {project.impact}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground font-mono ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-24">
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground font-mono">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
