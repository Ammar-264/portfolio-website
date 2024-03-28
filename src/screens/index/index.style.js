import styled  from 'styled-components'
import { devices } from '../../responsive/responsive'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Rock+Salt&display=swap');  width:100%;
  background: #F8F8F8;
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow: hidden;
  `

export const BodyContainer= styled.div`
  width:90%;
  @media ${devices.mobileL}{
    width:95%;
  }
`