import 'cypress-real-events/support';
import { CrewElements } from '../crewElements/CrewElements.js';


const crewElements = new CrewElements();

Cypress.Commands.add('SAMlogin', (email, password) => {
    cy.visit('https://sam.dev.syniotec.com/calendar');
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-control').type(email).should('be.visible');
    cy.get('.form-group--password > .form-control').type(password);
    cy.get('.lang').click();
    cy.get('.btn').click();
    cy.get('.ch2-dialog-actions > .ch2-allow-all-btn').click();
});

Cypress.Commands.add('CookieBtn', () =>{
    cy.get('.ch2-dialog-actions > .ch2-allow-all-btn').click();
});

Cypress.Commands.add('CreateCrewWithName', (CrewName) => {
    crewElements.CrewAddButton().click().should('be.visible');
    cy.wait(5000);
    crewElements.CrewTitleAdd().type(CrewName);
    crewElements.CrewResponsiblePersonAdd().click();
        cy.contains('only, one').click();
        crewElements.CrewAreaAdd().click();
        cy.contains('Direction 1').click();
        crewElements.CrewTypeAdd().click();
        cy.contains('Road construction').click();
        cy.get('.add-form__box').should('have.css', 'background-color', 'rgb(243, 26, 26)');
        crewElements.CrewCreatebutton().click({force: true});
        cy.get('.confirmation__actions > .filled').click();
});



Cypress.Commands.add('CreateCrew', () => {
    crewElements.CrewAddButton().click().should('be.visible');
    cy.wait(5000);
    crewElements.CrewTitleAdd().type('Test Name');
    crewElements.CrewResponsiblePersonAdd().click();
        cy.contains('only, one').click();
        crewElements.CrewAreaAdd().click();
        cy.contains('Direction 1').click();
        crewElements.CrewTypeAdd().click();
        cy.contains('Road construction').click();
        cy.get('.add-form__box').should('have.css', 'background-color', 'rgb(243, 26, 26)');
        crewElements.CrewCreatebutton().click({force: true});
        cy.get('.confirmation__actions > .filled').click();
});

Cypress.Commands.add('DeleteCrew', () => {
    cy.get('.crew-item__text').each(($el) => {
        const crewName = $el.text().trim();

    if (crewName === 'Test Name') {
        // Perform actions when the crew with name "Test Name" is found
        cy.wrap($el).click();
        cy.get('[data-cy="crew-delete"] > .fas').click();
        cy.get('.filled').click();
        return false; // This will stop the iteration
    }
    });
});


Cypress.Commands.add('AddCompanyCarInside', () => {
    
    //cy.wait(1000);
    cy.get('.company-car__add').click();
    cy.wait(1000);
        // Click on the dropdown to open the options
    cy.get('.mat-mdc-select-placeholder').invoke('attr', 'aria-expanded', 'true').click();
        // Select the "Transporter" option by clicking on the span element                    
    
        // cy.get('#mat-option-17').realClick();    
    cy.get(':nth-child(1) > #mat-select-4-panel').realClick();
    cy.get(':nth-child(2) > sam-input-control.ng-untouched .ng-untouched').type('as-123-ds');
    cy.get(':nth-child(3) > sam-input-control.ng-untouched .ng-untouched').type('N132');
    cy.wait(1000);
    cy.get('[type="submit"]').click();
    //cy.get('.company-car-modal__footer-submit').realClick();
});


Cypress.Commands.add('AddCompanyCar', () => {
    crewElements.CrewTitle().each(($el) => {
        const crewName = $el.text();

        if (crewName === 'Test Name') {
            // Perform actions when the crew with name "Test Name" is found
            cy.wrap($el).click();
            cy.get('[data-cy="company-car-edit"] > .fas').click();
            cy.wait(1000);
            cy.get('.company-car__add').click();
            cy.wait(1000);
            // Click on the dropdown to open the options
            cy.get('.mat-mdc-select-placeholder').invoke('attr', 'aria-expanded', 'true').click();
            // Select the "Transporter" option by clicking on the span element                    
            
             cy.get('#mat-option-17').realClick();    

            
            //cy.get(':nth-child(1) > #mat-select-4-panel').realClick();
            cy.get(':nth-child(2) > sam-input-control.ng-untouched .ng-untouched').type('as-123-ds');
            cy.get(':nth-child(3) > sam-input-control.ng-untouched .ng-untouched').type('N132');
            cy.wait(1000);
            cy.get('[type="submit"]').click();
            //cy.get('.company-car-modal__footer-submit').realClick();
            return false; // This will stop the iteration
        }
    });
});

