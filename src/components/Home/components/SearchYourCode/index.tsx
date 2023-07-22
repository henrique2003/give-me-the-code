import { BiSearch } from 'react-icons/bi'

import * as S from './styles'

const SearchYourCode: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Need some <span>code</span> for your application?</S.Title>
      <S.Search>
        <S.Input type='text' placeholder='Search to a code here' />
        <BiSearch size={25} />
      </S.Search>
    </S.Container>
  )
}

export default SearchYourCode
