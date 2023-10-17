'use client'

import NextLink from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: transparent;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,0.10);
  
  @media(max-width: 800px) {
    padding: 0 20px;
    height: 70px;
  }
`

export const Logo = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #76DBF3;
  font-weight: bold;

  span {
    color: white;
  }
  
  @media(max-width: 480px) {
    font-size: 25px;
  }
`

export const List = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 800px) {
    display: none;
  }
`

export const ListItemLink = styled(NextLink)`
  margin: 0 20px;
  font-size: 17px;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-weight: 500;
  transition: all .2s ease;

  &:hover {
    transition: all .2s ease;
    color: #F06DAE;
  }
`

export const Point = styled.div`
  width: 2px;
  height: 2px;
  background-color: #F06DAE;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media(max-width: 800px) {
    display: none;
  }
`
export const AuthLink = styled(NextLink)`
  text-decoration: none;
  text-align: center;

  svg {
    fill: rgba(255,255,255,0.9);
    transition: all .2s ease;
  }

  &:nth-child(2) {
    position: relative;

    &:before {
      content: '1';
      position: absolute;
      top: 2px;
      left: -5px;
      width: 12px;
      height: 12px;
      border-radius: 50px;
      background-color: #F06DAE;
      color: white;
      font-size: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }

  &:hover {
    svg  {
      fill: #F06DAE;
      transition: all .2s ease;
    }
  }
`

export const CartLink = styled(NextLink)`
  position: relative;
  text-decoration: none;
  text-align: center;

  svg {
    fill: rgba(255,255,255,0.9);
    transition: all .2s ease;
  }

  &:hover {
    svg  {
      fill: #F06DAE;
      transition: all .2s ease;
    }
  }


  span {
    position: absolute;
    top: 2px;
    left: -5px;
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background-color: #F06DAE;
    color: white;
    font-size: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`

export const AsideButton = styled.button`
  background: transparent;
  border: none;
  display: none;

  @media(max-width: 800px) {
    display: block;
  }
`
