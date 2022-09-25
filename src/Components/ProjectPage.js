import React from 'react';
import Header from './Header';
import SmartMockups from '../assets/Images/smartmockups.png';
import TabMockups from '../assets/Images/tabmockups.png';
import DesktopMockups from '../assets/Images/desktopmockups.png';
import {ReactComponent as PaperPlaneRight} from '../assets/PaperPlaneRight.svg';
import Footer from './Footer';

const Projectpage = () => {
    const project = {
        id: 1,
        name: 'Pure Minutes',
        description: 'Pure Minutes is a leading provider of international prepaid calling and Top Up mobile phone payments. \n \n Pure Minutes makes international calling affordable and easy, eliminating the need for expensive international mobile plans and deceptive calling cards.\n\nWith Pure Minutes, subscribers are guaranteed low rates for all destinations - no gimmicks, hassles, or fine print! With  Pure Minutes you can keep track of your friends and families phone accounts, manage  bills, add credit, and even earn free credit towards phone calls. Sign up is free\n\n When you sign up  you will receive a referral code on your profile to send to friends and family. Each person who signs up after you using your code will unlock bonus minutes and other rewards for both parties!',
        objective: 'The goal of creating this redesign of the website was to build a better experience and interface to provide easy navigation for new and existing users',
        challenges: [
            {
                title: 'Live Customer Data',
                description: 'In order to be able to build a better and imporved experience for the users we need access to live customer data. This will serve as a guide as to what the users use the most and what they will like to access more freely. This typically feeds into the product research process'
            },
            {
                title: 'Access To Source Code',
                description: 'During the implimentation of the resdesign, the absense of documentation gave rise to a limitation of migrating the code to the exisiting code base '
            }
        ],
        solutions: [
            {
                title: 'Card Sorting',
                description: 'In order to prioritise the user needs and aid our UX research process we has the features listed and had potential users/Users arrange features according to priority'
            },
            {
                title: 'Improved Dashboard',
                description: 'The improvement of the dashboard was tested after design using the prototype with users to assertain if it aided smoother navigation. Did it? Yes it did!'
            }
        ],
        mockups: {
            desktop: DesktopMockups,
            tablet: TabMockups,
            mobile: SmartMockups,
        },
        feedback: 'I genuinely want to work with you again.',
        owner: {
            name: 'Illara De Plano',
            role: 'Independent Contractor for  Pure MInutes'
        },
        colors: [
            {
                name:'Primary Blue',
                code: '#063C5C',
                alias: 'primary'
            },
            {
                name:'Secondary Blue',
                code: '#1D8BCC',
                alias: 'secondary'
            },
            {
                name:'popColor',
                code: '#DCD6CF',
                alias: 'popColor'
            }
        ]
    };

    return (
        <div className='project-page'>
            <Header />
            <section className='description relative md:py-4'>
                <div className='absolute w-full h-8.2'>
                    <div id='description-bg' className='-top-6'></div>
                </div>
                
                <div className="relative max-w-layout mx-auto md:pl-2 pl-4.5 pr-5 md:pt-32 pt-6">
                    <div className='md:w-9/10 lg:w-8/10 mx-auto relative'>
                        <div className="text-right">
                            <div className="hidden rounded-full ellipse23 md:inline-block absolute right-14 -top-16"></div>  
                        </div>
                        <div className='md:flex md:mr-5 md:ml-3'>
                            <div className='md:w-1/2'>
                                <p className="text-4xl font-bold text-default-gray max-w-lg mb-6 text-center md:text-left">
                                    {project.name}
                                </p>
                                <div className="text-left relative">
                                    <div className="hidden rounded-full ellipse24 md:inline-block absolute -left-6 top-16"></div>  
                                </div>
                            </div>
                            <div className='md:w-1/2'>
                                <p className="text-4xl font-bold text-default-gray max-w-lg mb-6 text-center md:text-left">
                                Overview &#38; Context 
                                </p>
                                <div className="project-description text-default-gray text-base md:text-lg leading-7 mb-8 text-center md:text-left">{project.description.split("\n").map((i,key) => {
                                    return <p key={key}>{i}</p>;
                                })}</div>
                            </div>
                        </div>
                        <div className='mockups relative md:flex'>
                            <img src={project.mockups.mobile} alt="Mockups on mobile phone" className="md:absolute top-20 -left-56"/>
                            <img src={project.mockups.tablet} alt="Mockups on tablet" className="md:absolute right-32 -top-22"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className='objectives relative md:py-4 md:pb-28'>
                <div className="relative max-w-layout mx-auto md:pl-2 pl-4.5 pr-5">
                    <div className='md:w-9/10 lg:w-8/10 mx-auto relative'>
                        <div className='md:flex md:mr-5 md:ml-3'>
                            <div className='md:w-1/2'>
                                <p className="text-4xl font-bold text-default-gray max-w-lg mb-6 text-center md:text-left">
                                    Goals &#38; Objectives
                                </p>
                            </div>
                            <div className='md:w-1/2 md:mb-0 mb-20'>
                                <p className="text-4xl font-bold text-default-gray max-w-lg mb-6 text-center md:text-left">
                                {`For ${project.name}`} 
                                </p>
                                <div className="project-description text-default-gray text-base md:text-lg leading-7 mb-8 text-center md:text-left">{project.objective.split("\n").map((i,key) => {
                                    return <p key={key}>{i}</p>;
                                })}</div>

                                <div className='text-center'>
                                    <button class="rounded-md bg-newport-blue text-white px-9 py-4">View Live Website</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="desktop-mockup md:py-4 min-h-hero md:flex items-center py-6">
                <div className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5">
                    <img src={project.mockups.desktop} alt="Mockups on Desktop" className="mx-auto"/>
                </div>
            </section>

            <section className='challenges relative py-4 md:pt-28 md:mt-0 mt-10'>
                <div className="relative max-w-layout mx-auto md:pl-2 pl-4.5 pr-5">
                    <div className='md:w-9/10 lg:w-8/10 mx-auto relative md:pb-21 border-solid border-b-gray border-b-2'>
                        <div className='md:flex md:mr-5 md:ml-3'>
                            <div className='md:w-1/2'>
                                <p className="text-4xl font-bold text-default-gray max-w-lg mb-6 text-center md:text-left">
                                    Challenges
                                </p>
                            </div>
                            <div className='md:w-1/2'>
                                {project.challenges.map((challenge, index) => (<>
                                    <div className='flex items-center'>
                                        <PaperPlaneRight />
                                        <p className="text-2xl font-bold ml-1.5 text-default-gray max-w-lg">
                                            {challenge.title} 
                                        </p>
                                    </div>
                                    
                                    <p className="text-default-gray text-base md:text-lg leading-7 mt-4 mb-9 ml-7.5">{challenge.description}</p>
                                </>))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='solutions relative py-4 md:pt-28'>
                <div className="relative max-w-layout mx-auto md:pl-2 pl-4.5 pr-5">
                    <div className='md:w-9/10 lg:w-8/10 mx-auto relative md:pb-21'>
                        <div className='md:flex md:mr-5 md:ml-3'>
                            <div className='md:w-1/2'>
                                <p className="text-4xl font-bold text-default-gray max-w-lg mb-6 text-center md:text-left">
                                    Solution(s)
                                </p>
                            </div>
                            <div className='md:w-1/2'>
                                {project.solutions.map((solution, index) => (<>
                                    <div className='flex items-center'>
                                        <PaperPlaneRight />
                                        <p className="text-2xl font-bold ml-1.5 text-default-gray max-w-lg">
                                            {solution.title} 
                                        </p>
                                    </div>
                                    
                                    <p className="text-default-gray text-base md:text-lg leading-7 mt-4 mb-9 ml-7.5">{solution.description}</p>
                                </>))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='results relative py-4 md:pt-28'>
                <div className='absolute w-full h-full'>
                    <div id='results-bg' className='md:-top-30 -top-10'></div>
                </div>
                <div className="relative max-w-layout mx-auto md:pl-2 pl-4.5 pr-5">
                    <div className='md:w-9/10 lg:w-8/10 mx-auto relative md:pb-21 md:mb-28'>
                        <p className="text-4.5xl font-bold text-default-gray max-w-lg md:mb-16 mb-10 text-center md:text-left">
                            Design Results
                        </p>
                        <div className='md:flex justify-between mb-16'>
                            <div className='md:w-2.7/10 md:mb-0 mb-10'>
                                <div className='border-solid border-r-2 border-r-gray pr-2'>
                                    <p className='text-2xl text-grayish-blue text-left mb-6'>Font Family</p>
                                    <p className='text-3.5xl text-grayish-blue text-left font-extrabold'>Avenir Font Family</p>
                                </div>
                            </div>
                            <div className='md:w-5/10 flex items-center space-x-10'>
                                <div>
                                    <p className='text-8xl font-extrabold text-grayish-blue text-left'>Aa</p>
                                </div>
                                <div className='text-2xl text-grayish-blue text-left'>
                                    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                    <p className='my-4'>abcdefghijklmnopqrstuvwxyz</p>
                                    <p>1234567890()@$</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex justify-between'>
                            <div className='md:w-2.7/10'>
                                <div className='border-solid border-r-2 border-r-gray pr-2 md:mb-0 mb-10'>
                                    <p className='text-2xl text-grayish-blue text-left mb-6'>Colours </p>
                                    <p className='text-3.5xl text-grayish-blue text-left font-extrabold'>Colours Guide</p>
                                </div>
                            </div>
                            <div className='md:w-5/10 flex items-center space-x-9 md:mb-0 mb-10'>
                                {project.colors.map((color, index) => (<div className='px-2.5 py-3 bg-white color-card'>
                                    <div className={`h-8 w-38 rounded-md mb-5 bg-${color.alias + project.id}`}>{' '}</div>
                                    <p className='text-xs font-bold text-black text-left mb-1'>{color.name}</p>
                                    <p className='text-xs text-black text-left'>{color.code}</p>
                                </div>))}
                            </div>
                        </div>
                    </div>
                    <div className='text-center md:mb-12 mb-10'>
                        <button class="rounded-md bg-newport-blue text-white px-9 py-4">View Live Website</button>
                    </div>
                </div>
            </section>

            <section className='feedback bg-white relative md:pb-28 md:pt-16 py-10'>
               <div className="min-h-hero md:flex items-center py-16 bg-dark-cyan">
                    <div className="max-w-layout md:w-full mx-auto md:pl-2 pl-4.5 pr-5 text-center">
                        <p className="text-5xl font-medium text-cyan-blue mb-6">{`"${project.feedback}"`}</p>
                        <p className="text-base text-light-cyan">{`- ${project.owner.name} (${project.owner.role})`}</p>
                    </div>
                </div> 
            </section>
            
            <Footer />
        </div>
    );
}

export default Projectpage;
