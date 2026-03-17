"use client";

import {  ArrowDown } from "lucide-react";

// const socialLinks = [
  // { icon: Github, href: "https://github.com/rahulkumardev857", label: "GitHub" },
  // { icon: Linkedin, href: "https://linkedin.com/in/rahulkumardev857/", label: "LinkedIn" },
  // { icon: Mail, href: "mailto:rahulkumarsahani857@gmail.com", label: "Email" },
// ];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Greeting */}
        <p className="text-primary font-medium tracking-wide animate-fade-in">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance">
          Rahul Kumar
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground text-balance">
          I build things for the web.
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed text-pretty">
          {"I'm a Computer Science Engineering student specializing in building efficient systems and applications. Currently focused on software development, financial markets, and solving complex problems with "}
          <span className="text-foreground font-medium">C++</span>
          {", "}
          <span className="text-foreground font-medium">JavaScript</span>
          {", and "}
          <span className="text-foreground font-medium">Python</span>
          {"."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all hover:scale-110"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
