import { CrewElements } from '../../crewElements/CrewElements.js';

describe('Add Crew', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });
    it('should add a new crew member', () => {
        
        cy.visit('https://sam.dev.syniotec.com/kolone/list');
        
        const addCrewElements = new CrewElements();
        
        cy.wait(10000);
        addCrewElements.CrewsPage(); 
        //addCrewElements.CrewAddButton().click().should('be.visible');
        cy.CreateCrew();
    });
});
