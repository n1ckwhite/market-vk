describe('Тест', () => {
  it('Проверка покупки', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('-').click()
  })
})
