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
        cy.CreateCrew();
        
        addCrewElements.CrewsPage(); 
        
        cy.get('.crew-item__text').each(($el) => {
            const crewName = $el.text().trim();
            
            if (crewName === 'Test Name') {
                // Perform actions when the crew with name "Test Name" is found
                cy.wrap($el).click();
                cy.wait(3000);
                cy.get('[data-cy="equipment-overview-edit"] > .fas').click({force : true});
            //addCrewElements.CrewEquipmentEdit().click();
            cy.get(':nth-child(1) > .eq-card > .eq-card__action > .eq-card__add').click();
            cy.get(':nth-child(2) > .eq-card > .eq-card__action > .eq-card__add').click();

            addCrewElements.CrewAddPerson().click();
            cy.get(':nth-child(1) > sam-person-card > .pe-card > .pe-card__actions > .pe-card__actions-add').click().should('be.visible');
            cy.get(':nth-child(1) > sam-person-card > .pe-card > .pe-card__actions > .pe-card__actions-add').click().should('be.visible');

            addCrewElements.CrewAddOverview().click();
            cy.get(':nth-child(2) > .eq-card > .eq-card__info > .eq-card__content > .eq-card__row > .eq-card__remove > .fas').click().should('be.visible');
            cy.get(':nth-child(2) > .pe-card > .pe-card__content > .pe-card__content-info > .pe-card__content-row > .pe-card__content-button').click().should('be.visible');


            return false; // This will stop the iteration
        }
    });
});
});