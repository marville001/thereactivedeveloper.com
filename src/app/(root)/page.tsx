import { Github, Link2, Link2Icon, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "./hero-image";

export default function Home() {

  const services = [
    {
      id: 0,
      name: 'Web Development',
      description: 'Convert your graphics and design into a live website.',
      icon: '/icons/web-dev.png',
    },
    {
      id: 1,
      name: 'Responsive Website Design',
      description:
        'Having a responsive layout means that your website fluidly resizes for optimal viewing regardless of the screen size or device (e.g.Desktop, iPhone, iPad).',
      icon: '/icons/responsive-design1.png',
    },
    {
      id: 2,
      name: 'Dashboard Design',
      description:
        'Implement Dashboards and admin panels for ecommerce products management, clinic management among other types of management systems',
      icon: '/icons/responsive-design1.png',
    },
  ]

  const portfolios: IProject[] = [
    {
      id: 'allinonedashboardadd34dagdsd5h344',
      image: "/assets/portfolio/dashboard-all-in-one.png",
      title: "allinone-dashboard.vercel.app",
      summary: "Dashboard. Contains Calendar, Editor, Color Picker, kanban and lots of charts",
      link: "https://allinone-dashboard.vercel.app/",
    },
    {
      id: 'lotteryapp244sfs535f3fs',
      image: "/assets/portfolio/lottery-app.png",
      title: "lottery-xi.vercel.app",
      summary: "Lottery app made with NextJs and Web3 (solidity and thirdweb)",
      link: "https://lottery-xi.vercel.app/",
    },
    // {
    //   id: 'clinicdashboard5452435623f32543',
    //   image: "/assets/portfolio/clinic-dashboard.png",
    //   title: "my-clinic-app-app.vercel.app",
    //   summary: "Clinic management made easy in one place.",
    //   link: "https://my-clinic-app-app.vercel.app/",
    // },
    {
      id: 'mediumsanity56344bhr34sd667s3yg36',
      image: "/assets/portfolio/medium-2.0.png",
      title: "mediumsanity.vercel.app",
      summary: "Medium 2.0 App made with NextJs and Sanity.io",
      link: "https://mediumsanity.vercel.app/",
    },
    {
      id: 'myfrontendchallenges67546734674',
      image: "/assets/portfolio/frontend-challenges.png",
      title: "myfrontendchallenges.netlify.app",
      summary: "I love solving challenges. Some list for frontend ones",
      link: "https://myfrontendchallenges.netlify.app/",
    }
  ]

  const langs = [
    { id: 0, name: 'React JS', icon: '/icons/react.jpeg' },
    { id: 12, name: 'Angular', icon: '/icons/angular.png' },
    { id: 1, name: 'Node JS', icon: '/icons/nodejs.jpeg' },
    { id: 2, name: 'Tailwind CSS', icon: '/icons/tailwindcss.jpeg' },
    { id: 3, name: 'Typescript', icon: '/icons/typescript.png' },
    { id: 18, name: 'GraphQl', icon: '/icons/graphql.png' },
    { id: 4, name: 'Bootstrap', icon: '/icons/bootstrap.jpeg' },
    { id: 5, name: 'HTML 5', icon: '/icons/html5.png' },
    { id: 6, name: 'CSS 3', icon: '/icons/css3.png' },
    { id: 7, name: 'Mongo DB', icon: '/icons/mongodb.jpeg' },
    { id: 8, name: 'Git', icon: '/icons/git.png' },
    { id: 9, name: 'MySQL', icon: '/icons/mysql.png' },
    { id: 10, name: 'Sequelize', icon: '/icons/sequelize.png' },
    { id: 11, name: 'Python', icon: '/icons/python.png' },
    { id: 13, name: 'Docker', icon: '/icons/docker.png' },
    { id: 14, name: 'Heroku', icon: '/icons/heroku.png' },
    { id: 15, name: 'Bitbucket', icon: '/icons/bitbucket.png' },
    { id: 16, name: 'AWS', icon: '/icons/aws.png' },
    { id: 17, name: 'Yarn', icon: '/icons/yarn.png' },
  ]

  return (
    <section>

      {/* Hero */}
      <div className="section grid grid-cols-1 py-10 md:py-16 lg:py-20 md:max-h-[600px] md:grid-cols-2 max-w-screen-lg mx-auto">

        <div className="px-4 py-8 sm:px-10">
          <h2 className="flex items-center gap-4 font-bold text-dark dark:text-white opacity-30">
            <MapPin />
            <span>Nyeri, Kenya</span>
          </h2>

          <h1 className="mt-10 text-3xl font-bold text-accent sm:text-4xl">Martin Mwangi</h1>
          <h1 className="mt-5 mb-6 text-xl font-bold opacity-75 text-dark dark:text-white sm:text-2xl">
            Full Stack Developer
          </h1>
          <p className="mt-5 max-w-[700px] text-dark dark:text-white">
            With some years of experience in software development, I am dedicated
            to designing and developing User Interfaces and experiences focused on
            their emotions ( UI / UX ), used in web platforms and apps.
          </p>
          <div className="flex gap-5 my-8">
            <Link
              href="https://www.linkedin.com/in/marville001/"
              target="_blank"
              className="flex items-center px-2 py-1 text-white rounded-md cursor-pointer bg-primary"
            >
              <Linkedin className="pr-2 text-2xl" />
              <div className="h-4 w-[1px] bg-gray-300"></div>
              <span className="pl-2 text-lg">LinkedIn</span>

            </Link>
            <Link
              href="https://github.com/marville001"
              target="_blank"
              className="flex items-center px-2 py-1 text-white rounded-md cursor-pointer bg-primary"
            >
              <Github className="pr-2 text-2xl" />
              <div className="h-4 w-[1px] bg-gray-300"></div>
              <span className="pl-2 text-lg">Github</span>
            </Link>
          </div>
        </div>
        <div
          className="flex items-center justify-center overflow-hidden h-[400px]"
        >
          <HeroImage />
        </div>
      </div>
      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>

      {/* Experience */}
      <div className="section bg-dark_ text-white">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:py-20 md:grid-cols-2">
          <div className="z-20 px-2 py-10 sm:px-10">
            <h2 className="mb-6 text-3xl z-[2] capitalize font-bold text-dark dark:text-white">
              Experience and knowledge to highlight
            </h2>
            <div className="">
              <p className="my-2">
                <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                  +3 years
                </strong>
                <span className="opacity-60">
                  Designing and Developing web applications using ReactJs, NextJs and NodeJs (MERN Stack), etc
                </span>
              </p>
              <p className="my-2">
                <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                  +1 years
                </strong>
                <span className="opacity-60">
                  Designing and Developing mobile applications using React Native
                </span>
              </p>
              <p className="my-2">
                <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                  +3 years
                </strong>
                <span className="opacity-60">Using MERN Stack</span>
              </p>

              <div className="my-4">
                <p className="">
                  Currently working with ReactJs, NodeJs, GraphQl, TypeScript and
                  PostgresDB
                </p>
                <Link href="/now" className='inline-block px-4 py-1 mt-2 text-sm text-white rounded-md bg-primary'>View Current </Link>
              </div>
            </div>
          </div>

          <div className="py-2 sm:px-6 md:px-6">
            <div className="z-[200] -translate-y-0  rounded-t-md bg-[#ffffff] py-4 px-2 dark:bg-dim-dark sm:px-6">
              <Link
                href="https://api.whatsapp.com/send?phone=254700207054&text=Hey Martin"
                target="_blank"
                className="flex animate-pulse hover:animate-none items-center justify-between rounded-md bg-[#358a76] px-5 py-3 text-lg text-white lg:text-xl"
              >
                <svg fill="#000000" className="text-lg lg:text-2xl h-8 text-white w-8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 308 308" xmlSpace="preserve">
                  <g id="XMLID_468_">
                    <path id="XMLID_469_" fill="currentColor" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
                    <path id="XMLID_470_" fill="currentColor" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
                  </g>
                </svg>
                <span>+254700207054</span>
                <Link2 className="text-lg opacity-50 lg:text-2xl" />
              </Link>

              <p className="my-4 text-sm tracking-wide text-white opacity-70">
                Contact me by WhatsApp, you will establish communication with me
                directly. You will be able to ask or make arrangement for further
                communications about any task you have.
              </p>

              <div className="w-full p-6 mt-16 rounded-lg _shadow dark:bg-dark">
                <h2 className="mb-2 text-lg font-bold">Schedule a meeting</h2>
                <p className="text-sm font-medium opacity-70">
                  Choose the ideal moment and meet with the team to put your ideas
                  into action.
                </p>

                <Link target="_blank" href="https://cal.com/marville001/30min" className="w-full py-2 px-5 block mt-6 text-sm text-center text-white border-0 rounded-full lg:text-md btn hover:bg-primary bg-opacity-80 hover:bg-opacity-100 bg-primary">
                  Click to coordinate meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language and tools */}
      <div
        style={{
          backgroundImage:
            'url(/assets/gradient-islamic-pattern-background-vector.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="section  py-10 bg-dark text-white bg-opacity-95">
          <div className="container">
            <h1 className='text-center font-bold text-xl select-none mb-2 opacity-50'>TOOLS</h1>
            <h2 className="text-center text-3xl font-bold text-dim-dark text-white">
              Programming Languages and Tools
            </h2>

            <div className="my-10 flex flex-wrap justify-center gap-5">
              {langs.map((lang) => (
                <div
                  key={lang.id}
                  className="cursor-pointer group flex flex-col transition-all duration-100 ease-linear items-center p-3 px-5 hover:shadow bg-opacity-100 hover:bg-white rounded-lg"
                >
                  <Image height={56} width={56} className="object-cover" src={lang.icon} alt="" />
                  <p className="mt-3 text-center text-sm group-hover:text-dark">{lang.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="section bg-dark_  text-white">
        <div className="max-w-screen-lg mx-auto py-10">
          <h2 className="mb-2 select-none text-center text-xl font-bold uppercase opacity-50">
            Services
          </h2>
          <h3 className="text-center text-3xl font-bold capitalize text-dim-dark dark:text-white">
            What I offer
          </h3>

          <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex cursor-pointer  flex-col gap-6 rounded-md bg-white dark:bg-dim-dark p-2 sm:p-6 pb-6 transition-all duration-100 ease-in-out hover:bg-primary hover:text-white"
              >
                <div className="h-16 w-16 rounded-lg">
                  <Image height={150} width={150} src={service.icon} alt="" className="!w-full !h-full object-cover" />
                </div>

                <div className="flex-1">


                  <h4 className="text-lg font-bold">{service.name}</h4>
                  <p className='mt-2'>{service.description}</p>

                </div>
                <Link href="/services" className="bg-primary text-white group-hover:bg-white group-hover:text-primary text-center cursor-pointer py-2 rounded-lg text-lg">
                    Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>

      {/* Portfolio */}
      <div className="">
        <div className="container py-8 lg:pt-16 dark:text-white">

          <h1 className="mb-2 select-none text-center text-xl font-bold uppercase opacity-50">
            featured projects
          </h1>
          <h2 className="text-center text-3xl mt-5 font-bold capitalize text-dim-dark dark:text-white">
            What I have worked on
          </h2>

          {/* Portfolios */}
          <div className="my-8 lg:my-16 grid select-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {portfolios.map(({ id, title, image, link, summary }: IProject) => (
              <div
                key={id}
                className="relative min-h-[225px] group bg-opacity-40 hover:bg-opacity-100 justify-center
                      rounded-xl duration-150 ease-linear  p-4 flex flex-col items-center">
                <Image height={150} width={150} className='rounded-lg border !h-auto md:!h-52 !w-full object-cover'
                  src={image} alt={title} />
                <h4 className='self-start mt-4'>{summary}</h4>
                <a href={link} target="_blank" rel="noopener noreferrer"
                  className='bg-primary text-sm flex items-center gap-1.5 bg-opacity-20 px-2 underline py-1 mt-2 text-accent self-start rounded-lg'>
                  <Link2Icon className='text-base' />
                  <span className='font-light'>{title}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Show More */}
          <div className="my-10 flex justify-center">
            <Link href="/portfolio" className="rounded-full bg-accent bg-opacity-80 hover:bg-opacity-100 tracking-wider px-8 py-2 capitalize text-sm text-white">
                View All Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>

      {/* About Me */}
      <div className="py-8 text-white">
        <div className="container flex flex-col items-center md:gap- py-16">
          <h2 className="text-4xl font-bold ">About Me</h2>
          <div className="my-6">
            <Image
              src="/assets/me.jpg"
              className="rounded-full"
              width={250}
              height={250}
              alt="Martin Mwangi"
            />
          </div>
          <div className="flex flex-[3] flex-col items-center gap-2 md:items-start">
            <div className="font-serif text-[16px] max-w-xl mx-auto leading-5 tracking-wide">
              {/* <p className='text-center'>
              First and foremost, I love writing code. Ever since writing my
              first program in C and manipulating it to produce the desired
              output, I have been obsessed with the idea of using software to
              solve practical problems. For me, Computer Science is a
              never-ending puzzle that I am passionately engaged in solving. I
              believe in the power of programming to transform and improve the
              lives of people around the world.
            </p>
            <p className='my-3 text-center'>
              Software development has given me a purpose and a path which am
              proud of and one I can follow for the rest of the time to come.
              The creativity, organization, sequential processing, and
              problem-solving involved keep me up at night with a never-ending
              thirst to create beautiful, powerful things and share them with
              the world.
            </p> */}
              <p className='text-center'>
                Skills/Interests: JavaScript, React, TypeScript, Next, Express,
                Node, Redux, StyledComponents, CSS, HTML, Git, GitLab, SQL,
                PostgreSQL, MongoDB, Ms SQL, Docker among others
              </p>

              <div className="my-10 flex flex-col gap-5 sm:flex-row justify-center">
                <Link href="mailto:me@thereactivedeveloper.pro"
                    target="_blank"
                    className="inline-block rounded-full bg-accent py-3 px-8 text-center  text-[16px] font-semibold text-white hover:bg-opacity-80"
                  >
                    Contact Me Via Email
                </Link>
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Martin Resume"
                  className="rounded-full border border-accent text-accent hover:text-white hover:bg-accent px-8 py-3 text-center text-[16px] font-semibold">
                  Download My CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
