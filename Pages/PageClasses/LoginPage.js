class LoginPage {

  getUsernameInputField() {
    return cy.get('input[name="username"]');
  }

  getPasswordInputField() {
    return cy.get('input[name="password"]');
  }

  getButton() {
    return cy.get('input[value ="Login"]');
  }

  getLogo() {
    return cy.get('#logomini');
  }

  getText() {
    return cy.get('h1');
  }
  getError() {
    return cy.get('.has-error');
  }

  checkUsernameInputField() {
    this.getUsernameInputField().should('be.visible');
  }

  checkPasswordInputField() {
    this.getPasswordInputField().should('be.visible');
  }

  checkButton() {
    this.getButton().should('be.visible');
  }

  checkLogo() {
    this.getLogo().should('be.visible');
  }

  checkUrl(url) {
    cy.url().should('include', url);
  }

  checkText(text) {
    this.getText().invoke('text').then($data => { cy.wrap($data).should('include', text) });
  }

  visit(value) {
    cy.visit(value);
  }

  fillUsername(name) {
    return this.getUsernameInputField().clear().type(name);
  }

  fillPassword(password) {
    return this.getPasswordInputField().clear().type(password);
  }

  clickOnTheButton() {
    return this.getButton().click();
  }

  checkErrorIsExist() {
    this.getError().invoke('text').then($data => { cy.wrap($data).should('exist', true) })
  }

  checkErrorAppear(error) {
    this.getError().invoke('text').then($data => { cy.wrap($data.trim()).should('equal', error) })
  }

}
export default LoginPage;