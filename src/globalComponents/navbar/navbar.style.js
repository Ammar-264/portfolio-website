import styled from "styled-components";
import { devices } from "../../responsive/responsive";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  height: 70px;
  justify-content: center;
  align-items:center;
  position:relative;
  z-index:10;
  box-shadow: 3px 2px 19px -9px rgba(0,0,0,0.38);
-webkit-box-shadow: 3px 2px 19px -9px rgba(0,0,0,0.38);
-moz-box-shadow: 3px 2px 19px -9px rgba(0,0,0,0.38);

@media ${devices.mobileL} {
    height: 60px;
  }
  

`;

export const LogoCont = styled.div`
  width: 30%;
  height: 100%;
  display:flex;
  align-items:center;
  @media ${devices.laptop} {
    width: 30%;
  }
  @media ${devices.tablet} {
    width: 60%;
  }
`;
export const Logo = styled.p`
  font-family: "Rock Salt", cursive;
  padding: 0;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  background:#fff;
  font-size: 30px;
  height:max-content;
  color: #000222;
  text-shadow: 7px 4px 6px rgba(0, 0, 0, 0.26);
  filter: blur(0.5px);
  @media ${devices.laptop} {
    font-size: 30px;
  }
  @media ${devices.mobileL} {
    font-size: 20px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
    transition: .3s;
  @media ${devices.tablet} {
    flex-direction:column;
    z-index:-1;
    position:absolute;
   background:#fff;
   opacity:1;
    bottom:${props=>props.active ? "-430%":"0%"};
    height:${props=>props.active ? "max-content":'0%'};
    width:100%;
    padding: ${props=>props.active ? "10px 0":0};
    overflow-y:hidden;
  }

  @media ${devices.mobileL}{
    bottom:${props=>props.active ? "-450%":"0%"};

  }
`;

// 370%

export const Hamburger = styled.div`

display:none;
cursor :pointer;
background:#fff;

 @media ${devices.tablet} {
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:center;
    width: 30%;

  };
 @media ${devices.mobileL} {
  
    width: 35%;

  }
`

export const Bar = styled.span`
 width: 25px;
    height: 3px;
    margin: 3px 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #000;
    display: block;

    &:nth-child(2){
      opacity: ${props=>props.active ? 0:1}
    };
    &:nth-child(1){
      transform: ${props=>props.active ? "translateY(9px) rotate(45deg)":null};
    };
    &:nth-child(3){
      transform: ${props=>props.active ? " translateY(-9px) rotate(-45deg)":null};
    };
    
    @media ${devices.mobileL} {
    width:20px;
    margin:2px 0;

    &:nth-child(1){
      transform: ${props=>props.active ? "translateY(9px) rotate(45deg)":null}
    };
    &:nth-child(3){
      transform: ${props=>props.active ? "translateY(-5px) rotate(-45deg)":null}
    };
  };
`

export const Link = styled.a`
  padding: 3px 9px;
  color: #000;
  text-decoration: none;
  margin: 0 25px;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  transition: 0.2s;
  @media ${devices.laptop} {
    font-size: 14px;
    margin: 0 15px;
  };

  @media ${devices.tablet}{
  margin:14px 0;
  font-size:15px;
  };
  &:hover {
    color: #234dba;
  }
`;
