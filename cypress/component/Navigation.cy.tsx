import { Navigation } from '@/components'
import { asideToBeClose, asideToBeOpen, clickButton, itemsToBeVisible, setMobileViewport } from '../utils'

describe('<Navigation />', () => {
  beforeEach(() => {
    cy.mount(<Navigation />)
  })

  it('renders', () => {
    itemsToBeVisible([
      'navbar',
      'aside'
    ])
  })

  it('should open aside when click aside-button on mobile render', () => {
    setMobileViewport()

    clickButton('aside-button')

    asideToBeOpen()
  })

  it('should close aside when toggle click aside-button on mobile render', () => {
    setMobileViewport()

    clickButton('aside-button')
    clickButton('aside-button')

    asideToBeClose()
  })
})
