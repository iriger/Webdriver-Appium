import { expect } from "@wdio/globals";
import FormsPage from "../pages/forms.page.js";

describe("Testing forms page", () => {

  beforeEach(async () => {
    await FormsPage.openForms();
  });

  it("Type into input field", async () => {
    const text = "Hello World";
    await FormsPage.inputField.setValue(text);
    await expect(FormsPage.inputResult).toHaveText(text);
  });

  it("Dropdown menu", async () => {
    const value = "Appium is awesome";
    await FormsPage.openDropdown();
    await FormsPage.selectDropdownOption(value);
    await expect(FormsPage.getdisplayedOption(value)).toBeDisplayed();
  });

  it("Switch verification", async () => {
    await FormsPage.tapOnSwitch();
    await expect(FormsPage.switchText).toHaveTextContaining("OFF");
    await FormsPage.tapOnSwitch();
    await expect(FormsPage.switchText).toHaveTextContaining("ON");
  });

});
