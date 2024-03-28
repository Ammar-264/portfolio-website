import React from "react";
import * as footerStyle from "./footer.style";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Slide } from "react-awesome-reveal";
import * as socialLinks from '../../socialMediaLinks'

function Footer() {
  return (
    <footerStyle.Container id='contact'>
      <Slide direction="up" style={{width:'100%'}} >
      {/* footer container top */}
      <footerStyle.FooterCont>
        {/* email and social links */}
        <footerStyle.Conatct>
          <footerStyle.EmailBox>
            <MdEmail />
            <footerStyle.Email>example@gmail.com</footerStyle.Email>
          </footerStyle.EmailBox>

          <footerStyle.SocialLinks>

            <footerStyle.Link href={socialLinks.facebook} target='_blank'>
              <AiFillFacebook />
            </footerStyle.Link>

            <footerStyle.Link href={socialLinks.github} target='_blank'>
              <AiFillGithub />
            </footerStyle.Link>

            <footerStyle.Link href={socialLinks.instagram} target='_blank'>
              <AiFillInstagram />
            </footerStyle.Link>

            <footerStyle.Link href={socialLinks.linkedIn} target='_blank'>
              <AiFillLinkedin />
            </footerStyle.Link>
          
          </footerStyle.SocialLinks>
        </footerStyle.Conatct>

        {/* news letter subscription */}
        <footerStyle.NewsLetterCont>
          <footerStyle.Heading>Newsletter Subscription</footerStyle.Heading>
          <footerStyle.InputCont>
            <footerStyle.Input placeholder="enter email" />
            <footerStyle.Button>Subscribe</footerStyle.Button>
          </footerStyle.InputCont>
        </footerStyle.NewsLetterCont>
      </footerStyle.FooterCont>

      {/* footer bottom container */}
      <footerStyle.FooterBottom>
        <footerStyle.FooterBottomTxt>
          Created With <footerStyle.Heart>&hearts; </footerStyle.Heart>
           By Ammar
        </footerStyle.FooterBottomTxt>
      </footerStyle.FooterBottom>
      </Slide>
    </footerStyle.Container>
  );
}

export default Footer;
