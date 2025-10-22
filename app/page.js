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
            today&apos;s tools, but how to think critically about
            tomorrow&apos;s technology collaborations.
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
            Everyone&apos;s teaching prompt engineering. But the real challenge
            isn&apos;t human-to-AI interaction in isolation – it&apos;s
            understanding how multiple humans and multiple AI systems work
            together. We teach the critical thinking and abstract understanding
            needed to orchestrate complex agentic workflows, regardless of which
            platforms emerge or fade.
          </p>
        </div>
      </section>

      <section className="mission" id="mission">
        <div className="sectionHeading">
          <h2>Two Paths, One Mission</h2>
          <p>
            Building competencies that bridge today&apos;s needs with
            tomorrow&apos;s possibilities
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
            We&apos;re piloting custom assessment solutions that measure what
            actually matters – not just if someone can write prompts, but if
            they can implement without burning resources. Our tools help
            organizations understand their real readiness for agentic workflows.
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
          &ldquo;The future isn&apos;t about humans versus AI, or even humans
          with AI. It&apos;s about understanding how multiple humans and
          multiple AI systems collaborate to create value. That&apos;s what we
          teach.&rdquo;
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
              src="/assets/team-pfp/matthew.png"
              alt="Matthew"
              width={200}
              height={200}
            />
            <h3>matthew</h3>
            <p>CRO</p>
          </div>
          <div className="teamCard">
            <Image
              src="/assets/team-pfp/kaleb.png"
              alt="Kaleb"
              width={200}
              height={200}
            />
            <h3>Kaleb</h3>
            <p>Business Development</p>
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
            Whether you&apos;re preparing students for tomorrow&apos;s workforce
            or transforming today&apos;s employees, let&apos;s discuss how we
            can help.
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

      <section className="footer">
        <div className="footer__left">
          <div className="footer__left-top">
            <div className="footer__left-top__edubaLogo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="139.591"
                height="38.553"
                viewBox="0 0 139.591 38.553"
              >
                <g
                  id="Group_186"
                  data-name="Group 186"
                  transform="translate(-15.911 -16)"
                >
                  <g
                    id="Group_79"
                    data-name="Group 79"
                    transform="translate(15.911 16)"
                  >
                    <path
                      id="Path_14"
                      data-name="Path 14"
                      d="M34.618-160.031c-.324,6.151-3.237,11.331-9.5,11.331H15.356v-19.532h3.237c5.558,0,7.446,2.914,7.716,7.662h.27v-15.647h-.27c-.27,4.8-2.158,7.716-7.716,7.716H15.356V-185.93h7.662c6.259,0,9.065,3.723,9.55,9.227h.27v-9.5H5.32v.27h4.856v37.23H5.32v.27H34.888v-11.6Z"
                      transform="translate(-5.32 186.444)"
                      fill="#264350"
                    />
                    <path
                      id="Path_15"
                      data-name="Path 15"
                      d="M21.075-186.2H5.32v.27h4.91v37.23H5.32v.27H21.075c16.673,0,21.259-10.036,21.259-18.885C42.334-176.218,37.748-186.2,21.075-186.2Zm0,37.5H15.356v-37.23h5.719c14.029,0,15.809,10.791,15.809,18.615C36.885-159.546,35.1-148.7,21.075-148.7Z"
                      transform="translate(21.658 186.444)"
                      fill="#264350"
                    />
                    <path
                      id="Path_16"
                      data-name="Path 16"
                      d="M41.417-186.2H31.381v.27h4.856v25.468c0,7.716-4.263,12.248-11.709,12.248-6.583,0-9.119-4.424-9.119-12.464V-185.93h4.856v-.27H5.32v.27h4.91v25.252c0,9.6,5.4,12.788,13.759,12.788,7.446,0,12.518-4.047,12.518-12.572V-185.93h4.91Z"
                      transform="translate(52.085 186.444)"
                      fill="#264350"
                    />
                    <path
                      id="Path_17"
                      data-name="Path 17"
                      d="M22.154-168.772c6.205-.54,10.414-3.076,10.414-8.363,0-6.8-5.288-9.065-13.759-9.065H5.32v.27h4.91v37.23H5.32v.27H20.428c9.766,0,14.622-4.317,14.622-10.414C35.05-165.211,29.762-168.34,22.154-168.772ZM18.809-185.93c7.23,0,8.579,3.777,8.579,8.795,0,4.37-1.888,8.363-8.309,8.363H15.41V-185.93Zm1.4,37.23h-4.8v-19.856h4.8c7.284,0,9.119,4.64,9.119,9.712C29.331-154.474,28.737-148.7,20.212-148.7Z"
                      transform="translate(81.295 186.444)"
                      fill="#264350"
                    />
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M29.174-150.184,15.092-188.062h-.378L.739-150.184h-3.4v.27H5.056v-.27H1.063l4.64-12.68H19.3l4.694,12.68H19.139v.27H34.085v-.27ZM5.811-163.134l6.637-18.022,6.745,18.022Z"
                      transform="translate(105.506 188.062)"
                      fill="#264350"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="footer__left-socials">
              <a
                className="footer__left-socials__linkedin"
                href="https://www.linkedin.com/company/edu-ba/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.509"
                  height="19.509"
                  viewBox="0 0 19.509 19.509"
                >
                  <path
                    id="linkedin-svgrepo-com"
                    d="M0,8.055V22.643A2.438,2.438,0,0,0,2.461,25.1H17.049a2.535,2.535,0,0,0,1.729-.732,2.358,2.358,0,0,0,.732-1.729V8.055a2.438,2.438,0,0,0-2.461-2.461H2.461a2.361,2.361,0,0,0-1.729.732A2.531,2.531,0,0,0,0,8.055ZM2.637,9.987a1.752,1.752,0,0,1,1.7-1.758A1.782,1.782,0,0,1,6.094,9.987a1.738,1.738,0,0,1-1.758,1.729A1.707,1.707,0,0,1,2.637,9.987Zm4.716,12.04V13.093a.407.407,0,0,1,.352-.381h2.49c.352,0,.352.411.352.674a3.409,3.409,0,0,1,2.549-.879c2.285,0,3.749,1.084,3.749,3.486v6.035a.383.383,0,0,1-.352.381H13.914a.382.382,0,0,1-.352-.381V16.579c0-.908-.263-1.406-1.289-1.406-1.289,0-1.611.849-1.611,1.992v4.863a.414.414,0,0,1-.411.381H7.7a.437.437,0,0,1-.352-.381Zm-4.658,0V13.093a.407.407,0,0,1,.352-.381H5.6a.353.353,0,0,1,.381.381v8.934a.388.388,0,0,1-.381.381H3.046a.407.407,0,0,1-.352-.381Z"
                    transform="translate(0 -5.594)"
                    fill="#264350"
                  />
                </svg>
              </a>
              <a
                className="footer__left-socials__insta"
                href="https://www.instagram.com/lostandlucky/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.548"
                  height="21.183"
                  viewBox="0 0 21.548 21.183"
                >
                  <path
                    id="instagram-svgrepo-com"
                    d="M47.288,84.962c-2.619,0-6.345-.132-8.83-.132-4.647,0-5.909-2.749-5.909-6.244s.069-7.36.069-8.685c0-3.926,1.739-6.107,6.048-6.107,1.594,0,7.589-.015,9.629-.015,3.921,0,5.8,1.619,5.8,6.36,0,1.17-.086,3.36-.086,9.434C54.012,83.394,52.207,84.962,47.288,84.962ZM43.354,68.833c-7.315,0-7.667,11.132.124,11.132C50.6,79.965,50.641,68.833,43.354,68.833Zm6.612-2.206a1.6,1.6,0,1,0,.038,3.2A1.6,1.6,0,0,0,49.966,66.627Z"
                    transform="translate(-32.55 -63.78)"
                    fill="#264350"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="footer__left-socials__email"
                href="mailto:contact@eduba.io"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.414"
                  height="20.345"
                  viewBox="0 0 24.414 20.345"
                >
                  <g id="layer1" transform="translate(-3 -294.063)">
                    <path
                      id="rect4592"
                      d="M5.034,5a2.028,2.028,0,0,0-1.7.926L14.488,17.084a.993.993,0,0,0,1.438,0L27.084,5.926A2.028,2.028,0,0,0,25.379,5ZM3,8.473V23.31a2.03,2.03,0,0,0,2.034,2.034H25.379a2.03,2.03,0,0,0,2.034-2.034V8.473L17.364,18.522a3.067,3.067,0,0,1-4.315,0Z"
                      transform="translate(0 289.063)"
                      fill="#264350"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer__left-bottom">
            &copy; 2025 EDUBA &ndash; The faces of interfaces
          </div>
        </div>
        <div className="footer__right">
          <b>For Inquiries:</b> <br /> Have questions, ideas, or feedback?
          We&apos;d love to hear from you. Reach us at: <br />{" "}
          <a href="mailto:contact@eduba.io">contact@eduba.io</a>
        </div>
      </section>
    </main>
  );
}
