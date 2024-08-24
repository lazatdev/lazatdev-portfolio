import {Container, SpecialHeading} from '../../Components'
import {CONTACT_INFOS} from '../../Constants'

export const ContactSection = () =>
{
    return (
        <section 
            id="contact" 
            className="bg-third py-10"
        >
            <Container>
                <SpecialHeading title="contact" description="Get in touch with me"/>
                <div className="contact-infos mt-4 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                    {
                        Object.values(CONTACT_INFOS).map(contact => (
                            <div className="info text-center p-5">
                                <contact.icon className="mx-auto fill-primary text-[70px]"/>
                                <h3 className="uppercase font-[600] text-[23px] mt-2">{contact.title}</h3>
                                <p className={contact.title !== 'email' ? 'capitalize' : ''}>
                                    {contact.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}