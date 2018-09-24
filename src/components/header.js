import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import LogoSrc from '../images/logo.svg'
import Menu from './menu'

const LogoImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 7em;
  width: 15em;
`

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link to="/">
        <LogoImg src={LogoSrc} />
      </Link>
      <Menu>
        <Link to={'/hem'}>hem</Link>
        <Link to={'/om-oss'}>om oss</Link>
        <Link to={'/kontakt'}>kontakt</Link>
        <Link to={'/tjanster'}>tjänster</Link>
      </Menu>
    </nav>
  </header>
)

export default Header
