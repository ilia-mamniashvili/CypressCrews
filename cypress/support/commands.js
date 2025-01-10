import 'cypress-real-events/support';

Cypress.Commands.add('SAMlogin', (email, password) => {
    cy.visit('https://sam.dev.syniotec.com/calendar');
    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get('.form-group--password > .form-control').type(password);
    cy.get('.btn').click();
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

Cypress.Commands.add('DeleteCrew', () => {
    cy.get('.crew-item__text').each(($el) => {
        const crewName = $el.text().trim();

    if (crewName === 'Test Name') {
        // Perform actions when the crew with name "Test Name" is found
        cy.log('Crew with name "Test Name" found!');
        cy.wrap($el).click();
        cy.get('[data-cy="crew-delete"] > .fas').click();
        cy.get('.filled').click();
        return false; // This will stop the iteration
    }
    });
});

Cypress.Commands.add('addCompanyCar', () => {
    cy.get('.crew-item__text').each(($el) => {
        const crewName = $el.text().trim();

        if (crewName === 'Test Name') {
            // Perform actions when the crew with name "Test Name" is found
            cy.wrap($el).click();
            cy.get('[data-cy="company-car-edit"] > .fas').click();
            cy.get('.company-car__add').click();

            // Click on the dropdown to open the options
        cy.get('.mat-mdc-select-min-line')
            .invoke('attr', 'aria-expanded', 'true')
            .click();
            // Select the "Transporter" option by clicking on the span element
            cy.contains('#mat-option-0', 'Transporter').realClick();       
            cy.get(':nth-child(2) > sam-input-control.ng-untouched .ng-untouched').type('as-123-ds');
            cy.get(':nth-child(3) > sam-input-control.ng-untouched .ng-untouched').type('N132');
            cy.get('.company-car-modal__footer-submit').click();
            return false; // This will stop the iteration
        }
    });
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
