import styled from "styled-components";
import { devices } from '../../../../responsive/responsive'


export const Container = styled.div`
 
`
export const Heading = styled.h2`
  font-size:40px;
 font-family: 'Poppins', sans-serif;
 font-weight:600;
 margin:0;
 padding:15px 0;

 @media ${devices.laptop}{
    font-size:35px;
 }
 @media ${devices.mobileL}{
    font-size:28px;
 }
`

export const ProjectsConatiner = styled.div`
 width:100%;
 height:auto;
 display:flex;
 justify-content:space-between;
 flex-wrap:wrap;
 padding:30px 0;
 `

 
export const HoverSite = styled.div`
position:absolute;
width:100%;
transition:.4s;
height:100%;
justify-content:center;
align-items:center;
background:rgba(0,0,0,.45);
opacity:0;
display:flex;
visiblity:none;
`

export const ProjectBlock = styled.div`
 width:47%;
 height:47vh;
 margin:15px 0;
 background:rgba(230, 230, 230, 0.55);
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 border-radius:15px;
 overflow:hidden;
 transition:.6s;
 position:relative;

 &:hover ${HoverSite}{
   opacity:1;
 }

 @media ${devices.tablet}{
   width:100%
 }

 @media ${devices.mobileL}{
   height:40vh
 }

 `
export const ProjectImg = styled.img`
width:100%;
height:97%;
object-fit:contain;


`


export const SiteLink = styled.a`
 text-decoration:none;
 color:#000;
 font-size:20px;
 background:#FFCD02;
 padding:14px 30px;
 border-radius:6px;
 font-family: 'Poppins', sans-serif;
 font-weight:600;
 letter-spacing:1px;
 position:relative;
 transition:.3s;
 &:hover{
   background:rgba(255,205,2,.85);
 }
 &:before{
   content:'';
   position:absolute;
   top:0;
   left:0;
   border-radius:6px 0 6px 0px;
   width:15px;
   height:15px;
   background:#7A1E1E;
 };
 &:after{
   content:'';
   position:absolute;
   bottom:0;
   right:0;
   border-radius:6px 0px 6px 0px;
   width:15px;
   height:15px;
   background:#7A1E1E;

 };


`