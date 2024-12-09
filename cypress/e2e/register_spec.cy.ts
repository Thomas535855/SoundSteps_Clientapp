/// <reference types="cypress" />

describe('User Registration Test', () => {
  const testUser = {
    username: 'testuser',
    password: 'password',
    email: 'email@email.com',
  };

  const apiUrl = 'http://localhost:7295/api/Users';

  beforeEach(() => {
    cy.request({
      method: 'DELETE',
      url: `${apiUrl}/DeleteByEmail?email=${testUser.email}`,
      failOnStatusCode: false,
    });
  });

  afterEach(() => {
    cy.request({
      method: 'DELETE',
      url: `${apiUrl}/DeleteByEmail?email=${testUser.email}`,
      failOnStatusCode: false,
    });
  });

  it('should register a new user', () => {
    cy.visit('/user/register');

    cy.get('input[type="text"]').type(testUser.username);
    cy.get('input[type="password"]').type(testUser.password);
    cy.get('input[type="email"]').type(testUser.email);

    cy.get('form').submit();

    cy.url().should('include', '/#/user/selectinstrument');
  });
});
