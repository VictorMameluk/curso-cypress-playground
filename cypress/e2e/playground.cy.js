describe('Cypress Playground', () => {
  beforeEach(() => {
    cy.visit  ('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('Mostre a pagina web', () => {
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

  it('Verificar se está "on" ou "off" ', () => {
    cy.contains('#on-off', 'ON').should('be.visible')
    cy.get('#off').check()

    cy.contains('#on-off', 'OFF').should('be.visible')
    cy.contains('#on-off', 'ON').should('not.exist')

    cy.get('#on').check()

    cy.contains('#on-off', 'ON').should('be.visible')
    cy.contains('#on-off', 'OFF').should('not.exist')

  })

  it('', () => {
    cy.contains('p', "You haven't selected a type yet.").should('be.visible')// usado para saber se esta ok

    cy.get('#selection-type').select('VIP')
    cy.contains('#selection-type', 'VIP')
    cy.get('#selection-type').select(1)
  })

  it('', () =>{

  })

})

