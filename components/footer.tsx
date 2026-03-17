"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/rahulkumardev857", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/rahulkumardev857/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rahulkumarsahani857@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Social Links (Mobile) */}
        <div className="flex justify-center gap-6 mb-6 md:hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Credit */}
        <div className="text-center">
          <a
            href="https://github.com/rahulkumardev857"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <p>Designed & Built by Rahul Kumar</p>
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
