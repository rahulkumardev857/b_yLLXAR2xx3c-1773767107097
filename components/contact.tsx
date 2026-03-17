"use client";

import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rahulkumardev857",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rahulkumardev857/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:rahulkumarsahani857@gmail.com",
    label: "Email",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">

        {/* Header */}
        <p className="text-primary font-mono text-sm mb-4">
          
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-12">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">

          <a
            href="mailto:rahulkumarsahani857@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            rahulkumarsahani857@gmail.com
          </a>

          <a
            href="tel:+917970701019"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            +91 7970701019
          </a>

        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
          <MapPin className="w-5 h-5" />
          <span>Punjab, India</span>
        </div>

        {/* 🔥 SOCIAL ICONS (NEW) */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
                         text-muted-foreground hover:text-primary 
                         hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-md"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Button */}
        <a
          href="mailto:rahulkumarsahani857@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
        >
          <Send className="w-4 h-4" />
          Say Hello
        </a>

      </div>
    </section>
  );
}