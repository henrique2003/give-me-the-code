import { Aside } from '@/components'
import { asideToBeClose, asideToBeOpen, getDataCy, itemToBeVisible, logoToBeRender, setMobileViewport } from '../utils'
import { actionLinks, navLinks } from '../mocks/navbar'

interface IIcons {
  dataCy: string
}

const icons: IIcons[] = [
  {
    dataCy: 'login-icon'
  },
  {
    dataCy: 'cart-icon'
  },
  {
    dataCy: 'faq-icon'
  },
  {
    dataCy: 'home-icon'
  },
  {
    dataCy: 'codes-icon'
  }
]

function mountComponent(status: boolean): void {
  cy.mount(<Aside isOpen={status} />)
}

describe('<Aside />', () => {
  it('should be visible when aside is open on mobile render', () => {
    setMobileViewport()

    mountComponent(true)

    asideToBeOpen()
    logoToBeRender()

    // Nav links
    navLinks.map(({
      dataCy,
      link
    }) => {
      cy.get(getDataCy(dataCy))
        .should('have.attr', 'href')
        .and('equal', link)
    })

    // Nav links text
    navLinks.map(({
      dataCy,
      textName
    }) => {
      cy.get(getDataCy(dataCy))
        .contains('p', textName)
    })

    // Actions links
    actionLinks.map(({
      dataCy,
      link
    }) => {
      cy.get(getDataCy(dataCy))
        .should('have.attr', 'href')
        .and('equal', link)
    })

    // Icons
    icons.map(({ dataCy }) => itemToBeVisible(dataCy))
  })

  it('should be hidden when aside is closed on mobile render', () => {
    setMobileViewport()

    mountComponent(false)

    asideToBeClose()
  })

  it('should be hidden on web render', () => {
    mountComponent(true)

    asideToBeClose()
  })
})
