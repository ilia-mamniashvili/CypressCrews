import { CrewElements } from '../../crewElements/CrewElements.js';

describe('Add and Delete Crew', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });

    it('should log in and change language', () => {
        const addAndDeleteCrewElements = new CrewElements();
        //cy.wait(2000);
        // Since the session is cached, this won't log in again unless the session is invalidated
        cy.visit('https://sam.dev.syniotec.com/kolone/list'); // Ensure you're navigating to the correct initial page if required
        //cy.get('.lang').click();

        cy.wait(10000);
        //addAndDeleteCrewElements.CrewsPage();
        cy.CreateCrew();
        cy.wait(2000);
        addAndDeleteCrewElements.CrewsPage();   
        cy.DeleteCrew();
    });
});
