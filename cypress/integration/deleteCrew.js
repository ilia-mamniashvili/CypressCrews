import { AddCrewElements } from '../../crewElements/AddCrewElements.js';

describe('Add Crew', () => {
    it('should add a new crew member', () => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.SAMlogin(email, password);
        cy.get('.lang').click();

        const addCrewElements = new AddCrewElements();

        cy.wait(5000);
        addCrewElements.CrewsPage(); 
        cy.DeleteCrew();

    });
});