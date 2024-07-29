import AboutImage from '../assets/about-img.png'
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub} from 'react-icons/fa'

// Header Section
export const NAV_MENU_ITEMS = ["home","about","portfolio","contact"]

// Hero Section
export const JUMBOTRON_CONTENT = {
    welcomeMsg: "hello, i am",
    fullName: "mohammed adam lazazat",
    profileDescrirption: `A frontend developer with 2 years of experience working 
                         at building user interfaces using HTML/CSS/JavaScript/React.`
}

// About Section
export const ABOUT_CONTENT = {
    aboutImg: AboutImage,
    aboutDetails: {
        aboutMe: {
            title: "who i am ?",
            text: `BAC+2 Diploma holder at ISTA in IT Developement. 
                   As a Frontend Developer i was building web pages during i improved my technical knowledge. 
                   Now, i am looking for new opportunities.`,
            aboutSkills: {
                title: "my skills",
                text: "I master many skills",
                mySkillsIcons: [FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub]
            }
        }
    }
}

// Portfolio Section
const PORTFOLIO_FILTERS = ["all","html","css","javascript","react"]

const PORTFOLIO_ITEMS = [
    {
        id: 1,
        img: "",
        title: "",
        description: "",
        links: {},
        tags: ["html","css"]
    },
    {
        id: 2,
        img: "",
        title: "",
        description: "",
        links: {},
        tags: ["html","css"]
    },
    {
        id: 3,
        img: "",
        title: "",
        description: "",
        links: {},
        tags: ["html","css"]
    }
]

// Contact Section
export const CONTACT_INFOS = {
    phoneNumberContact: {icon: "", title: "", phoneNumber: ""},
    loctionContact: {icon: "", title: "", location: ""},
    emailContact: {icon: "", title: "", email: ""}
}