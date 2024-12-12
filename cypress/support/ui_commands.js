/// <reference types="cypress" />

import { fakerPT_BR } from '@faker-js/faker';

Cypress.Commands.add('criarUsuario', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    
    const nome = fakerPT_BR.person.fullName();
    const email = fakerPT_BR.internet.email();
    const senha = fakerPT_BR.internet.password();

    cy.get('#nome').type(nome);
    cy.get('#email').type(email);
    cy.get('#password').type(senha, { log: false });
    cy.get('[data-testid="cadastrar"]').click();
    
})

Cypress.Commands.add('logarComUsuario', (
    email = Cypress.env('email'),
    senha = Cypress.env('senha'),
) => {
    cy.visit('https://front.serverest.dev/login')    
    cy.get('#email').type(email)
    cy.get('#password').type(senha, { log: false })
    cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('logout', () => {    
    cy.get('[data-testid="logout"]').click()

})