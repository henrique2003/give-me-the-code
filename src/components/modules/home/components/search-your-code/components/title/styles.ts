'use client'

import styled from 'styled-components'

export const Text = styled.h2`
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
