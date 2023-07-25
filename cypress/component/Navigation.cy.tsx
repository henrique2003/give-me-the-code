import { Navigation } from '@/components'
import { asideToBeClose, asideToBeOpen, clickButton, getDataCy, itemToBeVisible, itemsToBeVisible, setMobileViewport } from '../utils'
import { itemNotToBeVisible } from '../utils/visible-items'

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

    itemToBeVisible('aside-overlay')
    asideToBeOpen()
  })

  it('should close aside when toggle click aside-button on mobile render', () => {
    setMobileViewport()

    clickButton('aside-button')
    clickButton('aside-overlay')

    itemNotToBeVisible('aside-overlay')
    asideToBeClose()
  })
})
