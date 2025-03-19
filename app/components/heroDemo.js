import Image from "next/image";
import { useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";

const HeroDemo = () => {
  useEffect(() => {
    const demo = $(".heroDemoVideo");
    const demoButton = $(".heroDemoVideo__bookDemo");
    const demoButtonRect = $(".heroDemoVideo__bookDemo-rect");
    const demoButtonText = $(".heroDemoVideo__bookDemo-text");
    const demoButtonPlayIcon = $(".heroDemoVideo__bookDemo-playIcon");
    const demoShadow = $(".heroDemoVideo__shadow");
    const demoImg = $(".heroDemoVideo__img");

    const ImgHoverAni = gsap.timeline({ paused: true }).to(
      demoShadow,
      {
        duration: 0.2,
        ease: "power1.inOut",
        transformOrigin: "center",
        y: "-=3px",
        x: "-=3px",
      },
      0
    );

    const ImgClickAni = gsap.timeline({ paused: true }).to(
      demo,
      {
        duration: 0.2,
        ease: "power1.inOut",
        transformOrigin: "center",
        scale: 0.99,
      },
      0
    );

    const buttonHoverAni = gsap.timeline({ paused: true }).to(
      demoButtonPlayIcon,
      {
        duration: 0.2,
        ease: "power1.inOut",
        fill: "#ECD1A9",
      },
      0
    );

    demo.on("mouseenter", () => {
      ImgHoverAni.play();
    });

    demo.on("mouseleave", () => {
      ImgHoverAni.reverse();
    });

    demoButton.on("mouseenter", () => {
      buttonHoverAni.play();
    });

    demoButton.on("mouseleave", () => {
      buttonHoverAni.reverse();
    });

    demo.on("mousedown", () => {
      ImgClickAni.play();
      setTimeout(() => {
        window.open("https://www.youtube.com/watch?v=THQH6Uc6PNU", "_blank");
      }, 200);
    });

    demo.on("mouseup", () => {
      ImgClickAni.reverse();
    });
  }, []);

  return (
    <div className="heroDemoVideo">
      <div className="heroDemoVideo__bookDemo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="209"
          height="62"
          viewBox="0 0 209 62"
        >
          <g transform="translate(-1391 -776)">
            <g
              className="heroDemoVideo__bookDemo-rect"
              transform="translate(1391 776)"
              fill="#b13f2d"
              stroke="#000"
              strokeWidth="2"
            >
              <rect width="209" height="62" rx="10" stroke="black" />
            </g>
            <g id="Group_150" data-name="Group 150">
              <text
                className="heroDemoVideo__bookDemo-text"
                transform="translate(1460 814)"
                fill="#f7f5ee"
                fontSize="21"
                fontFamily="Bookish"
              >
                Watch Demo
              </text>
              <g className="heroDemoVideo__bookDemo-playIcon" fill="#e76345">
                <ellipse
                  id="Ellipse_15"
                  data-name="Ellipse 15"
                  cx="15"
                  cy="14.5"
                  rx="15"
                  ry="14.5"
                  transform="translate(1417 792)"
                />
                <path
                  id="play-svgrepo-com"
                  d="M5.92,18.5a1.382,1.382,0,0,0,.642,1.2,1.513,1.513,0,0,0,.753.2,1.376,1.376,0,0,0,.62-.155L19.121,14.16a1.52,1.52,0,0,0,.554-.509,1.207,1.207,0,0,0,.2-.753,1.625,1.625,0,0,0-.2-.731,1.332,1.332,0,0,0-.554-.509L7.936,6.075a1.376,1.376,0,0,0-.62-.155,1.6,1.6,0,0,0-.753.2,1.348,1.348,0,0,0-.642,1.2V18.5Z"
                  transform="translate(1420.184 793.592)"
                  fill="#b13f2d"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="heroDemoVideo__shadow"></div>
      <Image
        className="heroDemoVideo__img"
        src="/assets/demoPhoto.png"
        alt="Demo Photo"
        width={800}
        height={450}
      />
    </div>
  );
};

export default HeroDemo;
