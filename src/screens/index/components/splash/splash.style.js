import styled from "styled-components";
import { devices } from "../../../../responsive/responsive";

export const Container  = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Rock+Salt&display=swap');  width:100%;
width:100%;
height:100vh;
background:#00002C;
margin:0;
padding:0;
align-items:center;
display:flex;
justify-content:center;
`
export const CodeConatiner  = styled.div`
 color:#42FF00;
 font-size:40px;
 margin:0;
 padding:0;
 width:max-content;
 font-family: 'Poppins', sans-serif;
 

@media ${devices.tablet}{
    font-size:22px;

}
`
export const Code1  = styled.p`
padding:25px 0;
margin:0 auto;
text-align:start;

`
export const Code2 = styled.p`
padding:25px 0px;
text-align:start;
margin:0 auto;

`
export const Code3  = styled.p`
padding:25px 0;
margin:0 auto;

text-align:start;
`
export const Code4  = styled.p`
text-align:start;
padding:25px 0;
margin:0 auto;

`