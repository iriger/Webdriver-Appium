import { expect } from "@wdio/globals";
import LoginPage from "../pages/login.page.js";
import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const password = faker.internet.password({ length: 8, memorable: true });

describe("Testing login page - Login functionality", () => {

  it("Login with the valid credidntials", async () => {
    await LoginPage.openLoginPage();
    await LoginPage.openLogin();
    await LoginPage.login(email, password);
    await expect(LoginPage.popupLoginSuccess).toBeExisting();
    await expect(LoginPage.popupLoginSuccessMessage).toHaveTextContaining(
      "Success"
    );
  });
  
});
