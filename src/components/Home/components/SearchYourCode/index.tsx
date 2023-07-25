import { BiSearch } from 'react-icons/bi'

import optionsCode from '@/mock/search-options'

import * as S from './styles'
import { OptionItem, Title } from './components'

const SearchYourCode: React.FC = () => {
  return (
    <S.Container data-cy="search-your-code">
      <Title />
      <S.Search data-cy="input-container">
        <S.Input
          type='text'
          placeholder='Search to a code here'
          data-cy="input"
        />
        <BiSearch size={25} data-cy="icon" />
      </S.Search>
      <S.Options>
        {optionsCode.length > 0 && optionsCode.map((item, index) => (
          <OptionItem
            item={item}
            key={index}
          />
        ))}
      </S.Options>
    </S.Container>
  )
}

export default SearchYourCode
