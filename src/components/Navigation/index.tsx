'use client'

import { useState } from 'react'

import { Aside, Navbar } from '@/components'

const Navigation: React.FC = () => {
  const [asideStatus, setAsideStatus] = useState(false)

  function handleOpenAside(): void {
    setAsideStatus(!asideStatus)
  }

  return (
    <>
      <Navbar handleOpenAside={handleOpenAside} />
      <Aside isOpen={asideStatus} />
    </>
  )
}

export default Navigation
