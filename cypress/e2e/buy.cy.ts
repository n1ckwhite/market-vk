describe('Тест', () => {
  it('Проверка покупки', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('-').click()
    cy.get('._basket_4i0m1_1 > '
      + 'ul >'
      + ' ._basket__li_1eagf_1 >'
      + ' ._basket_9b93s_1 > '
      + '._basket__text_9b93s_31 >'
      + ' ._btn_14gf9_1 >'
      + ' img')
      .click()
  })
})
