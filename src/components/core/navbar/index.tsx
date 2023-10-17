import { GiHamburgerMenu } from 'react-icons/gi'
import { PiUserCircleGear } from 'react-icons/pi'
import { TfiShoppingCart } from 'react-icons/tfi'

import * as S from './styles'
import { Logo } from '@/components'

interface IProps {
  handleToggleAside: () => void
}

const Navbar: React.FC<IProps> = ({ handleToggleAside }) => {
  return (
    <S.Container data-cy="navbar">
      <Logo />
      <S.List>
        <S.ListItemLink data-cy="home-link" href='/'>Home</S.ListItemLink>
        <S.Point />
        <S.ListItemLink data-cy="codes-link" href='/codes'>Codes</S.ListItemLink>
        <S.Point />
        <S.ListItemLink data-cy="faq-link" href='/faq'>Faq</S.ListItemLink>
      </S.List>
      <S.Actions>
        <S.AuthLink data-cy="login-link" href='/login'>
          <PiUserCircleGear size={30} data-cy="login-icon" />
        </S.AuthLink>
        <S.CartLink data-cy="cart-link" href='/cart'>
          {2 > 0 && <span data-cy="cart-number-items">{2}</span>}
          <TfiShoppingCart data-cy="cart-icon" size={30} />
        </S.CartLink>
      </S.Actions>
      <S.AsideButton type='button' data-cy='aside-button' onClick={handleToggleAside}>
        <GiHamburgerMenu data-cy='aside-button-icon' color='white' size={30} />
      </S.AsideButton>
    </S.Container>
  )
}

export default Navbar
