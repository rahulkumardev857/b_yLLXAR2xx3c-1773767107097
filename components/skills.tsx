"use client";

import { Code, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    icon: Database,
    title: "Web Technologies",
    skills: ["HTML", "CSS", "Node.js", "React.js"],
  },
  {
    icon: Wrench,
    title: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub", "VS Code"],
  },
  {
    icon: Brain,
    title: "Core Strengths",
    skills: ["Problem Solving", "Data Structures", "Algorithms", "Team Leadership"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Skills & Expertise
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
