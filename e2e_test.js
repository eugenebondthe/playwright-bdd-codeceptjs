const LoginPage = require("./pages/LoginPage")

Feature('Zero Bank App - E2E Tests')

Before(({ I }) => {
  console.log('BEFORE HOOK')
  I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({ I }) => {
  console.log('AFTER HOOK')
})

Scenario('Login Test - Negative', ({ I, LoginPage }) => {
  I.click('#signin_button')
  I.seeElement('#login_form')
  LoginPage.submitLogin('invalid username', 'invalid_password')
  LoginPage.assertLoginFormIsVisible()
  I.seeElement('.alert-error')
})
