import React from 'react'
import { Link } from "react-router-dom";

// Styled components (external)
import SectionRelative from '../AaaGenerics/Sections/SectionRelative';
import SectionBgGradient from '../AaaGenerics/Sections/SectionBgGradient';
import SectionBgVideo from '../AaaGenerics/Sections/SectionBgVideo';
import Container from '../AaaGenerics/Sections/Container';
import { Button } from '../AaaGenerics/Button/Button';
import { LandingWrapper,LandingImage } from './LandingElements';
import image from '../../assets/pressStart.png'

const Landing = () => {
    return (
        <>
           <SectionRelative>
                <SectionBgGradient/>
                <SectionBgVideo/>
                <Container>
                    <LandingWrapper>
                        <LandingImage src={image}/>
                        <Link to="main" style={{textDecoration: "none"}}>
                            <Button big>
                                Start
                            </Button>
                        </Link>
                    </LandingWrapper>
                </Container>
            </SectionRelative>         
        </>
    )
}

export default Landing
