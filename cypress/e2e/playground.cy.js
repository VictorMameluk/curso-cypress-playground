describe('Cypress Playground', () => {
  beforeEach(() => {
    cy.visit  ('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('Visitando paginas web', () => {
    cy.get('#promotional-banner').should('be.visible')
    // implementação do caso de teste.
  })

  it('Clique no botão e mostre a mensagem de sucesso', () => {
    cy.contains('button', 'Subscribe').click( )

    cy.get('#success').should('be.visible')
  })

  it('Prencher o formulário e confirmar a assinatura', () => {
    cy.get('#signature-textarea').type('victor')

    cy.contains('#signature', 'victor').should('be.visible')
  })

  it('Clicar na caixa de seleção, marcar e desmarcar', () =>{
    cy.get('#signature-textarea-with-checkbox').type('victor')
    cy.get('#signature-checkbox').check()

    cy.contains('#signature-triggered-by-check', 'victor').should('be.visible')
    cy.get('#signature-checkbox').uncheck()

    cy.contains('#signature-triggered-by-check', 'victor').should('not.exist')
  })

  it('Verificar o radio "on" ou "off" ', () => {
    cy.contains('#on-off', 'ON').should('be.visible')
    cy.get('#off').check()

    cy.contains('#on-off', 'OFF').should('be.visible')
    cy.contains('#on-off', 'ON').should('not.exist')

    cy.get('#on').check()

    cy.contains('#on-off', 'ON').should('be.visible')
    cy.contains('#on-off', 'OFF').should('not.exist')

  })

  it('Selecionando opções em campos de seleção suspensa', () => {
    cy.contains('p', "You haven't selected a type yet.").should('be.visible')// usado para saber se esta ok

    cy.get('#selection-type').select('VIP')
    cy.contains('#selection-type', 'VIP')
    cy.get('#selection-type').select(1)
  })

  it('Selecionando múltiplas opções em campos do tipo select', () => {
    cy.contains('p', "You haven't selected any fruit yet.").should('be.visible')

    cy.get('#fruit').select(['apple', 'banana', 'cherry'])

    cy.contains('p', "You've selected the following fruits: apple, banana, cherry").should('be.visible')
  })

  it('Testando upload de arquivos', () =>{
    cy.get('input[type="file"]').selectFile('./cypress/fixtures/example.json')

    cy.contains('p', 'The following file has been selected for upload: example.json').should('be.visible')
  })

  it('Interceptando e aguardando requisições que ocorrem a nível de rede', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1').as('getTodo')

    cy.contains('button', 'Get TODO').click()
    cy.wait('@getTodo').its('response.statusCode').should('be.equal', 200)

    cy.contains('li', 'TODO ID: 1').should('be.visible')
    cy.contains('li', 'Title: delectus aut autem').should('be.visible')
    cy.contains('li', 'Completed: false').should('be.visible')
    cy.contains('li', 'User ID: 1').should('be.visible')
  })

  it('Sobrescrevendo o resultado de uma requisição á nivel de rede', () => {
    const todo = require('../fixtures/todo')


    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1', {fixture: 'todo'}).as('getTodo')

    cy.contains('button' , 'Get TODO').click()
    cy.wait('@getTodo').its('response.statusCode').should('be.equal', 200)


    cy.contains('li', `TODO ID: ${todo.id}`).should('be.visible')
    cy.contains('li', `Title: ${todo.title}`).should('be.visible')
    cy.contains('li', `Completed: ${todo.completed}`).should('be.visible')
    cy.contains('li', `User ID: ${todo.userId}`).should('be.visible')

  })

  it.only('Protegendo dados sensíveis com cypress', () => {
    cy.get('#password').type(Cypress.env('password'))

    cy.get('#show-password-checkbox').check()

    cy.get('#password-input input[type="password"]').should('not.exist')
    cy.get('#password-input input[type="text"]').should('be.visible').and('have.value', Cypress.env('password'))

    cy.get('#show-password-checkbox').uncheck()

    cy.get('#password-input input[type="password"]').should('be.visible')
    cy.get('#password-input input[type="text"]').should('not.exist')
  })

})

