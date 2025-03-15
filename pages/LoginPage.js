const { I } = inject()

module.exports = {
  // Set locators
  loginForm: '#login_form',
  username: '#user_login',
  password: '#user_password',
  submitBtn: '.btn-primary',
  
  // Create methods
  submitLogin(username, password) {
    I.fillField(this.username, username)
    I.fillField(this.password, password)
    I.click(this.submitBtn)
  },

  assertLoginFormIsVisible() {
    I.seeElement(this.loginForm)
  }
}
