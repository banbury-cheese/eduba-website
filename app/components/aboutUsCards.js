import React from "react";

const AboutUsCard = ({ title, description, buttons }) => {
  return (
    <div className="aboutUs__card">
      <div className="aboutUs__card-title">{title}</div>
      <div className="aboutUs__card-desc">{description}</div>
      <div className="aboutUs__card-buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className="aboutUs__card-button"
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

const AboutUsCards = () => {
  const cardsData = [
    {
      title: "Workshops & Labs",
      description:
        "Interactive spaces where educators experiment with Al in real teaching contexts. These arent just training sessions-they are living laboratories where teachers directly shape how Al serves their educational objectives.",
      buttons: [
        { text: "Join a Workshop", onClick: () => alert("Coming Soon!") },
      ],
    },
    {
      title: "Adaptive Al Tools",
      description:
        "We build dynamic dialogue systems and interfaces that evolve with educator feedback. Our structured conversations help students develop critical thinking while making their learning process visible to teachers.",
      buttons: [
        {
          text: "Gen UI",
          onClick: () =>
            window.open("https://dynamic-ui.azurewebsites.net/", "_blank"),
        },
        {
          text: "Scribe",
          onClick: () =>
            window.open(
              "https://nice-wave-0533cdb0f.4.azurestaticapps.net/chat/c67ee080-b52c-4de2-9b20-acbca5cf5ca6",
              "_blank"
            ),
        },
      ],
    },
    {
      title: "Teacher-Led Governance",
      description:
        "Education technology should answer to educators. We have developed governance models that give teachers real decision-making power in how Al is implemented in their schools and institutions.",
      buttons: [
        {
          text: "Learn More",
          onClick: () =>
            window.open("/resources/Digital_Engagement_Plan.pdf", "_blank"),
        },
      ],
    },
  ];

  return (
    <div className="aboutUs__cards">
      {cardsData.map((card, index) => (
        <AboutUsCard
          key={index}
          title={card.title}
          description={card.description}
          buttons={card.buttons}
        />
      ))}
    </div>
  );
};

export default AboutUsCards;
