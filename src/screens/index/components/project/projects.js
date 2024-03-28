import React, { useState } from 'react'
import * as projectStyle from './projects.style'
import img1 from '../../../../assets/project1.png'
import img2 from '../../../../assets/project2.png'
import img3 from '../../../../assets/project3.png'
import img4 from '../../../../assets/project4.png'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'

function ProjectSection() {

  return (
   <projectStyle.Container id='projects'>
    <Fade>

     <projectStyle.Heading>
        Projects
     </projectStyle.Heading>

     <projectStyle.ProjectsConatiner>
        <ProjectBox src={img1}  link='https://mellifluous-eclair-d85ca5.netlify.app/'  />
        <ProjectBox src={img2} link='https://lighthearted-lamington-f5105b.netlify.app/' />
        <ProjectBox src={img3} link='https://musing-hawking-90a78f.netlify.app/' />
        <ProjectBox src={img4} link='https://adoring-roentgen-4ceaa1.netlify.app/' />
     </projectStyle.ProjectsConatiner>
    </Fade>
   </projectStyle.Container>
  )
}

export default ProjectSection


function ProjectBox({src,link}){
  
  const projectImageStyle = {
    width:'100%',
    height:'97%',
    objectFit:'contain'
    
  }
    return(
        <projectStyle.ProjectBlock  >
          <projectStyle.HoverSite  >
            <projectStyle.SiteLink target="_blank" href={link} >
              Visit Site
            </projectStyle.SiteLink>
          </projectStyle.HoverSite>
            <Image style={projectImageStyle} src={src}/>
        </projectStyle.ProjectBlock>
    )
}