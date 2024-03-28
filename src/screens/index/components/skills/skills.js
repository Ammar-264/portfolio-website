import React from 'react'
import * as skillStyle from './skills.style'
import SkillSVG from './svg/svg';
import { Slide } from 'react-awesome-reveal';

function SkillSection() {
  return (
    <skillStyle.Container id='skills'>
        {/* skills info */}
        <skillStyle.SkillsCont>
            <Slide style={{width:'100%'}} direction='left'>

                <skillStyle.Heading>Skills</skillStyle.Heading>
                <SkillBox skillName='UI/UX' progress='90%' />
                <SkillBox skillName='JavaScript' progress='85%' />
            <SkillBox skillName='React' progress='90%' />
            </Slide>
        </skillStyle.SkillsCont>
        {/* skills svg */}
        <skillStyle.SkillSvgCont>
            <Slide style={{width:'100%'}} direction='right'>

            <SkillSVG/>
            </Slide>
        </skillStyle.SkillSvgCont>
    </skillStyle.Container>
  )
}

export default SkillSection;


function SkillBox({skillName,progress}){
    return(
        <skillStyle.SkillBox>
                <skillStyle.SkillName>{skillName}</skillStyle.SkillName>
                <skillStyle.SkillBar>
                    <skillStyle.SkillBarFilled style={{width:progress}} />
                </skillStyle.SkillBar>
            </skillStyle.SkillBox>
    )
}