"use client";

import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Lovely Professional University",
    period: "2021 - Present",
    score: "CGPA: 6.0",
    highlight: "Focus on Software Development & DSA",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Higher Secondary Education",
    period: "2019 - 2021",
    score: "61%",
    highlight: "Science Stream",
  },
  {
    degree: "Matriculation (10th)",
    institution: "Secondary School",
    period: "2018 - 2019",
    score: "60%",
    highlight: "General Studies",
  },
];

const certifications = [
  {
    title: "ChatGPT & Generative AI",
    issuer: "Infosys",
    icon: BookOpen,
  },
  {
    title: "Generative AI Tools",
    issuer: "Infosys",
    icon: BookOpen,
  },
  {
    title: "Computational Theory & Automata",
    issuer: "Academic Certification",
    icon: Award,
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            Education & Certifications
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="relative border-l-2 border-border pl-6 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                    <p className="text-xs font-mono text-primary mb-1">{edu.period}</p>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span className="text-primary font-medium">{edu.score}</span>
                      <span className="text-muted-foreground">{edu.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Achievement Card */}
            <div className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#10003;</span>
                  Solved 100+ coding problems on LeetCode
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#10003;</span>
                  Strong foundation in DSA and logical thinking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#10003;</span>
                  Completed C++ Programming & Data Structures training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
