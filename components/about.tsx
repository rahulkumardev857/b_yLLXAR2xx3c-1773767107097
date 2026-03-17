"use client";

const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "HTML & CSS",
  "Node.js",
  "MySQL",
  "Git & GitHub",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {"Hello! I'm Rahul, a Computer Science Engineering student at "}
              <span className="text-primary font-medium">Lovely Professional University</span>
              {" with a passion for creating things that live on the internet. My interest in software development started when I built my first project - a Hostel Management System that taught me the fundamentals of system design."}
            </p>
            <p>
              {"Fast-forward to today, I've had the privilege of building applications that solve real-world problems, from "}
              <span className="text-foreground font-medium">management systems</span>
              {" to "}
              <span className="text-foreground font-medium">financial trading tools</span>
              {". I enjoy working at the intersection of technology and practical applications."}
            </p>
            <p>
              {"I've also been actively solving coding challenges, with "}
              <span className="text-primary font-medium">100+ problems solved on LeetCode</span>
              {", which has strengthened my foundation in Data Structures & Algorithms."}
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            {/* Skills Grid */}
            <ul className="grid grid-cols-2 gap-2 pt-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">&#9656;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative group">
            <div className="relative z-10 rounded-lg overflow-hidden bg-primary/10 aspect-square">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/30">RK</span>
              </div>
            </div>
            {/* Border Effect */}
            <div className="absolute inset-0 rounded-lg border-2 border-primary translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
