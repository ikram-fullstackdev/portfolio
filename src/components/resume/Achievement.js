import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Freelance Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fiver Freelancer"
            subTitle="Fiver Freelancer"
            result="USA & Canada"
            des="On Fiverr, my experience in Java programming has been instrumental in crafting custom applications that cater to specific client needs. I have successfully employed my C#, java, C skills to develop dynamic and responsive software, contributing to the satisfaction of clients seeking tailored solutions. Additionally, my proficiency in C programming has allowed me to deliver high-quality code, meeting and often exceeding the expectations of clients within the Fiverr community."
          />
          <ResumeCard
            title="Web Developer on upwork"
            subTitle="Upwork Freelancer"
            result="USA & Canada"
            des="In my experience on Upwork, I've leveraged my expertise in Java programming to develop customized applications that address the unique requirements of diverse clients. Utilizing my skills in C#, I've crafted dynamic and responsive software, contributing to the success of various freelance projects on the Upwork platform. Moreover, my proficiency in C programming has allowed me to consistently deliver high-quality code, meeting the expectations of clients and establishing a positive reputation within the Upwork community."
          />
          <ResumeCard
            title="Web developer on People Per Hour"
            subTitle="People Per Hour Freelancer"
            result="USA & Canada"
            des="On PeoplePerHour, my journey has been defined by applying my Java programming skills to create tailored applications that fulfill the specific needs of clients. Through my expertise in C#, I've contributed to the development of dynamic and responsive software, adding value to freelance projects on the PeoplePerHour platform. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
