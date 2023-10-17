'use client'

import { useState } from 'react'

import { Aside, Navbar } from '@/components'
import * as S from './styles'

const Navigation: React.FC = () => {
  const [asideStatus, setAsideStatus] = useState(false)

  function handleToggleAside(): void {
    setAsideStatus(!asideStatus)
  }

  return (
    <>
      <Navbar handleToggleAside={handleToggleAside} />
      <S.Overlay data-cy="aside-overlay" isShow={asideStatus} onClick={handleToggleAside} />
      <Aside isOpen={asideStatus} />
    </>
  )
}

export default Navigation
