import {Container} from '../../Components'
export const AboutSection = () =>
{
    return (
        <section id="about">
            <Container>
                <div className="heading-section">
                    <h2>about</h2>
                    <div className="shapes">
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                    </div>
                    <p>a bref personal introduction</p>
                </div>
            </Container>
        </section>
    )
}