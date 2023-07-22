import { ILink } from '../utils/render-links'

export interface INavLink {
  textName: string
  link: string
  dataCy: string
}

export const navLinks: INavLink[] = [
  {
    textName: 'Home',
    link: '/',
    dataCy: 'home-link'
  },
  {
    textName: 'Codes',
    link: '/codes',
    dataCy: 'codes-link'
  },
  {
    textName: 'Faq',
    link: '/faq',
    dataCy: 'faq-link'
  }
]

export const actionLinks: ILink[] = [
  {
    link: '/login',
    dataCy: 'login-link'
  },
  {
    link: '/cart',
    dataCy: 'cart-link'
  }
]
