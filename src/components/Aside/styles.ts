'use client'

import NextLink from 'next/link'
import styled from 'styled-components'

interface IContainerProps {
  isOpen: boolean
}

export const Container = styled.aside<IContainerProps>`
  position: absolute;
  top: 0;
  left: -400px;
  display: flex;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background: #2D2D2D;
  padding-top: 30px;
  transition: all .2s ease;

  @media(max-width: 800px) {
    left: ${({ isOpen }) => isOpen ? 0 : '-400px'};
  }
`

export const Navigation = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`

export const ListItem = styled(NextLink)`
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;

  &:last-child {
    margin-left: 1px;
  }

  svg {
    text-align: center;
    fill: white;
  }
`

export const LinkItem = styled.p`
  font-size: 15px;
  color: white;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  width: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.10);
`
