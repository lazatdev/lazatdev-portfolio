import BackgroundImg from '../../assets/landing-background.jpg'
import {JUMBOTRON_CONTENT} from '../../Constants'
import {Container} from '../../Components'
export const IntroSection = () =>
{
    return(
        <section 
            id="intro" 
            className="relative z-0 top-0 h-screen w-full bg-cover bg-top" 
            style={{backgroundImage: `url(${BackgroundImg})`}}
        >
            <div className="overlay absolute top-0 h-full w-full bg-black -z-10 opacity-50"></div>
            <Container className="flex items-center h-full">
                <div className="intro-details rounded-r-md relative  bg-primary/70 text-white py-8 pr-4 w-full md:w-2/3
                                before:absolute before:top-0 before:-left-full before:h-full  before:w-full before:-z-10 
                                before:bg-primary/70
                ">
                    <h1 className="text-[32px] capitalize">
                        {JUMBOTRON_CONTENT.welcomeMsg}
                        <span className="block -mt-2 font-bold">{JUMBOTRON_CONTENT.fullName}</span>
                    </h1>
                    <p className="description font-light text-[21px]">
                        {JUMBOTRON_CONTENT.profileDescrirption}
                    </p>
                    <div className="more my-3 space-x-2">
                        <a href="#portfolio" className="inline-block px-4 py-2 bg-primary rounded-md text-white border-white border-solid border-2 hover:bg-secondary hover:text-primary hover:border-primary transition-colors duration-500 uppercase">portfolio</a>
                        <a href="#contact" className="inline-block px-4 py-2 bg-primary rounded-md text-white border-white border-solid border-2 hover:bg-secondary hover:text-primary hover:border-primary transition-colors duration-500 uppercase">Contact me</a>
                    </div>
                </div>
            </Container>
        </section>
    )
}