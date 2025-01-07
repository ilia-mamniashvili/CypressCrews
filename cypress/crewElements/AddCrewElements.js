export class AddCrewElements {

    CrewNavPage = () => cy.get(':nth-child(3) > .nav-item').realHover();

    CrewsPage = () => cy.get('a[href="/kolone"]').click();

    CrewAddButton = () => cy.get('[data-cy="add-crew-button"]').click();
}
