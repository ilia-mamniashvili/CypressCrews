import { CrewElements } from '../../crewElements/CrewElements.js';

describe('Crew planner filters', () => {
    it('should test the filters', () => {

        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.SAMlogin(email, password);
        cy.get('.lang').click();
        cy.get('.ch2-dialog-actions > .ch2-allow-all-btn').click();

        const crewElements = new CrewElements();
        
        cy.wait(8000);

        crewElements.CrewPlannerPage();
        //cy.wait(5000);
        cy.crewPlannerFilters();
    })
});