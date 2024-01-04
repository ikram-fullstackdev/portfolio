import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Comsats University (2012 - 2016)"
            result="3.43/4"
            des="I studied Computer Science at COMSATS University, where I gained proficiency in various programming
             languages such as Java, C, and learned essential concepts in Object-Oriented Programming (OOP), Data Structures, Computer Graphics, and Web Development."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="International College (2010 - 2012)"
            result="4/5"
            des="I completed my Intermediate in Computer Science (ICS) where I acquired a strong foundation in computer fundamentals and delved into the intricacies of C Programming. This educational journey equipped me with essential knowledge in computer science, laying the groundwork for understanding core concepts and building a solid programming skillset."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Government Secondary School (2008 - 2010)"
            result="4.25/5"
            des="During my secondary school education, I focused on building 
            a well-rounded academic foundation. Engaging in a diverse curriculum, 
            I developed critical thinking skills and a thirst for knowledge. Subjects 
            such as mathematics, science, and literature provided a 
            comprehensive understanding of various disciplines."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
