import { CrewElements } from '../../crewElements/CrewElements.js';

describe('Add Crew', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });
    it('should delete a new crew member', () => {
        
        const deleteCrewElements = new CrewElements();
       
        cy.visit('https://sam.dev.syniotec.com/kolone/list');

        cy.wait(5000);
        deleteCrewElements.CrewsPage(); 
        
        cy.DeleteCrew();

    });
});