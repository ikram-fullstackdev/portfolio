import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="As a developer, I bring a wealth of technical expertise and a strategic mindset to the table. My proficiency in various programming languages and frameworks empowers me to craft innovative solutions"
         
        />
        <Card
          title="Desktop App Development"
          des="As a developer, I offer specialized services in desktop app development using Electron, C#, .NET, VB.NET. With a deep understanding of these frameworks, I can transform your concepts to applications."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Development"
          des="As a developer, I offer specialized services in web development With a deep understanding of frameworks, I can transform your concepts to applications."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="As a developer, I offer specialized services in app development using Flutter and React Native. 
          With a deep understanding of these cross-platform frameworks, I can transform your concepts into high-quality 
          mobile applications."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design"
          des="As a developer with a keen eye for design, I offer services in UI/UX design. 
          Beyond crafting elegant and intuitive user interfaces, I focus on creating engaging user experiences"
          icon={<SiAntdesign />}
        />
        <Card
          title="Cloud & Hosting Websites"
          des="As a seasoned developer, I specialize in offering comprehensive services related to website hosting and cloud solutions. With expertise in platforms such as Heroku, Netlify, AWS, and Azure"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features