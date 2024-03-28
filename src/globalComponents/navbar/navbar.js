import React, { useState } from "react";
import * as navStyle from "./navbar.style";
import { Slide } from "react-awesome-reveal";

function Navbar() {

  const [hamburgerActive , setHamburgerActive] = useState(false)

  const showMenu = () =>{
   setHamburgerActive(hamburgerActive?false:true)
   
  }

   

  return (
  <Slide direction="down" style={{width:"100%",position:'fixed',zIndex:10}} >
    <navStyle.Container>
      {/* logo container */}
      <navStyle.LogoCont>
        <navStyle.Logo>{"< AMMAR />"}</navStyle.Logo>
      </navStyle.LogoCont  >
      {/* nav links container */}
      <navStyle.Hamburger  onClick={showMenu} >
        <navStyle.Bar active={hamburgerActive}></navStyle.Bar>
        <navStyle.Bar active={hamburgerActive}></navStyle.Bar>
        <navStyle.Bar active={hamburgerActive}></navStyle.Bar>
      </navStyle.Hamburger>
      <navStyle.LinksContainer active={hamburgerActive} >
        <navStyle.Link href="#home">HOME</navStyle.Link>
        <navStyle.Link href="#about">ABOUT</navStyle.Link>
        <navStyle.Link href="#skills">SKILLS</navStyle.Link>
        <navStyle.Link href="#projects">Projects</navStyle.Link>
        <navStyle.Link href="#contact">CONTACT</navStyle.Link>
      </navStyle.LinksContainer>
    </navStyle.Container>
  </Slide>
  );
}

export default Navbar;
