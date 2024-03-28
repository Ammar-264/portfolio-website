import styled from "styled-components";
import { devices } from '../../../../responsive/responsive'


export const Container = styled.div`
 width:100%;
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:80px 0;
 transition:.3s;
 @media ${devices.tablet}{
    flex-direction:column;
    padding:30px 0;
}

`
export const SkillsCont = styled.div`
 width:50%;
 @media ${devices.tablet}{
    width:100%;
}
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
export const SkillSvgCont = styled.div`
width:40%;
display:flex;
align-items:center;
@media ${devices.laptop}{
    width:45%;
}
@media ${devices.tablet}{
    width:100%;
    padding:40px 0;
}

`
export const SkillBox = styled.div`
width:90%;
padding:10px 0;

@media ${devices.tablet}{
    width:100%;
}
`
export const SkillName = styled.p`
color:rgba(0, 0, 0, 0.68);
font-family: 'Poppins', sans-serif;
font-weight:500;
font-size:22px;

@media ${devices.laptop}{
    font-size:18px;
}
@media ${devices.mobileL}{
    font-size:15px;
}
`
export const SkillBar = styled.div`
background:#CCCCCC;
display:flex;
height:20px;
border-radius:35px;
width:100%
 content:" ";
 justify-content:flex-start;
 align-items:center;

 @media ${devices.mobileL}{
    height:15px;
 }
`
export const SkillBarFilled = styled.div`
background:#FFCD02;
display:flex;
height:100%;
border-radius:35px;
content:" ";
`