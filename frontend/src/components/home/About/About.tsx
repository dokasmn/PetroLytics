// styles
import { StyledAboutBackground, StyledAboutImage } from './About.styles'

// components
import Paragraph from '../HomeParagraph'

// assets
import aboutImage from '../../../assets/imgs/well_image.svg'

const About: React.FC = () => {
    return <StyledAboutBackground>
        <div>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur porttitor porta.
                Proin bibendum ac libero et semper.
                Pellentesque condimentum accumsan efficitur.
                Integer orci metus, placerat aliquam blandit eu,
                facilisis eu justo. Etiam purus erat, sodales ut faucibus eget,
                convallis a eros.
            </Paragraph>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur porttitor porta.
                Proin bibendum ac libero et semper.
            </Paragraph>
        </div>
        <StyledAboutImage src={aboutImage} alt="well-image"></StyledAboutImage>
    </StyledAboutBackground>;
};

export default About;