/// <reference types="cypress" />

import { fakerPT_BR } from '@faker-js/faker';


describe('Testes via API', () => {
 
    it('Deve fazer login com sucesso', () => {
      cy.api({
        method: 'POST',
        url: '/login',
        body: 
          {
            "email": "fulano@qa.com",
            "password": "teste"
          }
        
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Login realizado com sucesso')
        cy.log(response.body.authorization)
      })
    })  

    it('Deve listar todos os usuarios', () => {
        cy.api({
            method: 'GET',
            url: '/usuarios/'
        }).then((response) => {
            expect(response.status).to.equal(200)           
        })
    })

    it('Deve cadastrar novo usuario', () => {
        cy.api({
            method: 'POST',
            url: '/usuarios',
            body: 
              {
                "nome": fakerPT_BR.person.fullName(),
                "email": fakerPT_BR.internet.email(),
                "password": fakerPT_BR.internet.password(),
                "administrador": "true"
              }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
            cy.log(response.body.authorization)
    })
  })  
})