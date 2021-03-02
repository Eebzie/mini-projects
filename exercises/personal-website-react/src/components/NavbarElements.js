import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const colors = {
    main: '#a065a0',
    darkerMain: '#7d4d7d',
    text: '#2a2a2a',
    white: '#fff',
    black: '#000',
    grey: '#eee',
}

export const Nav = styled.nav`
    background: ${colors.white};
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    z-index: 10;
    font-family: 'Manrope', sans-serif;
`

export const NavLink = styled(Link)`
    color: ${colors.text};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: ${colors.darkerMain};
    }
    
    &:hover{
        color: ${colors.main};
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center; 
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled.nav`
    border-radius: 4px;
    background-color: ${colors.main};
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${colors.darkerMain};
    }
`