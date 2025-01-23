import { CrewElements } from '../../crewElements/CrewElements.js';

describe('create drag booking', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });
    it('should create crew, create booking with mouse drag', () => {

        const addCrewElements = new CrewElements();
        cy.visit('https://sam.dev.syniotec.com/kolone/list');
        //cy.wait(10000);
        //addCrewElements.CrewsPage(); 
        //addCrewElements.CrewAddButton().should('be.visible');
        const crewName = "Test Crew";
        cy.CreateCrewWithName(crewName);
        cy.wait(1000);
        //cy.addCompanyCarInside();
        cy.AddCrewEquipment();
        cy.CrewBookingViaCrew(' ', crewName);
    });
});
