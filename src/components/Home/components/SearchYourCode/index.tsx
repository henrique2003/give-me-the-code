import { BiSearch } from 'react-icons/bi'

import * as S from './styles'
import Title from './Title'

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
        <S.OptionItem href="/codes/screens/mobile">Mobile screens</S.OptionItem>
        <S.OptionItem href="/codes/screens/mobile">Mobile screens</S.OptionItem>
        <S.OptionItem href="/codes/screens/mobile">Mobile screens</S.OptionItem>
      </S.Options>
    </S.Container>
  )
}

export default SearchYourCode
