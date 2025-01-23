import { CrewElements } from '../../crewElements/CrewElements.js';

describe('Crew planner filters', () => {
    it('should test the filters', () => {

        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.SAMlogin(email, password);
        cy.get('.lang').click();
        cy.get('.ch2-dialog-actions > .ch2-allow-all-btn').click();

        cy.wait(8000);
        
        const crewElements = new CrewElements();

        crewElements.CrewPlannerPage();
        cy.wait(1000);
        cy.get('.mbsc-timeline-grid > :nth-child(2)').click();
        //project
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
        cy.get('[data-cy="crew-project-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').click().realType('ProjTest');

        cy.get('.shl-select-option').click();
        //crew
        cy.get('[data-cy="crew-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').click().realType('Zzz');
        cy.get('.shl-select-option').contains(' zzz ').click();
        //cy.get('[data-cy="save-booking"]').click();
    })
});