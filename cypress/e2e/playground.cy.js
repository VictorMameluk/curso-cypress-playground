describe('Cypress Playground', () => {
  beforeEach(() => {
    cy.visit  ('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('Shows a promotional banner', () => {
    cy.get('#promotional-banner').should('be.visible')
    // implementação do caso de teste.
  })

  it('Clicks the subscribe button and shows a sucess message', () => {
    cy.contains('button', 'Subscribe').click( )

    cy.get('#success').should('be.visible')
  })

  it('types in an input which "signs" a form, then asserts it is signed', () => {
    cy.get('#signature-textarea').type('victor')

    cy.contains('#signature', 'victor').should('be.visible')
  })

  it('types in the signature field, checks the checkbox to see the preview, the unchecks it', () =>{
    cy.get('#signature-textarea-with-checkbox').type('victor')
    cy.get('#signature-checkbox').check()

    cy.contains('#signature-triggered-by-check', 'victor').should('be.visible')
    cy.get('#signature-checkbox').uncheck()

    cy.contains('#signature-triggered-by-check', 'victor').should('not.exist')
  })

  it('checks both possible radios and asserts if it is "on" or "off" ', () => {
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

  it.only('', () =>{

  })

})

