'use client'

import styled from 'styled-components'

interface IOverlayProps {
  isShow: boolean
}

export const Overlay = styled.div<IOverlayProps>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: ${({ isShow }) => isShow ? 'block' : 'none'};
`
