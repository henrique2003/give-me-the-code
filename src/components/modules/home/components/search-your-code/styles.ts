'use client'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`

export const Title = styled.h2`
  font-size: 55px;
  margin-top: 60px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  max-width: 600px;
  color: white;

  span {
    color: #F06DAE;
  }

  @media(max-width: 800px) {
    margin-top: 40px;
    font-size: 45px;
    max-width: 500px;
  }

  @media(max-width: 500px) {
    margin-top: 30px;
    font-size: 40px;
    max-width: 400px;
  }
`

export const Search = styled.div`
  border-radius: 50px;
  background: white;
  display: flex;
  max-width: 500px;
  width: 100%;
  height: 50px;
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  svg {
    color: #808080;
  }

  @media(max-width: 800px) {
    height: 45px;
    margin-top: 40px;
    padding: 0px 20px;
  }

  @media(max-width: 500px) {
    margin-top: 35px;
  }
`

export const Input = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  color: #808080;
  font-size: 18px;
  color: #808080;

  @media(max-width: 800px) {
    font-size: 17px;
  }

  @media(max-width: 500px) {
    font-size: 16px;
  }
`

export const Options = styled.div`
  position: absolute;
  top: 340px;
  border-radius: 20px;
  background: white;
  max-width: 500px;
  width: 100%;
  max-height: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: 800px) {
    top: 275px;
  }

  @media(max-width: 517px) {
    top: 255px;
  }

  @media(max-width: 443px) {
    top: 255px;
  }
`
