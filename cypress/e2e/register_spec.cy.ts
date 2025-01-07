/// <reference types="cypress" />
const timestamp = Date.now();
const username = `testuser${timestamp}`;
const email = `testuser@${timestamp}.com`;

describe('User Registration Test', () => {
  const testUser = {
    username: username,
    password: 'password',
    email: email,
  };

  const apiUrl = 'http://localhost:5029/api/Users';

  it('should register a new user', () => {
    cy.visit('/user/register');

    cy.get('input[type="text"]').type(testUser.username);
    cy.get('input[type="password"]').type(testUser.password);
    cy.get('input[type="email"]').type(testUser.email);

    cy.get('form').submit();

    cy.url().should('include', '/#/user/SelectInstrument');
  });
});
