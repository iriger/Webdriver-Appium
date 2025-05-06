class FormsPage {

  get formsWidget() {
    return $('//*[@content-desc="Forms"]');
  }
  get inputField() {
    return $("~text-input");
  }
  get inputResult() {
    return $("~input-text-result");
  }
  get dropdown() {
    return $("~Dropdown");
  }
  get dropdownOptions() {
    return $$(
      '//android.widget.CheckedTextView[@resource-id="android:id/text1"]'
    );
  }
  getdisplayedOption(text) {
    return $(`android=new UiSelector().text("${text}")`);
  }
  get switch() {
    return $("~switch");
  }
  get switchText() {
    return $("~switch-text");
  }

  async openForms() {
    await this.formsWidget.click();
  }
  async openDropdown() {
    await this.dropdown.click();
  }
  async selectDropdownOption(value) {
    const opts = await this.dropdownOptions;
    for (let opt of opts) {
      if ((await opt.getText()) === value) {
        await opt.click();
        break;
      }
    }
  }
  async tapOnSwitch() {
    this.switch.click();
  }
}

export default new FormsPage();
