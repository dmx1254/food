import React from "react";
import headDesc from "../assets/other/contact.png";

const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex relative w-full">
        <img
          src={headDesc}
          alt="contact"
          className="w-full h-[500px] bg-cover bg-center bg-no-repeat"
        />
        <span className=" text-6xl font-bold text-[#00c893] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          Contact
        </span>
      </div>
      <div className="flex w-full mx-10 mb-60 mt-12 items-center justify-between">
        <div className="flex flex-col items-center gap-2 p-4">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#00c893] text-6xl"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span className="text-lg font-bold">Enoyer nous un email</span>
          <span className="text-base max-w-[350px]">
            <a
              href="mailto:sylla@gmail.com"
              className="text-base text-[#00c893]"
            >
              sylla@gmail.com
            </a>{" "}
            développez-vous de manière interactive pour une liaison totale
            centrée sur les processus.
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#00c893] text-6xl"
          >
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="text-lg font-bold">Appelez nous</span>
          <span className="text-base max-w-[350px]">
            <a href="tel:+21264545986" className="text-base text-[#00c893]">
              +21264545986
            </a>{" "}
            développez-vous de manière interactive pour une liaison totale
            centrée sur les processus.
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#00c893] text-6xl"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="text-lg font-bold">Emplacement</span>
          <span className="text-base max-w-[350px]">
            Cecilia Chapman, 561-4535 Nulla LA, United States 96522
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
