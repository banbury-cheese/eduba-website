import React from "react";
import SectionTag from "./sectionTag";

const BlogCard = ({ title, desc, date, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="blogCard"
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <small>{date}</small>
    </a>
  );
};

const Blogs = () => {
  const blogData = [
    {
      title:
        "The Great AI Paradox: Why This Bubble Will Burst—And Why It Doesn’t Matter",
      desc: "I sat at my desk last week watching yet another AI startup raise billions at a mind-boggling valuation, and it...",
      date: "2025-03-03",
      link: "https://blogs.ed.ac.uk/s2670773_future-governance-kipp--futures-project-2024-25/",
    },
    {
      title: "Digital Engagement Plan for Mini-Publics: An Eduba Pilot",
      desc: "In this paper I aim to explore how minipublics or small, diverse, and deliberative groups made up of educators that can enhance not only engagement but...",
      date: "2025-01-06",
      link: "/resources/Digital_Engagement_Plan.pdf",
    },
    {
      title: "AI & Computing terms: A Quicktionary",
      desc: "Some concise definitions of key terminology you may hear us use during Eduba Labs.",
      date: "2025-01-06",
      link: "/resources/Eduba Labs - Terms Sheet.pdf",
    },
    {
      title: "Assessment ideas for an AI enabled world",
      desc: "A menu of ideas to provoke discussion and reflection around assessment approaches in higher education.",
      date: "2025-01-06",
      link: "/resources/assessment-ideas-for-an-ai-enabled-world.pptx",
    },
    {
      title: "Language Models: Not Just Word Predictors",
      desc: "We’ve all heard it. In lecture halls, tech conferences, and academic papers. Distinguished professors and industry veterans dismissively wave their...",
      date: "2025-04-18",
      link: "https://blogs.ed.ac.uk/s2670773_future-governance-kipp--futures-project-2024-25",
    },

    {
      title:
        "Redefining Expertise: How AI Changes the Starting Line Without Redrawing the Finish Line",
      desc: "In the 1980s, using a computer meant knowing command-line interfaces, troubleshooting hardware, and writing basic programs – tasks that took...",
      date: "2025-01-06",
      link: "https://blogs.ed.ac.uk/s2670773_future-governance-kipp--futures-project-2024-25/",
    },
    {
      title: "When Machines Learn Morality",
      desc: "Imagine standing before a vast, intricately woven tapestry, one that depicts the entire spectrum of life. Each thread represents an...",
      date: "2024-12-06",
      link: "https://blogs.ed.ac.uk/s2670773_future-governance-kipp--futures-project-2024-25/",
    },
    {
      title:
        "Calculating Consciousness: Ada Lovelace and the Discourse on Thinking Machines",
      desc: "In the unfolding narrative of humanities dance with mathematics and reality, the figure of Ada Lovelace stands as an emblematic...",
      date: "2024-11-26",
      link: "https://blogs.ed.ac.uk/s2670773_future-governance-kipp--futures-project-2024-25/",
    },
    {
      title: "Breaking the Mold: Generative AI and the Future of Interaction",
      desc: "When cars first replaced horse-drawn carriages, their designs still resembled the old: a box on wheels with reins swapped for...",
      date: "2024-11-24",
      link: "https://blogs.ed.ac.uk/s2670773_future-governance-kipp--futures-project-2024-25/",
    },
    {
      title: "An (Old) Conversation With ChatGPT",
      desc: "After writing my recent article: You Think, Therefore I Am I decided to take a dive into my old writings...",
      date: "2024-11-21",
      link: "https://blogs.ed.ac.uk/s2670773_future-governance-kipp--futures-project-2024-25/",
    },
    {
      title:
        "Redefining Nationhood: The Emergence and Expansion of Virtual States in the Digital Era",
      desc: "In an era where AI and digital technology blur geographical boundaries, the distinction between digital and physical realms is increasingly...",
      date: "2024-11-08",
      link: "https://blogs.ed.ac.uk/s2670773_future-governance-kipp--futures-project-2024-25/",
    },
  ];

  return (
    <section className="blogs">
      <SectionTag text={"Resources"} />
      <div className="blogs__cards">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            desc={blog.desc}
            date={blog.date}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
