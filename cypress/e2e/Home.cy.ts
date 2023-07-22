describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders', () => {
    cy.contains('h1', 'Home page')
  })
})
