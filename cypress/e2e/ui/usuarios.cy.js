/// <reference types="cypress" />

describe('Testes via UI', () => {
  it('Deve cadastrar usuário com sucesso', () => {
    cy.criarUsuario()
    cy.wait(2000)
    cy.url().should('eq', 'https://front.serverest.dev/home')
    cy.get('[data-testid="logout"]').should('be.visible')
    cy.get('[data-testid="botaoPesquisar"]').should('be.visible')
  })


  it('Deve logar com usuario cadastrado', () => {
    const email = Cypress.env('email')
    const senha = Cypress.env('senha')

    cy.logarComUsuario(email, senha)
    cy.url().should('eq', 'https://front.serverest.dev/admin/home')
    cy.get('[data-testid="logout"]').should('be.visible')    
  })

  it('Deve fazer logout', () => {
    cy.logarComUsuario()
    cy.logout()
    cy.url().should('eq', 'https://front.serverest.dev/login')
  })
})
