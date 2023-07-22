import { Logo } from '@/components'
import { logoToBeRender } from '../utils'

describe('<Logo />', () => {
  beforeEach(() => {
    cy.mount(<Logo />)
  })

  it('renders', () => {
    // Logo
    logoToBeRender()
  })
})
