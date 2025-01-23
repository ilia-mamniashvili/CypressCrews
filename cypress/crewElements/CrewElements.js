export class CrewElements {

    CrewNavPage = () => cy.get(':nth-child(3) > .nav-item').realHover();

        // Crews Page //

    CrewsPage = () => cy.get(':nth-child(3) > .nav-item').should('be.visible').realHover().get('[data-cy="crew-list-page"]').click().get('.header-user__name > .ng-tns-c3139965283-1').realHover();

//Crew add button
    CrewAddButton = () => cy.get('[data-cy="add-crew-button"]');
//Crew title add
    CrewTitleAdd = () => cy.get('.shl-form-field-flex');
//Crew reponsible person add
    CrewResponsiblePersonAdd = () => cy.get('[data-cy="add-crew-responsible-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
//Crew area add
    CrewAreaAdd = () => cy.get('[data-cy="add-crew-area-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
//Crew type add
    CrewTypeAdd = () => cy.get('.mat-mdc-text-field-wrapper');
//Crew Create button
    CrewCreatebutton = () => cy.get('[data-cy="add-crew-create-field"]');
//Crew title (already existing)
    CrewTitle = () => cy.get('.crew-item__text');
//Crew add Equipment
    CrewAddEquipment = () => cy.get('[data-cy="crew-add-equipment"] > .groupe-navigation__title');
//Crew add Person
    CrewAddPerson = () => cy.get('[data-cy="crew-add-person"] > .groupe-navigation__title');
//Crew add Overview
    CrewAddOverview = () => cy.get('[data-cy="crew-overview"] > .groupe-navigation__title');
//Crew Equipment edit
    CrewEquipmentEdit = () => cy.get('[data-cy="equipment-overview-edit"]');
    


    // Crew planner Page //
    
    CrewPlannerPage = () => cy.get(':nth-child(3) > .nav-item').realHover().get('a[data-cy="crew-planner-nav-page"]').click();
//Crew planner Search by title filter
    crewPlannerSearchByTitleFilter  = () => cy.get('.shl-form-field-flex')
 //Crew planner Branch filter
    crewPlannerBranchFilter  = () => cy.get('[data-cy="crew-planner-branch"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
 //Crew planner Branch filter
    crewPlannerProjectFilter  = () => cy.get('.shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
//Crew planner Week view
    CrewPlannerWeekView  = () => cy.get('[data-cy="week"]')
//Crew planner month view
    CrewPlannerMonthView  = () =>  cy.get('[data-cy="month"]')
//Crew planner Custom view
    CrewPlannerCustomView  = () =>    cy.get('[data-cy="custom"]')
//Crew planner Timeline Left arrow
    CrewPlannerLeftArrow   = () =>    cy.get('[data-cy="crew-planner-left-arrow"]')
//Crew planner Timeline Right arrow
    CrewPlannerRightArrow  = () =>    cy.get('[data-cy="crew-planner-right-arrow"]')
//Crew planner Timeline Today
    CrewPlannerToday  = () =>    cy.get('[data-cy="crew-planner-today"]')
//Crew planner Booking button
    CrewPlannerBookingBtn  = () =>    cy.get('[data-cy="crew-planner-booking-button"]')
//Crew planner  project field
    CrewPlannerBookingProjectField  = () =>    cy.get('[data-cy="crew-booking"]')
//Crew planner  Booking radio btn
    CrewPlannerBookingRadioBtn  = () =>    cy.get('[data-cy="crew-booking"]')
//Crew planner  Release radio btn
    CrewPlannerReleaseRadioBtn  = () =>    cy.get('[data-cy="crew-release"]')
//Crew planner  Booking start date picker
    CrewPlannerBookingStartDate  = () =>    cy.get('[data-cy="crew-start-date"]')
//Crew planner  Booking start Time  picker
    CrewPlannerBookingStartTime  = () =>    cy.get('[data-cy="crew-start-time"]')
//Crew planner  Booking End Date  picker
    CrewPlannerBookingEndDate = () =>    cy.get('[data-cy="crew-end-date"]')
//Crew planner  Booking End Date  picker
    CrewPlannerBookingEndDate = () =>    cy.get('[data-cy="crew-end-date"]')
//Crew planner  Booking End time  picker
    CrewPlannerBookingEndTime = () =>    cy.get('[data-cy="crew-end-time"]')
//Crew planner  Booking Crew dropdown
    CrewPlannerBookingCrewDropdown = () =>    cy.get('[data-cy="crew-dropdown"]')
//Crew planner  Booking Crew Type dropdown
    CrewPlannerBookingCrewType = () =>    cy.get('[data-cy="crew-type-dropdown"]')
//Crew planner  Booking additional info
    CrewPlannerBookingAdditionalInfo = () =>    cy.get('[data-cy="crew-additional-info"]')
//Crew Calendar icon/button
    CrewCalendarIcon = () => cy.get(':nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn').invoke('attr', 'aria-expanded', 'true')
//Calendar Today circle
    CalendarTodayCircle = () => cy.get('.today > span')
//Crew Filter icon
    CrewFilterIcon = () => cy.get('.filter__icon')
    

//      CrewPlanner booking //
//CrewBookingCalendarIcon
    CrewBookingCalendarIcon = () => cy.get('[data-cy="crew-start-date"] > .shl-date-picker > shl-input.ng-untouched > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn')

        // Groups //
    
    GroupsPage = () => cy.get(':nth-child(3) > .nav-item').realHover().get('[data-cy="groupe-list-page"]').click()
//Group add button
    groupsAddButton = () => cy.get('[data-cy="add-groupe"]')
//Groups add name
    groupsAddName = () => cy.get('[data-cy="add-groupe-name"] > .input > .input-content-container > .input-flex-box > .input-flex-item > .ng-untouched')
//Groups add area
    groupsAddArea = () => cy.get('[data-cy="add-area-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')   
//Groups add type
    groupsAddType = () => cy.get('[data-cy="add-type-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
//Groups add Categories
    groupsAddCategories = () => cy.get(':nth-child(2) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn')
//Groups add Qualifications
    groupsAddQualifications = () => cy.get(':nth-child(4) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn > .fas')
//Groups save button
    groupsAddSave = () => cy.get('[data-cy="groupe-save"]')
//Groups Text name
    groupsTextName = () => cy.get('.groupe__text') 
     
}
