import { CrewElements } from '../../crewElements/CrewElements.js';

describe(' ', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });
    it('should create a crew, create car, edit and delete car, and delete crew', () => {
       
        
        
        const addCrewElements = new CrewElements();
        
        cy.visit('https://sam.dev.syniotec.com/kolone/list');
        cy.wait(2000);
        addCrewElements.CrewsPage(); 
        //cy.visit('https://sam.dev.syniotec.com/kolone/list');
        cy.wait(5000);
        // addCrewElements.CrewAddButton();
        // cy.wait(1000);
        cy.CreateCrew();
        cy.wait(2000);
        
        addCrewElements.CrewsPage(); 
        //cy.wait(1000);
        cy.AddCompanyCar();
        //cy.wait(1000);
        cy.EditCompanyCar();

        cy.AddCrewEquipment();
        cy.AddCrewPerson();
        cy.CrewOverviewFinish();

        cy.wait(2000);

        addCrewElements.CrewsPage(); 

        cy.DeleteCrew();

    });
});