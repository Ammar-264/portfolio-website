import React from 'react'
import Footer from '../../globalComponents/footer/footer'
import Navbar from '../../globalComponents/navbar/navbar'
import AboutSection from './components/about/about'
import HeroSection from './components/hero/hero'
import ProjectSection from './components/project/projects'
import SkillSection from './components/skills/skills'
import Splash from './components/splash/splash'
import * as indexStyle from './index.style'


export default function IndexPage() {
  return (
    <>
    {/* <Splash/> */}
    <indexStyle.Container>
      <Navbar/>
      <indexStyle.BodyContainer>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
      </indexStyle.BodyContainer>
      <Footer/>
    </indexStyle.Container>
    </>
  )
}
