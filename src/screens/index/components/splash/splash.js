import React from 'react'
import * as splashStyle from './splash.style';
import './animation.css'

function Splash() {
  return (
    <splashStyle.Container>
        <splashStyle.CodeConatiner>
            <splashStyle.Code1 className='code'>{'const welcome = ( ) => { '}</splashStyle.Code1>
            <splashStyle.Code2  className='code'>{'console.log(“Welcome to our website!”);'}</splashStyle.Code2>
            <splashStyle.Code3  className='code'>{"}"}</splashStyle.Code3>
            <splashStyle.Code4  className='code'>{"welcome ( );"}</splashStyle.Code4>
        </splashStyle.CodeConatiner>
    </splashStyle.Container>
  )
}

export default Splash