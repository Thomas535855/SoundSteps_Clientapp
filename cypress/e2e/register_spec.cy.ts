describe('template spec', () => {
  it('should register a new user', () => {
    cy.visit('/user/register')

    cy.get('input[type="text"]').type('testuser')
    cy.get('input[type="password"]').type('password')
    cy.get('input[type="email"]').type('email@email.com')

    cy.get('form').submit()
  })
})