Cypress.Commands.add('EditCompanyCar', () => {
    cy.get(':nth-child(1) > .company-car-card > :nth-child(1) > .company-car-card__row-rightside > :nth-child(2) > svg-icon > svg > #Group_19793 > #Rectangle_10577 > [width="24"]').click();
    cy.wait(2000);
    cy.get('.mat-mdc-form-field-infix')
            .invoke('attr', 'aria-expanded', 'true')
            .click();
    // Select the "Transporter" option by clicking on the span element
    cy.get('#mat-option-20').realClick();    
    cy.get(':nth-child(2) > sam-input-control.ng-untouched .ng-untouched').type('qw-321-er');
    cy.get(':nth-child(3) > sam-input-control.ng-untouched .ng-untouched').type('N133');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(1) > .company-car-card > :nth-child(1) > .company-car-card__row-rightside > :nth-child(1) > svg-icon > svg > #Group_19794 > #Rectangle_5879 > [width="24"]').click();
    cy.get('.confirmation__actions > .filled').click();
});

Cypress.Commands.add('AddCrewEquipment', () => {
    crewElements.CrewAddEquipment().click().should('be.visible');
    cy.get(':nth-child(1) > .eq-card > .eq-card__action > .eq-card__add').click().should('be.visible');
    cy.wait(1000);
    //cy.get('.confirmation-dialog__actions > .filled').click();
});

Cypress.Commands.add('AddCrewPerson', () => {
    crewElements.CrewAddPerson().click().should('be.visible');
    cy.get(':nth-child(1) > sam-person-card > .pe-card > .pe-card__actions > .pe-card__actions-add').click().should('be.visible');
});

Cypress.Commands.add('CrewOverviewFinish', () => {
    crewElements.CrewAddOverview().click().should('be.visible');
    cy.get('[data-cy="add-crew-finish"]').click();
});

Cypress.Commands.add('CrewPlannerFilters', () => {
    //Title
    crewElements.crewPlannerSearchByTitleFilter().click().type('reg');
    //Branch
    crewElements.crewPlannerBranchFilter().click({ force : true }).realHover();
    cy.get('.shl-select-options-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .shl-select-option-dropdown > .ng-star-inserted').click();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .shl-select-option-dropdown > .ng-star-inserted > .shl-i').click();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > shl-tree-option.ng-star-inserted > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
    //Project
    crewElements.crewPlannerProjectFilter().click();
    cy.get(':nth-child(1) > .shl-select-option').click();
    cy.get('[data-cy="crew-planner-projects"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click();
    //Calendar
    crewElements.CrewCalendarIcon().click();       
    crewElements.CalendarTodayCircle().click();
    crewElements.CalendarTodayCircle().click();
    cy.get('.cdk-overlay-backdrop').click();
    //filter icon
    crewElements.CrewFilterIcon().click();
    cy.get('.filter-container__body-item > .filter-container__form-select > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click();
    cy.get(':nth-child(1) > .shl-select-options').click();
    cy.wait(2000);
    //cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
    cy.get('.filter-container__body-item > .filter-container__form-select > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-pristine').realClick();
    cy.get('.filter-container__footer-submit').click();
    //clear filters
    crewElements.CrewFilterIcon().click();
    cy.get('.filter-container__footer-clear').click();
    cy.get('.filter-container__header-close > img').click();
})

Cypress.Commands.add('CrewBookingViaCrew', (ProjectName, CrewName) => {
 
    crewElements.CrewPlannerPage();

    cy.wait(1000);

    cy.get('.mbsc-timeline-grid > :nth-child(2)').click();
        //calendar
    crewElements.CrewBookingCalendarIcon().click();       
    crewElements.CalendarTodayCircle().click();
    cy.get('[data-cy="crew-start-time"] > .shl-time-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action').click();
    cy.get(':nth-child(1) > .shl-time-selector-scroll > .shl-time-selector-line-itmes > :nth-child(27)').click();
    cy.get('.shl-time-selector-line-itmes > :nth-child(62)').click();
    cy.get('.shl-button-content-container-value').click();

    cy.get('[data-cy="crew-end-date"] > .shl-date-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn').click();
    cy.get('.shl-calendar-dates > :nth-child(4) > :nth-child(2) > span').click();

        //project
    cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
    cy.get('[data-cy="crew-project-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').click().realType('ProjTest');

    cy.get('.shl-select-option').click();
        //crew
    cy.get('[data-cy="crew-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').click().realType(CrewName);
    cy.get('.shl-select-option').contains(CrewName).click();

    cy.wait(1000);
    cy.get('[data-cy="save-booking"]').realClick();
})