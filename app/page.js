"use client";

import { useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { EdubaLogo } from "./components/logos";
import SectionTag from "./components/sectionTag";
import Menu from "./components/menu";

gsap.registerPlugin(SplitText);

const whatWeDo = [
  {
    title: "Build",
    description:
      "Multi-agent systems, data pipelines, production infrastructure. We've reduced 160-hour processes to 5 minutes. We know what real implementation looks like, including the costs vendors don't mention and the failures that don't make it into case studies.",
  },
  {
    title: "Teach",
    description:
      "Abstract fundamentals that work regardless of which platforms emerge or fade. We focus on critical assessment of outputs and understanding principles rather than just procedures. When your team builds the first version themselves, they understand what they're working with.",
  },
  {
    title: "Govern",
    description:
      "Risk assessment, policy frameworks, and ethics considerations. Our research measures psychological patterns in AI systems that most evaluation methods miss entirely. This is the human judgment that technology can't replace.",
  },
];

const whoWeWorkWith = [
  {
    title: "Organizations",
    description:
      "Companies moving beyond pilots into production systems with actual users and actual stakes.",
  },
  {
    title: "Education",
    description:
      "Universities and colleges bridging the gap between what's taught and what industry actually needs, preparing students for implementation reality.",
  },
  {
    title: "Research & Government",
    description:
      "Institutions where compliance matters, data is sensitive, and the cost of getting it wrong is high.",
  },
];

const engagements = [
  {
    title: "Executive Briefing",
    label: "60–90 minutes",
    description:
      "A clear-eyed look at what's real, what's coming, and what decisions need to be made now.",
  },
  {
    title: "Implementation Readiness",
    label: "Full day",
    description:
      "Before investing in new technology, understand your team's real capabilities and your organization's actual opportunities.",
  },
  {
    title: "Technical Implementation",
    label: "Scoped to need",
    description:
      "Production systems for validated problems. We build what you've already proven matters.",
  },
  {
    title: "Educator Programs",
    label: "Custom",
    description:
      "Helping faculty understand what skills industry actually needs and develop curriculum that prepares students for real implementation.",
  },
  {
    title: "Ongoing Advisory",
    label: "Monthly",
    description:
      "Strategic guidance, implementation support, and governance review on a continuing basis.",
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
          <p className="heroSection__tagline">The faces of interface</p>
          <div className="heroText">
            Understanding How Humans and AI Systems Work Together
          </div>
          <p className="heroSection__subtitle">
            We help organizations develop the critical thinking needed to
            orchestrate complex workflows, implement real systems, and govern
            what gets built.
          </p>
          <a className="heroSection__cta" href="mailto:theceo@eduba.io">
            Start a Conversation
          </a>
        </div>
      </section>

      <section className="whatWeDo" id="what-we-do">
        <SectionTag text={"What We Do"} />
        <div className="sectionHeading">
          <h2>Build. Teach. Govern.</h2>
        </div>
        <div className="whatWeDo__grid">
          {whatWeDo.map((item) => (
            <div className="whatWeDoCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reality" id="reality">
        <SectionTag text={"The Reality"} />
        <div className="reality__card">
          <p>
            Everyone&apos;s teaching prompt engineering, but that misses the
            harder problem entirely.
          </p>
          <p>
            The real challenge is understanding how multiple humans and multiple
            AI systems collaborate. How do you know when an output is wrong?
            When should you build versus buy versus skip AI altogether? What
            does implementation actually cost in money, time, and organizational
            change?
          </p>
          <p>
            These are systems questions, and they require systems thinking to
            answer.
          </p>
          <p>
            We work at the intersection of three things most organizations treat
            as separate: building technical systems, developing workforce
            capabilities, and establishing governance. In practice, they&apos;re
            inseparable. Implementation works when your team understands it,
            governance works when you helped build it, and teaching works when
            you&apos;ve actually done it yourself.
          </p>
        </div>
      </section>

      <section className="howWeWork" id="how-we-work">
        <SectionTag text={"How We Work"} />
        <div className="sectionHeading">
          <h2>Learn First. Build Right.</h2>
        </div>
        <div className="howWeWork__content">
          <p>
            We don&apos;t start by building. We start by understanding what
            actually needs to be built.
          </p>
          <p>
            Your team works with existing tools on real problems while we
            observe where things break. Most &ldquo;AI projects&rdquo;
            shouldn&apos;t be AI projects, and that&apos;s useful information.
            The problems that genuinely require engineering, we engineer. The
            result is implementation your team understands and owns.
          </p>
        </div>
      </section>

      <section className="whoWeWorkWith" id="who-we-work-with">
        <SectionTag text={"Who We Work With"} />
        <div className="sectionHeading">
          <h2>Organizations navigating real implementation</h2>
        </div>
        <div className="whoWeWorkWith__grid">
          {whoWeWorkWith.map((item) => (
            <div className="whoWeWorkWithCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="currentWork" id="current-work">
        <SectionTag text={"Current Work"} />
        <div className="sectionHeading">
          <h2>What we&apos;re building and teaching</h2>
        </div>
        <div className="currentWork__content">
          <p>
            We&apos;re building compliance systems for complex regulatory
            environments and training technical teams at companies like KPMG,
            Colgate-Palmolive, and Pacific Life. We&apos;re also piloting
            assessment tools that measure implementation readiness, looking at
            whether teams can actually ship without burning resources rather
            than just whether they can write prompts.
          </p>
          <p>
            We work with universities to develop curriculum that matches what
            employers actually need, and we run skill bridge programs that build
            capabilities lasting beyond the current technology cycle.
          </p>
        </div>
      </section>

      <section className="engagements" id="engagements">
        <SectionTag text={"Workshops & Engagements"} />
        <div className="sectionHeading">
          <h2>From briefings to implementation</h2>
        </div>
        <div className="engagements__grid">
          {engagements.map((engagement) => (
            <div className="engagementCard" key={engagement.title}>
              <h3>{engagement.title}</h3>
              <span className="engagementCard__label">{engagement.label}</span>
              <p>{engagement.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="perspective" id="perspective">
        <SectionTag text={"The Perspective"} />
        <blockquote className="perspective__quote">
          &ldquo;The future isn&apos;t about humans versus AI, or even humans
          with AI. It&apos;s about understanding how multiple humans and
          multiple AI systems collaborate to create value.&rdquo;
        </blockquote>
        <p className="perspective__followup">
          In a world where answers are cheap, questions become valuable. We
          teach people to ask better questions about what to build, when to
          build it, and whether to build it at all.
        </p>
      </section>

      <section className="ctaSection" id="contact">
        <SectionTag text={"Start a Conversation"} />
        <div className="ctaSection__content">
          <h2>Let&apos;s talk</h2>
          <p>
            Email: <a href="mailto:theceo@eduba.io">theceo@eduba.io</a>
          </p>
          <a
            className="ctaSection__button"
            href="https://calendly.com/theceo-eduba"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
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
                href="mailto:theceo@eduba.io"
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
            EDUBA · The faces of interface
            <br />
            &copy; 2025 Eduba
          </div>
        </div>
      </section>
    </main>
  );
}
