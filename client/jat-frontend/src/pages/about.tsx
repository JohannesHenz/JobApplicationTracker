import React from "react";
import { AboutContainer, AboutTitle, AboutContent, AboutSection, SectionTitle, SectionText } from "../styles/AboutStyles.tsx";

const About = () => {
    return (
        <AboutContainer>
            <AboutTitle>About</AboutTitle>
            <AboutContent>
                <AboutSection>
                    <SectionTitle>What is the Job Application Tracker?</SectionTitle>
                    <SectionText>
                        The Job Application Tracker is a tool I build that helps me track my job applications.   
                    </SectionText>
                </AboutSection>
            </AboutContent>


        </AboutContainer>
    );
};

export default About;