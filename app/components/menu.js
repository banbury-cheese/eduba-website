import React, { useEffect } from "react";
import { BookDemoLogo, GenUILogo, ScribeLogo } from "./logos";
import $ from "jquery";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const MenuButton = ({ className, title, desc, IconComponent, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`menuButton ${className}`}
    >
      <div className="menuButton__logo">
        <IconComponent />
      </div>
      <div className="menuButton__content">
        <div className="menuButton__content-title h-effect">
          <div className="h-item menu-btn_text ">
            <span className="word">{title}</span>
          </div>
          <div className="h-item menu-btn_text ">
            <span className="word">{title}</span>
          </div>
        </div>
        <div className="menuButton__content-desc">{desc}</div>
      </div>
    </a>
  );
};

const Menu = () => {
  useEffect(() => {
    let stdDuration = 0.8;

    $(".menuButton").each(function () {
      var texts = $(this).find(".h-item");
      var logo = $(this).find(".blueCircle");

      let text1 = new SplitText(texts[0], {
        charsClass: "char",
      });

      let text2 = new SplitText(texts[1], {
        charsClass: "char",
      });

      let menuTextHoverAni = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.5, stagger: 0.025, ease: "power1.out" },
        })
        .to(text1.chars, {
          yPercent: -100,
          opacity: 0,
        })
        .fromTo(
          text2.chars,
          { opacity: 0 },
          {
            yPercent: -100,
            opacity: 1,
          },
          0
        )
        .timeScale(1);

      const menuHoverLogoAni = gsap.fromTo(
        logo,
        { fill: "#264350" },
        {
          paused: true,
          fill: "#e76345",
          duration: 0.2,
        },
        0
      );
      const clickAni = gsap.fromTo(
        $(this),
        { scale: "1" },
        {
          paused: true,
          scale: "0.95",
          ease: "power2.inOut",
          duration: 0.2,
          transformOrigin: "center",
        },
        0
      );

      $(this).on("mouseenter", () => {
        menuTextHoverAni.restart();
        menuHoverLogoAni.play();
      });

      $(this).on("mouseleave", () => {
        menuHoverLogoAni.reverse();
      });

      $(this).on("mousedown", () => {
        clickAni.play();
      });

      $(this).on("mouseup", () => {
        clickAni.reverse();
      });
    });
  }, []);

  return (
    <div className="menu">
      <MenuButton
        className="launchScribe"
        title="Scribe"
        desc="Collaborate"
        link={
          "https://nice-wave-0533cdb0f.4.azurestaticapps.net/chat/c67ee080-b52c-4de2-9b20-acbca5cf5ca6"
        }
        IconComponent={ScribeLogo}
      />
      <MenuButton
        className="launchGenUI"
        title="GenUI"
        desc="Playground"
        link={"https://dynamic-ui.azurewebsites.net/"}
        IconComponent={GenUILogo}
      />
      <MenuButton
        className="bookDemo"
        title="Book A Demo"
        desc="Get Started"
        link={"https://calendly.com/theceo-eduba"}
        IconComponent={BookDemoLogo}
      />
    </div>
  );
};

export default Menu;
