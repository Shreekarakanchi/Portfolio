import React from 'react'
import "./styles.scss"
import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import coffeeweb from '../../Assets/Images/coffeeweb_Image.png'

function Project() {

    const project = [
        {
            name: "Coffeeweb.com",
            desc: "CoffeeWeb Project provides international exchange quotes for London (Robusta) and New York (Arabica), along with enhanced features to improve user experience. As the second most traded commodity involving 196 countries, coffee demands a reliable source of industry insights—CoffeeWeb fulfills that need. The platform offers detailed data on production, consumption, coffee prices, weather updates, differentials, and freight rates. It caters to professionals across the coffee value chain, including exporters, importers, roasters, processors, traders, and growers. With tailored information and a user-friendly interface, CoffeeWeb stands out as a comprehensive resource for anyone involved in the ever-evolving global coffee industry.",
            img: coffeeweb,
            link: "www.coffeeweb.com",
            githubLink: "",
            tech: ["React JS", "HTML", "CSS", "JavaScript", "MUI","SCSS","Firebase", "PrimeReact", "Bootstrap","Payment Getaway", "Jest", "React Testing Library"]
        },
        // {
        //     name: "React Carousel (NPM Package)",
        //     desc: "Provides a responsive and customizable carousel component for React apps, allowing developers to easily implement dynamic image or content sliders with various customization options.",
        //     img: "https://www.searchenginejournal.com/wp-content/uploads/2019/10/skype-home-page-example-5dbbf8645cb39.jpg",
        //     link: "",
        //     githubLink: "",
        //     tech: ["React JS", "HTML", "CSS", "JavsScript", "SCSS"]
        // },
        // {
        //     name: "Resume Sender Service",
        //     desc: "An automated tool designed to streamline the job application process, enabling users to send resumes with customizable email templates, saving time and effort for job seekers.",
        //     img: "https://img.freepik.com/free-vector/flat-design-abstract-geometric-real-estate-landing-page_23-2149127010.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1727913600&semt=ais_hybrid",
        //     link: "",
        //     githubLink: "",
        //     tech: ["ReactJS", "NodeJs", "JavsScript", "TypeScript", "ExpressJs", "MongoDB", "Mongoose", "JWT", "oAuth", "Cookies", "HTML", "CSS"]
        // },
        // {
        //     name: "Chat MERN App",
        //     desc: "A real-time chat application that uses WebSocket for live messaging, supporting user authentication and enabling private or public chat rooms with notifications.",
        //     img: "https://img.freepik.com/free-vector/business-concept-landing-page_23-2148276812.jpg",
        //     link: "",
        //     githubLink: "",
        //     tech: ["ReactJS", "NodeJs", "JavsScript", "TypeScript", "ExpressJs", "MongoDB", "Mongoose", "JWT", "oAuth", "Cookies", "HTML", "CSS"]
        // },
        // {
        //     name: "Email Verification & Password Recovery",
        //     desc: "A secure system for email verification and password recovery, enhancing user account security with token-based email verification links for authentication.",
        //     img: "https://img.freepik.com/free-psd/flat-design-interior-design-template_23-2150031565.jpg",
        //     link: "",
        //     githubLink: "",
        //     tech: ["ReactJS", "NodeJs", "JavsScript", "TypeScript", "ExpressJs", "MongoDB", "Mongoose", "JWT", "oAuth", "Cookies", "HTML", "CSS"]
        // },
    ]
    return (
        <div className='project-screen'>
            <div className='project-screen-wrapper'>
                <div className='title'>Projects</div>
                <div className='project-list'>
                    {project.map((ele) => {
                        return (
                            <div className='project-card'>
                                <img src={ele.img} alt="" />
                                <div className='project-detail'>
                                    <div className='name'>{ele.name}</div>
                                    <div className='desc'>{ele.desc}</div>
                                    <div className='techs'>
                                        {ele?.tech?.map((item) => (
                                            <span className='tech'>
                                                <div className='dot'></div>
                                                <div className='tech-name'>
                                                    {item}
                                                </div>
                                            </span>
                                        ))}
                                    </div>
                                    <div className='options'>
                                        <a className='live' href='https://www.coffeeweb.com' target='_blank' rel="noopener noreferrer"><IoOpenOutline />Live</a>
                                        <div className='git'><FaGithub />GitHub</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Project