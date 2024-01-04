import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Just works"
          des="Justworks Makes Businesses Run Smoother with a User-Friendly Platform and Expert Support. Justworks Software Automates HR for Both Employees and Admins"
          src={projectOne}
          link="https://www.justworks.com"
        />
        <ProjectsCard
          title="Kallidus"
          des="Automate HR, improve compliance, and focus on your people, with a customizable HRIS that’s designed for scaling businesses."
          src={projectTwo}
          link="https://www.kallidus.com/product/sapling-hris/"
        />
        <ProjectsCard
          title="FutureRx"
          des=" A game-changing modular platform solution designed to close care gaps, complete interventions, and health assessments by using thousands of providers and health professionals"
          src={projectThree}
          link="https://futurerx.com/"
        />
      </div>
    </section>
  );
}

export default Projects