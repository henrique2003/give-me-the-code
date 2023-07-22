import { AiOutlineHome } from 'react-icons/ai'
import { TfiShoppingCart } from 'react-icons/tfi'
import { LiaFileCodeSolid } from 'react-icons/lia'
import { PiUserCircleGear } from 'react-icons/pi'
import { BsQuestionOctagon } from 'react-icons/bs'

import * as S from './styles'
import { Logo } from '@/components'

interface IProps {
  isOpen: boolean
}

const Aside: React.FC<IProps> = ({ isOpen }) => {
  return (
    <S.Container isOpen={isOpen} data-cy="aside">
      <Logo />
      <S.Navigation>
        <S.List>
          <S.ListItem href='/' data-cy="home-link">
            <AiOutlineHome data-cy="home-icon" size={22} />
            <S.LinkItem>Home</S.LinkItem>
          </S.ListItem>
          <S.ListItem href='/codes' data-cy="codes-link">
            <LiaFileCodeSolid data-cy="codes-icon" size={22} />
            <S.LinkItem>Codes</S.LinkItem>
          </S.ListItem>
          <S.ListItem href='/faq' data-cy="faq-link">
            <BsQuestionOctagon data-cy="faq-icon" size={21} />
            <S.LinkItem>Faq</S.LinkItem>
          </S.ListItem>
        </S.List>
        <S.Actions>
          <S.ListItem href='/login' data-cy="login-link">
            <PiUserCircleGear size={22} data-cy="login-icon" />
            <S.LinkItem>Login</S.LinkItem>
          </S.ListItem>
          <S.ListItem href='/cart' data-cy="cart-link">
            <TfiShoppingCart data-cy="cart-icon" size={21} />
            <S.LinkItem>Cart</S.LinkItem>
          </S.ListItem>
        </S.Actions>
      </S.Navigation>
    </S.Container>
  )
}

export default Aside
