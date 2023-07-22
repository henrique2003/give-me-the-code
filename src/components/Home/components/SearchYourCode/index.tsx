import { BiSearch } from 'react-icons/bi'

import * as S from './styles'

const SearchYourCode: React.FC = () => {
  return (
    <S.Container data-cy="search-your-code">
      <S.Title data-cy="title">Need some <span>code</span> for your application?</S.Title>
      <S.Search data-cy="input-container">
        <S.Input
          type='text'
          placeholder='Search to a code here'
          data-cy="input"
        />
        <BiSearch size={25} data-cy="icon" />
      </S.Search>
    </S.Container>
  )
}

export default SearchYourCode
