'use client'

import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import optionsCode from '@/mocks/search-options'

import * as S from './styles'
import { OptionItem, Title } from './components'

export interface IOptionItem {
  link: string
  text: string
  subtext: string
}

const SearchYourCode: React.FC = () => {
  const [options, setOptions] = useState<IOptionItem[]>([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    setOptions(optionsCode)
  }, [])

  const filtredOptions = options.filter(item => item.text.includes(searchInput.toLowerCase()))

  function handlleOptions(): JSX.Element {
    if (filtredOptions.length <= 0) return <></>

    if (searchInput.length > 0) {
      return (
        <S.Options>
          {filtredOptions.map((item, index) => (
            <OptionItem
              item={item}
              key={index}
            />
          ))}
        </S.Options>
      )
    }

    return <></>
  }

  return (
    <S.Container data-cy="search-your-code">
      <Title />
      <S.Search data-cy="input-container">
        <S.Input
          type='text'
          placeholder='Search to a code here'
          data-cy="input"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <BiSearch size={25} data-cy="icon" />
      </S.Search>
      {handlleOptions()}
    </S.Container>
  )
}

export default SearchYourCode
