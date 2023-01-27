import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavContainer, NavLogo, NavItems, NavLinks, MainContent, LogoImg } from '../styles/LayoutStyles'
import Img from '../images/logray.png'

const Layout = () => {
  return (
    <>
   
    
    <MainContent>
    <NavContainer>
        <NavLogo>
            <LogoImg src={Img}></LogoImg>
        </NavLogo>
        <NavItems>
            <NavLinks to='/'>INICIO</NavLinks>
            <NavLinks to='form'>BUSCADOR</NavLinks>
            <NavLinks to='login'>LOGIN</NavLinks>
        </NavItems>
    </NavContainer>
    
    <Outlet />
    
    </MainContent>
    
    </>
  )
}

export default Layout