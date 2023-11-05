// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import './commands';

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

  Cypress.Commands.add('switchToIframe', (iframe) => {
    return cy
        .get(iframe)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap);
    });

    Cypress.Commands.add('getIframe', () => {
      return cy
          .get('.aut-iframe')
          .its('0.contentDocument.body').should('not.be.empty')      
          .then(cy.wrap)
      });

      Cypress.Commands.add('getIframeBodyWithSelector', (waitForSelector) => {
        return cy.get('iframe.locatoriframe')
          .its('0.contentDocument.body')
          .should(body => {
            expect(Cypress.$(body).has(waitForSelector).length).gt(0)
          })
          .then(cy.wrap)
      });

      beforeEach(() => {
        cy.intercept(`${Cypress.config('baseUrl')}**`, req => {
            req.headers['DEVELOPMENT_AGENT'] = "APP_TESTING"
        });
    });