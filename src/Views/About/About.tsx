import React from 'react';
import AboutSlogan from "../../components/AboutSlogan/AboutSlogan.tsx";
import AboutInro from "../../components/AboutIntro/AboutInro.tsx";
import AboutFAQ from "../../components/AboutFAQ/AboutFAQ.tsx";
import CommonFooter from "../../components/CommonFooter/CommonFooter.tsx";


const About: React.FC = () => {
    return (
        <>
            <AboutSlogan />
            <AboutInro />
            <AboutFAQ />
            <CommonFooter />
        </>
    )
}

export default About