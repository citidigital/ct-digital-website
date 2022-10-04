import React from 'react';
import Project1 from '../assets/Images/DesignGallery/project1_image.png';
import Project2 from '../assets/Images/DesignGallery/project2_image.png';
import Project3 from '../assets/Images/DesignGallery/project3_image.png';
import Project4 from '../assets/Images/DesignGallery/project4_image.png';

const ProjectRow = ({project, index}) => {
    const {title, summary, screenshot} = project;
    const colors = ['bg-alice-blue', 'bg-magenta', 'bg-violet']
    return (
        <div className={`md:flex w-full ${colors[index%3]} mb-10 md:pt-28 py-12 rounded-2xl`}>
            <div className='mb-10 md:mb-0'>
                <img src={screenshot} alt="Video in hero section" className=""/>
            </div>
            <div className='md:w-1/2 md:pl-13 px-6 md:pr-24'>
                <p className="text-4xl font-bold text-default-gray max-w-lg md:mb-6 mb-4 text-center md:text-left">
                {`For ${title}`} 
                </p>
                <div className="text-black text-base md:text-lg leading-7 mb-8 text-center md:text-left">{summary.split("\n").map((i,key) => {
                    return <p key={key}>{i}</p>;
                })}</div>
            </div>
        </div>
    );
}

const UIDesignPage = () => {
    const projects = [
        {
            title: 'Quantum Clinic',
            summary: 'Quantum Clinic was conceived as a spa to not just for your body but also for your DNA',
            screenshot: Project1
        },
        {
            title: 'Willis Give Dem',
            summary: 'A design for the artiste website',
            screenshot: Project2
        },
        {
            title: 'Pure Minutes',
            summary: 'A design for a website for international calls',
            screenshot: Project3
        },
        {
            title: 'Miss EKo',
            summary: 'A design for the an e-commerce website',
            screenshot: Project4
        }
    ]

    return (
        <section class="overflow-hidden text-gray-700 md:mb-20">
            <div class="container px-5 py-2 mx-auto lg:pt-15 lg:px-32 md:mt-0 mt-10">
                {projects.map((project, index) => (<ProjectRow project={project} index={index}/>))}
            </div>
        </section>
    )
}

export default UIDesignPage;
