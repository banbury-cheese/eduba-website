"use client";

import Image from "next/image";
import { useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { EdubaLogo } from "./components/logos";
import SectionTag from "./components/sectionTag";
import Menu from "./components/menu";

gsap.registerPlugin(SplitText);

const missionAudience = [
  {
    title: "For Organizations",
    subtitle: "Transform Your Workforce",
    bullets: [
      "Understand real implementation costs and risks",
      "Build capabilities for agentic workflows",
      "Assess readiness beyond basic literacy",
      "Create sustainable augmentation strategies",
    ],
    description:
      "From corporate training to military skill bridge programs, we help organizations build lasting competencies.",
  },
  {
    title: "For Education",
    subtitle: "Prepare Tomorrow's Workforce",
    bullets: [
      "Curriculum that matches industry needs",
      "Critical thinking about technology outputs",
      "Multi-stakeholder collaboration skills",
      "Ethics, governance, and risk assessment",
    ],
    description:
      "Working with universities and colleges to ensure graduates have the competencies employers actually need.",
  },
];

const skills = [
  {
    title: "Critical Assessment",
    description:
      "Knowing when outputs are wrong, misleading, or incomplete. The skill that prevents million-dollar mistakes.",
  },
  {
    title: "Agentic Orchestration",
    description:
      "Understanding how multiple AI agents and humans collaborate. Building on top of, not replacing, existing systems.",
  },
  {
    title: "Abstract Fundamentals",
    description:
      "Platform-agnostic skills that work across any tool. Understanding principles, not just procedures.",
  },
  {
    title: "Governance & Ethics",
    description:
      "Risk assessment, compliance understanding, and ethical considerations. The human judgment that technology can't replace.",
  },
  {
    title: "Implementation Reality",
    description:
      "Understanding real costs, timelines, and limitations. Knowing what works in practice, not just theory.",
  },
  {
    title: "Human-AI Collaboration",
    description:
      "Not just prompting, but true collaboration. Augmenting human capabilities, not replacing them.",
  },
];

const programs = [
  {
    title: "Executive Reality Check",
    label: "60-90 Minutes",
    description:
      "Leadership needs clarity, not vendor pitches. We explain what's real, what's coming, and what decisions need to be made now. No buzzwords, just actionable insights.",
  },
  {
    title: "Implementation Readiness",
    label: "Full-day Workshop",
    description:
      "Before investing in new technology, understand your team's real capabilities. We assess critical thinking, risk assessment, and implementation readiness – the skills that determine success.",
  },
  {
    title: "Agentic Workflow Design",
    label: "2-Day Intensive",
    description:
      "Learn to orchestrate complex human-AI interactions. Work with your actual use cases to design workflows that augment, not replace, your existing capabilities.",
  },
  {
    title: "Educator Workshops",
    label: "Custom Programs",
    description:
      "Help faculty understand what skills industry actually needs. Bridge the gap between academic theory and workplace reality. Develop curriculum that prepares students for real implementation.",
  },
  {
    title: "Student Bootcamps",
    label: "Multi-week Programs",
    description:
      "Intensive programs that teach abstract fundamentals and critical thinking. Students learn to work with any platform, assess risks, and understand the real economics of implementation.",
  },
  {
    title: "Professional Development",
    label: "Ongoing Programs",
    description:
      "From military skill bridge to corporate upskilling. Build competencies that last beyond the current technology cycle. Focus on principles and judgment, not just tool usage.",
  },
];

const approach = [
  {
    title: "We Teach Abstract Fundamentals",
    description:
      "Not tied to specific platforms. Skills that work regardless of which tools emerge or fade.",
  },
  {
    title: "We Focus on Critical Thinking",
    description:
      "The ability to assess outputs, identify risks, and make informed decisions about technology use.",
  },
  {
    title: "We Build Real Competencies",
    description:
      "Hands-on experience with actual workflows, real costs, and genuine implementation challenges.",
  },
  {
    title: "We Bridge Education and Industry",
    description:
      "Translating between what organizations need and what institutions teach.",
  },
];

const partners = [
  {
    title: "Universities & Colleges",
    description:
      "Higher education institutions looking to ensure their graduates have the competencies employers actually need.",
  },
  {
    title: "Forward-Thinking Enterprises",
    description:
      "Companies that understand the difference between tool training and building lasting workforce capabilities.",
  },
  {
    title: "Professional Services",
    description:
      "Consultancies and training organizations that need honest assessment and real skill development for their clients.",
  },
];

export default function Home() {
  useEffect(() => {
    const heroText = $(".heroText");

    if (!heroText.length) {
      return;
    }

    const heroSplitText = new SplitText(heroText, {
      charsClass: "char",
    });

    gsap
      .timeline({
        defaults: { duration: 0.6, stagger: 0.02, ease: "power1.out" },
      })
      .set(heroText, { opacity: 1 })
      .fromTo(
        heroSplitText.chars,
        { opacity: 0, yPercent: 15 },
        { opacity: 1, yPercent: 0 }
      );
  }, []);

  return (
    <main>
      <div className="overlay"></div>
      <section className="heroSection">
        <header className="header">
          <EdubaLogo />
          <Menu />
        </header>
        <div className="heroSection__content">
          <div className="heroText">
            Building Workforce Competencies for Agentic Workflows
          </div>
          <p className="heroSection__subtitle">
            We teach the abstract fundamentals that matter – not just how to use
            today&apos;s tools, but how to think critically about tomorrow&apos;s
            technology collaborations.
          </p>
          <a className="heroSection__cta" href="#approach">
            Explore Our Approach
          </a>
        </div>
      </section>

      <section className="reality" id="reality">
        <div className="reality__card">
          <span className="reality__label">The Reality:</span>
          <p>
            Everyone&apos;s teaching prompt engineering. But the real challenge isn&apos;t
            human-to-AI interaction in isolation – it&apos;s understanding how
            multiple humans and multiple AI systems work together. We teach the
            critical thinking and abstract understanding needed to orchestrate
            complex agentic workflows, regardless of which platforms emerge or
            fade.
          </p>
        </div>
      </section>

      <section className="mission" id="mission">
        <div className="sectionHeading">
          <h2>Two Paths, One Mission</h2>
          <p>
            Building competencies that bridge today&apos;s needs with tomorrow&apos;s
            possibilities
          </p>
        </div>
        <div className="mission__cards">
          {missionAudience.map((audience) => (
            <div className="missionCard" key={audience.title}>
              <h3>{audience.title}</h3>
              <span className="missionCard__subtitle">{audience.subtitle}</span>
              <ul>
                {audience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="missionCard__description">{audience.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="sectionHeading">
          <h2>Skills That Actually Matter</h2>
          <p>Not just using tools, but understanding systems</p>
        </div>
        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skillsCard" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="assessment" id="assessment">
        <div className="assessment__badge">Currently Piloting</div>
        <div className="assessment__card">
          <h2>Assessment &amp; Infrastructure Tools</h2>
          <p>
            We&apos;re piloting custom assessment solutions that measure what actually
            matters – not just if someone can write prompts, but if they can
            implement without burning resources. Our tools help organizations
            understand their real readiness for agentic workflows.
          </p>
          <p>
            Working with leading organizations to develop metrics and
            infrastructure that bridge the gap between capability assessment and
            actual implementation success.
          </p>
        </div>
      </section>

      <section className="programs" id="programs">
        <div className="sectionHeading">
          <h2>Workshops &amp; Programs</h2>
          <p>From executive briefings to intensive skill-building</p>
        </div>
        <div className="programs__grid">
          {programs.map((program) => (
            <div className="programCard" key={program.title}>
              <h3>{program.title}</h3>
              <span className="programCard__label">{program.label}</span>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="sectionHeading">
          <h2>Our Approach</h2>
          <p>Bridging the gap between potential and practice</p>
        </div>
        <div className="approach__grid">
          {approach.map((item, index) => (
            <div className="approachCard" key={item.title}>
              <span className="approachCard__index">{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partners" id="partners">
        <div className="sectionHeading">
          <h2>Who We Work With</h2>
          <p>Organizations committed to building real competencies</p>
        </div>
        <div className="partners__grid">
          {partners.map((partner) => (
            <div className="partnerCard" key={partner.title}>
              <h3>{partner.title}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
        <blockquote className="partners__quote">
          &ldquo;The future isn&apos;t about humans versus AI, or even humans with AI. It&apos;s
          about understanding how multiple humans and multiple AI systems
          collaborate to create value. That&apos;s what we teach.&rdquo;
        </blockquote>
      </section>

      <section className="team" id="team">
        <SectionTag text={"Meet our team"} />
        <div className="team__cards">
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/jake.jpg"
              alt="Jake"
              width={200}
              height={200}
            />
            <h3>Jake</h3>
            <p>The Ceo</p>
          </div>
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/david.jpg"
              alt="David"
              width={200}
              height={200}
            />
            <h3>David</h3>
            <p>The CTO</p>
          </div>
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/mo.png"
              alt="Mo"
              width={200}
              height={200}
            />
            <h3>Mo</h3>
            <p>The CMO</p>
          </div>
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/nick.jpeg"
              alt="Nick"
              width={200}
              height={200}
            />
            <h3>Nick</h3>
            <p>The COO</p>
          </div>
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/kay.png"
              alt="Kay"
              width={200}
              height={200}
            />
            <h3>Kay</h3>
            <p>Frontend Lead</p>
          </div>
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/paul.jpg"
              alt="Paul"
              width={200}
              height={200}
            />
            <h3>Paul</h3>
            <p>The COO</p>
          </div>
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/jon.jpeg"
              alt="Jon"
              width={200}
              height={200}
            />
            <h3>Jon</h3>
            <p>Advisor</p>
          </div>
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/claire.png"
              alt="Claire"
              width={200}
              height={200}
            />
            <h3>Claire</h3>
            <p>EA</p>
          </div>
        </div>
      </section>

      <section className="ctaSection" id="contact">
        <div className="ctaSection__content">
          <h2>Ready to Build Real Competencies?</h2>
          <p>
            Whether you&apos;re preparing students for tomorrow&apos;s workforce or
            transforming today&apos;s employees, let&apos;s discuss how we can help.
          </p>
          <a
            className="ctaSection__button"
            href="https://calendly.com/theceo-eduba"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
