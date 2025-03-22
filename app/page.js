"use client";

import Image from "next/image";
import { EdubaLogo } from "./components/logos";
import SectionTag from "./components/sectionTag";
import Menu from "./components/menu";
import HeroDemo from "./components/heroDemo";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import AboutUsCards from "./components/aboutUsCards";
import Blogs from "./components/blogs";
gsap.registerPlugin(SplitText);

export default function Home() {
  return (
    <main>
      <div className="overlay"></div>
      <section className="heroSection">
        <header className="header">
          <EdubaLogo />
          <Menu />
        </header>
        <div className="heroText">
          <span>Educator first,</span> real time <br /> Learning environments{" "}
          <br /> Shaped by you.
        </div>
        <HeroDemo />
      </section>
      <section className="aboutUs">
        <SectionTag text={"What we are building"} />
        <div className="aboutUs__body">
          We’re starting with AI because it’s changing education faster than any
          tool since writing itself. Like those first teachers in their houses
          of tablets, you understand something deeper about learning than any
          algorithm or app. Heres our three part approach:
        </div>
        <AboutUsCards />
      </section>
      <Blogs />
      <section className="team">
        <SectionTag text={"Meet our team"} />
        <div className="team__cards">
          <div className="teamCard"></div>
          <div className="teamCard"></div>
          <div className="teamCard"></div>
          <div className="teamCard"></div>
          <div className="teamCard"></div>
          <div className="teamCard"></div>
          <div className="teamCard"></div>
          <div className="teamCard"></div>
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
                    fillule="evenodd"
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
            © 2025 EDUBA – The faces of interfaces
          </div>
        </div>
        <div className="footer__right">
          <b>For Inquiries:</b> <br /> Have questions, ideas, or feedback? We’d
          love to hear from you. Reach us at: <br />{" "}
          <a href="mailto:contact@eduba.io">contact@eduba.io</a>
        </div>
      </section>
    </main>
  );
}
