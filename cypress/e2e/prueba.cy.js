
describe('Accedo al blog de paradigma', function() {
    it('Busco algun blog de Nicolás', function() {
        cy.visit('https://www.paradigmadigital.com/dev/testeo-api-rest-mocha-chai-http/');
        cy.get('p.post-author',{ timeout: 2000 })
 .children('a.author')
 .should('contain', 'Nicolás Cordero');
        cy.get('a.trigger').click();
        cy.get('input.text').type('chai-HTTP');
        cy.get('form.inputWithButton').submit();
        cy.get('article.post_search_list',{ timeout: 5000 })
 .children('h2')
 .children('a')
 .should('contain','Testeo de API REST con Mocha y Chai-HTTP');
        cy.get('article.post_search_list',{ timeout: 5000 })
 .children('h2')
 .children('a')
 .should('have.attr', 'title')
 .and('include', 'Testeo de API REST con Mocha y Chai-HTTP');
    })
 })
 
 