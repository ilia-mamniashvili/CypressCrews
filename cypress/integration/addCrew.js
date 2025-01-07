import { AddCrewElements } from '../crewElements/AddCrewElements.js';

describe('Add Crew', () => {
    it('should add a new crew member', () => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.SAMlogin(email, password);
        cy.get('.lang').click();

        const addCrewElements = new AddCrewElements();

        //cy.CrewPage();
        cy.wait(10000);
        addCrewElements.CrewNavPage();
        cy.wait(5000);
        addCrewElements.CrewsPage(); 
        addCrewElements.CrewAddButton();
        cy.CreateCrew();
        // cy.get('.shl-form-field-infix > .ng-pristine').type('Test Name');
        // cy.get('[data-cy="add-crew-responsible-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper').click();
        // cy.contains('only, one').click();
        // cy.get('[data-cy="add-crew-area-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper').click();
        // cy.contains('Direction 1').click();
        // cy.get('.mat-mdc-text-field-wrapper').click();
        // cy.contains('Road construction').click();
        // cy.get('.add-form__box').should('have.css', 'background-color', 'rgb(243, 26, 26)');
        // cy.get('[data-cy="add-crew-create-field"]').click();
    });
});

