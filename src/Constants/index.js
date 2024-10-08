import Images from '../images'
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub, 
    FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaLinkedin, 
    FaGithubSquare, FaInstagramSquare, FaFacebookSquare
} from 'react-icons/fa'

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
                   Now, i am looking for new opportunities. So that i can put into practice my frontend
                   developement skills`,
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
            uiDesignLink: "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",
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
            githubLink: "https://github.com/lazatdev/Product-Preview-Card-Component",
            uiDesignLink: "https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa",
            previewLink: "https://lazatdev.github.io/Product-Preview-Card-Component/"
        },
        tags: ["html","css"]
    },
    {
        id: 3,
        img: Images.landingPageImage,
        title: "bookmark landing page",
        description: "This is my third challenge, i built a landing page using languages below.",
        links: {
            githubLink: "https://github.com/lazatdev/Bookmark-Landing-Page-Master",
            uiDesignLink: "https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158",
            previewLink: "https://lazatdev.github.io/Bookmark-Landing-Page-Master/"
        },
        tags: ["html","css","sass","bootstrap"]
    },
    {
        id: 4,
        img: Images.TodoListImage,
        title: "todo list app",
        description: "build a react app that can managae your todo.",
        links: {
            githubLink: "https://github.com/lazatdev/todo-list-app",
            uiDesignLink: "",
            previewLink: "https://lazatdev-todo-list-app.vercel.app/"
        },
        tags: ["html","css","sass","javascript","react"]
    }
]

// Contact Section
export const CONTACT_INFOS = {
    phoneNumberContact: {icon: FaWhatsapp, title: "whatsapp", text: "+212 641 813 652"},
    loctionContact: {icon: FaMapMarkerAlt, title: "location", text: "casablanca, morocco"},
    emailContact: {icon: FaEnvelope, title: "email", text: "lazazat.adam@gmail.com"}
}


// Footer Section
export const LINKS = [
    {icon: FaLinkedin, link: ""},
    {icon: FaGithubSquare, link: "https://github.com/lazatdev"},
    {icon: FaInstagramSquare, link: "https://linkedin.com/in/lazazat-mohammed-adam"},
    {icon: FaFacebookSquare, link: ""}
]