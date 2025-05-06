class LoginPage {
  get loginWidget() {
    return $('//*[@content-desc="Login"]');
  }
  get btnSignUpContainer() {
    return $('//*[@content-desc="button-sign-up-container"]');
  }
  get btnLoginContainer() {
    return $('//*[@content-desc="button-login-container"]');
  }
  get inputEmail() {
    return $("~input-email");
  }
  get inputPassword() {
    return $("~input-password");
  }
  get inputRepeatPassword() {
    return $("~input-repeat-password");
  }
  get btnSignUp() {
    return $('//*[@content-desc="button-SIGN UP"]');
  }
  get btnLogin() {
    return $('//*[@content-desc="button-LOGIN"]');
  }
  get popupSignupSuccessMessage() {
    return $('//*[@resource-id="android:id/message"]');
  }
  get popupLoginSuccess() {
    return $(
      'android=new UiSelector().className("android.widget.FrameLayout").instance(0)'
    );
  }
  get popupLoginSuccessMessage() {
    return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  }
 
  async openLoginPage() {
    await this.loginWidget.click();
  }
  async openSignup() {
    await this.btnSignUpContainer.click();
  }
  async signUp(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.inputRepeatPassword.setValue(password);
    await this.btnSignUp.click();
  }
  async openLogin() {
    await this.btnLoginContainer.click();
  }
  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }
}

export default new LoginPage();
