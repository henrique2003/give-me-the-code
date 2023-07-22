import * as S from './styles'

const Logo: React.FC = () => {
  return (
    <S.Logo data-cy="logo">
      <span>
        {'<'}
      </span>
      GiveMeTheCode
      <span>
        {' />'}
      </span>
    </S.Logo>
  )
}

export default Logo
