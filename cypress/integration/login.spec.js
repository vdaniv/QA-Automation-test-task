import LoginPage from "../../Pages/PageClasses/LoginPage"
const home = new LoginPage;
let data;

describe('QA Automation test task', () => {
    before('Create an environment file and pick up all the credentials values from there', () => {
        cy.fixture('dataForLogin').then(($dataForLogin) => {
            data = $dataForLogin;
        })
    })
    it('Open Home Page', () => {
        home.visit(data.link);
    })

    it('Fill in the “Username” and “Password” input fields and click the “LogIn” button', () => {
        home.fillUsername(data.username);
        home.fillPassword(data.password);
        home.clickOnTheButton();
    })

    it('Use an assertion library and verify that all the elements are present on the page', () => {
        home.checkUrl(data.urlPharse);
        home.checkLogo();
        home.checkText(data.homePhrase);
        home.checkUsernameInputField();
        home.checkPasswordInputField();
        home.checkButton();
        home.checkErrorIsExist();
    })

    it('Verify that all the error messages appear', () => {
        home.checkErrorAppear(data.errorMessage);
    })

    it('Create a test-case that will fail because of unsuccessful login', () => {
      cy.requestForLogin(data.link, data.username, data.password, 302);
    })
})
