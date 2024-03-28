import styled  from 'styled-components'
import { devices } from '../../../../responsive/responsive'

export const Container = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:40px 0;
transition:.3s;
@media ${devices.tablet}{
    flex-direction:column;
    padding:10px 0;
}
`

export const SvgContainer = styled.div`
 width:45%;
 @media ${devices.tablet}{
     width:80%;
   
}
 @media ${devices.mobileL}{
     width:90%;
   
}
` 
export const TextContainer = styled.div`
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
 export const Text = styled.p`
 padding:10px 0;
 margin:0;
 color:rgba(0, 0, 0, 0.68);
 font-family: 'Poppins', sans-serif;
 font-size:18px;
 line-height:34px;
 word-spacing:3px;
 @media ${devices.laptop}{
    font-size:16px;
    
 }
 @media ${devices.mobileL}{
    font-size:14px;
    
 }
` 