import Images from '../images'
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
    aboutImg: Images.aboutImage,
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
export const PORTFOLIO_FILTERS = ["all","html","css","bootstrap","sass","javascript","react"]

export const PORTFOLIO_ITEMS = [
    {
        id: 1,
        img: Images.qrCodeImage,
        title: "QR code component",
        description: "This is my first challenge, i built a simple component using languages below.",
        links: {
            githubLink: "https://github.com/lazatdev/QR-Code-Component",
            uiDesignLink: "",
            previewLink: "https://lazatdev.github.io/QR-Code-Component/"
        },
        tags: ["html","css"]
    },
    {
        id: 2,
        img: Images.productPreviewImage,
        title: "product preview component",
        description: "This is my second challenge, i built a simple component using languages below.",
        links: {
            githubLink: "",
            uiDesignLink: "",
            previewLink: ""
        },
        tags: ["html","css"]
    },
    {
        id: 3,
        img: Images.landingPageImage,
        title: "bookmark landing page",
        description: "This is my third challenge, i built a landing page using languages below.",
        links: {
            githubLink: "",
            uiDesignLink: "",
            previewLink: ""
        },
        tags: ["html","css","sass","bootstrap"]
    },
    {
        id: 4,
        img: Images.TodoListImage,
        title: "todo list app",
        description: "build a react app that can managae your todo.",
        links: {
            githubLink: "",
            uiDesignLink: "",
            previewLink: ""
        },
        tags: ["html","css","sass","javascript","react"]
    }
]

// Contact Section
export const CONTACT_INFOS = {
    phoneNumberContact: {icon: "", title: "", phoneNumber: ""},
    loctionContact: {icon: "", title: "", location: ""},
    emailContact: {icon: "", title: "", email: ""}
}