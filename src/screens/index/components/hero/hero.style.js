import styled  from 'styled-components'
import { devices } from '../../../../responsive/responsive'

export const Container = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:flex-end;
 padding:160px 0 60px 0;
width:100%;
height:auto;
transition:.3s;

@media ${devices.tablet} {
  flex-direction:column;
  height:auto;
  padding-top:100px;
  
}

`
export const InfoCont = styled.div`
 width:60%;
 @media ${devices.tablet} {
   display:flex;
   flex-direction:column;
   align-items:center;
  width: 100%;

}
 `
 export const AvatarCont = styled.div`
 width:40%;
 height:40vh;
 padding:20px 0;

 @media ${devices.tablet}{
  width:60%;
  margin:30px 0;
  display:none;
 }

`
export const Avatar = styled.div`
  background:#FFCD02;
  width:60%;
  height:100%;
 border-radius:100% 100% 20px 20px;
 position:relative;
 /* overflow:hidden; */

 display:flex;
 justify-content:center;
 align-items:center;
 @media ${devices.laptop} {
  width: 80%;
}
 @media ${devices.tablet} {
  width: 100%;
}
`
export const AvatarImg = styled.image`
 width:100%;
 position:absolute;
 bottom:0%;
 `
 export const Text = styled.p`
 color:#000222;
font-size:25px;
margin: 0 0 20px 0;
padding:20px 0;
font-weight:500;
font-family: 'Poppins', sans-serif;
@media ${devices.laptop} {
  padding:10px 0;
  font-size: 20px;

}
@media ${devices.tablet}{
  text-align:center;
}
@media ${devices.mobileL} {
  padding:10px 0;
  font-size: 15px;

}
 `
export const TextSpan = styled.span`
color:#7A1E1E;
`
export const Heading = styled.h1`
color:#000222;
padding:20px 0;
margin:0;
font-size:50px;
font-weight:600;
font-family: 'Poppins', sans-serif;
@media ${devices.laptop} {
  padding:10px 0;
  font-size: 40px;
}

@media ${devices.tablet}{
  text-align:center;
}

@media ${devices.mobileL} {
  padding:10px 0;
  font-size: 30px;

}
`

export const Button = styled.a`

text-decoration:none;
background: #234DBA;
box-shadow: 2px 2px 8px rgba(35, 77, 186, 0.57);
border-radius: 10px;
border:none;
color:#ffff;
font-style: normal;
font-weight: 500;
font-size: 20px;
padding:10px 30px;
cursor:pointer;
transition : .2s;
&:hover{
    background:rgba(35, 77, 186, .9);
}

@media ${devices.laptop} {
  margin:20px 0;
  font-size: 17px;

}
@media ${devices.laptop} {
  margin:20px 0;
  font-size: 15px;
  padding:8px 25px;

}

`

export const SocialLinks = styled.div`
  display:flex;
  margin: 35px 0 20px 0;
  @media ${devices.laptop} {
  margin:30px 0 20px 0;
}
  @media ${devices.tablet} {
  margin:20px 0 10px 0;
}
  @media ${devices.mobileL} {
  margin:10px 0 10px 0;
}
`
export const Link = styled.a`
 background:#333335;
 color:#fff;
 border-radius:100%;
 padding:9px 9px;
 cursor:pointer;
 font-size:25px;
 display:flex;
 align-items:center;
 justify-content:center;
 margin:0 8px;
 transition:.2s;
 @media ${devices.laptop} {
  padding:7px 7px;
  margin:0 6px;
  font-size: 20px;

}
 @media ${devices.mobileL} {
  padding:5px 5px;
  margin:0 4px;
  font-size:16px;

}

 &:hover{
    background:rgba(51, 51, 53, .9)
 }
`

