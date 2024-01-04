import React from "react";
import { motion } from "framer-motion";
import JobResumeCard from './JobResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full h-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="h-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <JobResumeCard
            title="Sr. Software Engineer"
            subTitle="Venture Consulting Services - (2020 - Present)"
            result="USA"
            des={['Reviewed code, debugged problems, and corrected issues.', ' Developed and maintained microservices architectures using Docker, Kubernetes and OpenShift.'
              , 'Reviewed code, debugged problems, and corrected issues.', 'Developed and maintained microservices architectures using Docker, Kubernetes and OpenShift.'
              , 'Participated in requirements gathering to solidify prerequisites and determine best technical solution to meet business needs.',
              'Provided software application engineering and maintenance for development lifecycle.',
              'Lead the development and testing in terms of efficiency, scalability, maintenance, extendibility and performance-effective code.',
              'Supervised the maintenance of code quality and performance by implementing best practices, testing',
              'Supervised the maintenance of code quality and performance by implementing best practices, testing methodologies and performance optimization techniques.'
            ]}
          />
          <JobResumeCard
            title="Full Stack Developer"
            subTitle="Kallidus - (2018 - 2020)"
            result="USA & UK"
            des={[
              ' Utilized integrated development environments like Visual Studio Code and Eclipse to streamline coding and debugging processes.',
              ' Implemented Source control management using Git, facilitating efficient collaboration and ensuring effective handling of source code changes within teams.',
              ' Experience of containerization and deployment on various cloud platforms, ensuring seamless scaling and robust application performance.',
              ' Automated infrastructure, testing, and deployments using tools like Jenkins, Puppeteer, and Cypress, enhancing the speed and reliability of the development lifecycle.',
              ' Implemented deployment strategies using Jenkins and Travis, ensuring the swift packaging, testing, and deployment of the latest software releases to application servers.',
            ]}
          />
          <JobResumeCard
            title="Software Engineer"
            subTitle="FuturRx - (2016 - 2018)"
            result="USA"
            des={[
              'Leveraged React and Typescript to develop high-performance web components and applications, ensuring seamless user experiences adherence to design guidelines.',
              ' Managed and customized component libraries, utilizing Webpack and Nx to efficiently handle large-scale front-end codebases and optimize application performance.',
              ' Integrated headless content management systems into web applications, ensuring effective content delivery and smooth user interactions.',
              ' Implemented automated testing strategies using Jest, React-Testing-Library, and Cypress, guaranteeing the reliability and stability of the front-end applications.',
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
