'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 20px 30px;
  transition: all .2s ease;
  border-top: 1px solid rgba(0,0,0,0.1);

  &:first-child {
    border-top: 1px solid transparent;
  }

  &:hover {
    transition: all .2s ease;
    background: rgba(0,0,0,0.1);
    border-top: 1px solid transparent;
  }

  @media(max-width: 500px) {
    padding: 15px 25px;
  }
`

export const Text = styled.p`
  color: rgba(0,0,0,0.6);
  font-size: 17px;
  font-weight: bold;


  @media(max-width: 800px) {
    font-size: 17px;
  }

  @media(max-width: 500px) {
    font-size: 16px;
  }
`

export const SubText = styled.p`
  margin-top: 3px;
  color: rgba(0,0,0,0.4);
  font-weight: bold;
  font-size: 14px;

  @media(max-width: 500px) {
    font-size: 13px;
  }
`
