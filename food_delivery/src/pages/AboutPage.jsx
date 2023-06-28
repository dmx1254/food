import React from "react";

import headAbout from "../assets/other/contact.png";
import about from "../assets/other/about.jpg";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex relative w-full">
        <img
          src={headAbout}
          alt="contact"
          className="w-full h-[500px] bg-cover bg-center bg-no-repeat"
        />
        <span className=" text-6xl font-bold text-[#00c893] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          A propos
        </span>
      </div>
      <div className="flex w-full px-12 my-12 items-start justify-between gap-8">
        <div className="flex flex-col items-start w-1/2 ">
          <h2 className="text-2xl font-semibold w-full mb-2">
            Welcome to our EcommerSio
          </h2>
          <p className="text-lg w-full">
            Holisticly seize parallel metrics and functional ROI. Seamlessly
            revolutionize error-free internal or "organic" sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal. Dynamically embrace
            diverse customer service and installed base paradigms. Credibly
            seize enterprise-wide experiences for end-to-end data.
            Professionally brand flexible alignments and cost effective
            architectures. Enthusiastically incentivize seamless communities
            with seamlessly facilitate revolutionary metrics with strategic
            theme areas.
          </p>
          <div className="flex items-center justify-between w-full mt-12 px-8">
            <div className="flex flex-col items-start gap-2">
              <p className="text-4xl font-extrabold">10K</p>
              <p className="text-lg font-bold">Listed Products</p>
              <p className="text-base">
                Dynamically morph team driven partnerships after vertical.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-4xl font-extrabold">8K</p>
              <p className="text-lg font-bold">Lovely Customer</p>
              <p className="text-base">
                Competently productize virtual models without performance.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-full bg-cover bg-center bg-no-repeat rounded"
            src={about}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
