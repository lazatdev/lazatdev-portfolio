import {Container} from '../../Components'
import {LINKS} from '../../Constants'

export const Footer = ({footerRef}) =>
{
    return (
        <footer id="footer" className="py-5 bg-primary text-third" ref={footerRef}>
            <Container className="flex justify-between items-center">
                <p className="text capitalize text-[21px] font-[300]">
                    made by
                    <span className="font-bold uppercase mx-[5px]">
                        lazat
                        <span className="font-[300]">
                            dev
                        </span>
                    </span>
                    &copy; 2024
                </p>
                <div className="links flex space-x-2">
                    {
                        LINKS.map(itemLink => (
                            <a href={itemLink.link}>
                                <itemLink.icon className="text-[28px] fill-third hover:rotate-[360deg] transition-transform duration-300"/>
                            </a>
                        ))
                    }
                </div>
            </Container>
        </footer>
    )
}