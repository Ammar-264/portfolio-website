import React from "react";
import * as heroStyle from "./hero.style";
import avatar from "../../../../assets/avatar2.png";
import {AiFillLinkedin,AiFillInstagram,AiFillFacebook,AiFillGithub} from 'react-icons/ai'
import { Fade } from "react-awesome-reveal";
import *  as socialLinks from '../../../../socialMediaLinks'
import Image from "next/image";


function HeroSection() {
  return (
    <Fade>
    <heroStyle.Container id="home">
      {/* text container */}
      <heroStyle.InfoCont>
        <heroStyle.Heading>
          Hi There <br /> Its me
        </heroStyle.Heading>
        <heroStyle.Text>
          I Am a Passionate 
          <heroStyle.TextSpan> Front-End Developer .</heroStyle.TextSpan>
        </heroStyle.Text>
        <heroStyle.Button href='#about'>
            About Me
        </heroStyle.Button>

        <heroStyle.SocialLinks>
            <heroStyle.Link href={socialLinks.facebook} target='_blank'>
                <AiFillFacebook/>
            </heroStyle.Link>
            <heroStyle.Link href={socialLinks.github} target='_blank'>
                <AiFillGithub/>
            </heroStyle.Link>
            <heroStyle.Link href={socialLinks.instagram} target='_blank'>
                <AiFillInstagram/>
            </heroStyle.Link>
            <heroStyle.Link href={socialLinks.linkedIn} target='_blank'>
                <AiFillLinkedin/>
            </heroStyle.Link>
        </heroStyle.SocialLinks>

      </heroStyle.InfoCont>

      {/* avatar container */}
      <heroStyle.AvatarCont>
        <heroStyle.Avatar>
          <Image src={avatar} style={{
             width:'100%',
             position:'absolute',
             bottom:'0%'
          }} />
        </heroStyle.Avatar>
      </heroStyle.AvatarCont>
    </heroStyle.Container>
    </Fade>
  );
}

export default HeroSection;
