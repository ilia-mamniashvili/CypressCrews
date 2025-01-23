import { CrewElements } from '../../crewElements/CrewElements.js';

describe('Crew planner filters', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });
    it('should test the filters', () => {

        const crewElements = new CrewElements();

        cy.visit('https://sam.dev.syniotec.com/groupe/list');
        //cy.wait(10000);
        crewElements.groupsTextName().each(($el) => {
            const groupName = $el.text().trim();
        
        if(groupName === 'Test Group'){
            cy.wrap($el).click();
            cy.get('[data-cy="delete-groupe"]').click();
            cy.wait(1000);
            cy.get('.confirmation__actions > .filled').click({force : true});
        } //groupebze rame an crewplannerze
        })
    })
})