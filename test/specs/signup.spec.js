import { expect } from "@wdio/globals";
import LoginPage from "../pages/login.page.js";
import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const password = faker.internet.password({ length: 8, memorable: true });

describe("Testing login page - SignUp functionality", () => {

  it("Signup with valid credentials", async () => {
    await LoginPage.openLoginPage();
    await LoginPage.openSignup();
    await LoginPage.signUp(email, password);
    await expect(LoginPage.popupSignupSuccessMessage).toBeExisting();
    await expect(LoginPage.popupSignupSuccessMessage).toHaveTextContaining(
      "You successfully signed up!"
    );
  });

});
