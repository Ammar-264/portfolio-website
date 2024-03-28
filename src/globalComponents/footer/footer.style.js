import styled from "styled-components";
import { devices } from "../../responsive/responsive";

export const Container = styled.div`
width:100%;

`
export const FooterCont = styled.div`
 background:#272525;
 height:250px;
 width:100%;
 display:flex;
 justify-content:center;
 align-items:center;

 @media ${devices.tablet}{
  flex-direction:column;
  height:auto;
  padding:25px 0;
 }
 `

export const Conatct = styled.div`
width:50%;
display:flex;
flex-direction:column;
@media ${devices.tablet}{
  width:95%;
  align-items:center;
}
`
export const NewsLetterCont = styled.div`
width:40%;
display:flex;
flex-direction:column;
@media ${devices.laptop}{
  width:45%;
}
@media ${devices.tablet}{
  width:95%;
  align-items:center;
  padding:15px 0;

}
`
 export const EmailBox = styled.div`
  color:#fff;
  display:flex;
  align-items:center;
  font-size:20px;
  @media ${devices.laptop}{
    font-size:16px
  }
  @media ${devices.laptop}{
    font-size:14px
  }
 `
 export const Email = styled.p`
  padding:0 8px 5px 8px;
  margin:0;
 `

export const SocialLinks = styled.div`
  display:flex;
  margin:20px 0;
  @media ${devices.laptop}{
    margin:15px 0;
  }
`
export const Link = styled.a`
 background:#fff;
 color:#333335;
 border-radius:100%;
 padding:9px 9px;
 cursor:pointer;
 font-size:25px;
 display:flex;
 align-items:center;
 justify-content:center;
 margin:0 8px;
 transition:.2s;

 @media ${devices.laptop}{
  padding:7px 7px;
  font-size:20px;
 }
 @media ${devices.laptop}{
  padding:4px 4px;
  font-size:16px;
  margin:0 5px;
 }

 &:hover{
    background:rgba(255, 255, 255, .8);
 };
`

export const FooterBottom = styled.div`
background:#F8F8F8;
display:flex;
justify-content:center;
align-items:center;
height:30px;

`
export const FooterBottomTxt = styled.p`
font-size:15px;
font-weight:600;
margin:0;
padding:0;
font-family: 'Poppins', sans-serif;

@media ${devices.mobileL}{
  font-size:12px;
}

`
export const Heart = styled.span`
  color:red;

`

export const Heading = styled.h2`
font-family: 'Poppins', sans-serif;
font-weight:500;
letter-spacing:2px;
font-size:25px;
color:#fff;

@media ${devices.laptop}{
  font-size:20px;
}
@media ${devices.mobileL}{
  font-size:15px;
}
`
export const InputCont = styled.div`
display:flex;
align-items:center;
@media ${devices.tablet}{
  width:70%;
}
@media ${devices.mobileL}{
  width:100%;
}

`
export const Input = styled.input`
background:#D9D9D9;
border:none;
height:45px;
border-radius:8px 0 0 8px;
padding:0 10px;
font-family: 'Poppins', sans-serif;
outline:none;
width:50%;

@media ${devices.laptop}{
  width:60%;
}
@media ${devices.tablet}{
  width:70%;
  height:40px;
}
@media ${devices.mobileL}{
  height:35px;
}
`
export const Button = styled.button`
border-radius:0px 8px 8px 0px;
font-family: 'Poppins', sans-serif;
cursor:pointer;
 border:none;
 padding:0 15px;
 font-weight:600;
 height:45px;
  background:#FFCD02;
  @media ${devices.tablet}{
    height:40px;
  }
  @media ${devices.mobileL}{
    height:35px;
    padding:0 10px;
  }
`
