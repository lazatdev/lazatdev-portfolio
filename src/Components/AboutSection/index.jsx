import {Container} from '../../Components'
import {ABOUT_CONTENT} from '../../Constants'
export const AboutSection = () =>
{
    return (
        <section id="about" className="py-10 bg-third">
            <Container>
                <div className="heading-section space-y-4 text-center">
                    <h2 className="text-[42px] font-bold uppercase">about</h2>
                    <div className="shapes mx-auto relative w-[100px] flex justify-between items-center before:absolute space-x-2 before:left-0 before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[3px] before:bg-primary">
                        <span className="circle inline-block bg-primary rounded-full h-4 w-4"></span>
                        <span className="circle inline-block bg-primary rounded-full h-4 w-4"></span>
                        <span className="circle inline-block bg-primary rounded-full h-4 w-4"></span>
                    </div>
                    <p className="text-[23px] font-light">A bref personal introduction</p>
                </div>
                <div className="about-info text-[21px] grid grid-cols-1 md:grid-cols-3 gap-x-[16px] justify-items-center md:justify-items-end mt-10">
                    <img className="about-img rounded-md" src={ABOUT_CONTENT.aboutImg} alt="about image"/>
                    <div className="about-details md:-mt-3 text-center md:text-left md:col-span-2">
                        <h3 className="font-bold capitalize text-[29px] mt-3 md:mt-0">{ABOUT_CONTENT.aboutDetails.aboutMe.title}</h3>
                        <p className="tracking-wide font-light">{ABOUT_CONTENT.aboutDetails.aboutMe.text}</p>
                        <div className="about-skills mt-3">
                            <h3 className="font-bold capitalize text-[29px]">{ABOUT_CONTENT.aboutDetails.aboutMe.aboutSkills.title}</h3>
                            <p className="tracking-wide font-light">
                                {ABOUT_CONTENT.aboutDetails.aboutMe.aboutSkills.text}
                            </p>
                            <div className="skills flex space-x-3 flex-wrap justify-center md:justify-start -ml-2 mt-2">
                                {
                                    ABOUT_CONTENT
                                    .aboutDetails
                                    .aboutMe
                                    .aboutSkills
                                    .mySkillsIcons.map(IconName => (
                                        // <i className={`${skill}`}>{skill}</i>
                                        <IconName size="70px" className="text-primary/40"/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}