import 'cypress-real-events/support';
Cypress.Commands.add('SAMlogin', (email, password) => {
    cy.visit('https://id.sam.dev.syniotec.com/auth?destination=https:%2F%2Fsam.dev.syniotec.com%2Fexception%2Fnot-found');
    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get('.form-group--password > .form-control').type(password);
    cy.get('.btn').click();
});

Cypress.Commands.add('CrewPage', () => {
    cy.wait(10000);
        addCrewElements.CrewNavPage();
        cy.wait(5000);
        addCrewElements.CrewsPage(); 
});

Cypress.Commands.add('CreateCrew', () => {
    cy.get('.shl-form-field-infix > .ng-pristine').type('Test Name');
        cy.get('[data-cy="add-crew-responsible-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('only, one').click();
        cy.get('[data-cy="add-crew-area-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('Direction 1').click();
        cy.get('.mat-mdc-text-field-wrapper').click();
        cy.contains('Road construction').click();
        cy.get('.add-form__box').should('have.css', 'background-color', 'rgb(243, 26, 26)');
        cy.get('[data-cy="add-crew-create-field"]').click({force: true});
        cy.get('.confirmation__actions > .filled').click();
});

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