import UIController from "./UIController.js";

class DataEntryFormPage extends UIController {
  constructor() {
    super();
    
    // Form Field Locators
    this.nameField = "input[name='name']";
    this.emailField = "input[name='email']";
    this.phoneField = "input[name='phone']";
    this.addressField = "textarea[name='address']";
    
    // Gender Radio Buttons
    this.genderMaleOption = "input[value='male']";
    this.genderFemaleOption = "input[value='female']";
    
    // Dropdowns
    this.countryDropdown = "select[name='country']";
    this.colorsDropdown = "select[name='colors']";
    this.daysCheckboxes = "input[type='checkbox']";
    
    // Date Pickers
    this.datePicker1 = "input[id*='datepicker1']";
    this.datePicker2 = "input[id*='datepicker2']";
    this.datePicker3 = "input[id*='datepicker3']";
    this.datePickerWidget = ".ui-datepicker";
    
    // Buttons
    this.submitButton = "//button[contains(text(), 'Submit')]";
    this.resetButton = "//button[contains(text(), 'Reset')]";
    
    // Messages
    this.successMessage = ".success-message";
    this.errorMessage = ".error-message";
  }

  /**
   * Fill form with all data
   * @param {object} formData - Form data object
   */
  fillCompleteForm(formData) {
    if (formData.name) this.enterText(this.nameField, formData.name);
    if (formData.email) this.enterText(this.emailField, formData.email);
    if (formData.phone) this.enterText(this.phoneField, formData.phone);
    if (formData.address) this.enterText(this.addressField, formData.address);
  }

  /**
   * Select gender
   * @param {string} gender - Gender value (male/female)
   */
  selectGender(gender) {
    const genderValue = gender.toLowerCase();
    const genderLocator = genderValue === "male" ? this.genderMaleOption : this.genderFemaleOption;
    this.selectRadioButton(genderLocator);
  }

  /**
   * Select multiple days
   * @param {array} days - Array of days to select
   */
  selectMultipleDays(days) {
    days.forEach((day) => {
      const dayCheckbox = `input[type='checkbox'][value='${day.toLowerCase()}']`;
      this.selectCheckbox(dayCheckbox);
    });
  }

  /**
   * Select country from dropdown
   * @param {string} country - Country name
   */
  selectCountry(country) {
    this.selectValueFromDropdown(this.countryDropdown, country);
  }

  /**
   * Select color from dropdown
   * @param {string} color - Color name
   */
  selectColor(color) {
    this.selectValueFromDropdown(this.colorsDropdown, color);
  }

  /**
   * Select date in first date picker
   * @param {string} date - Date in mm/dd/yyyy format
   */
  selectDatePicker1(date) {
    this.clickElement(this.datePicker1);
    const day = date.split("/")[1];
    this.clickElementUsingText(day);
  }

  /**
   * Select date in second date picker
   * @param {string} date - Date in dd/mm/yyyy format
   */
  selectDatePicker2(date) {
    this.clickElement(this.datePicker2);
    const month = date.split("/")[0];
    this.clickElementUsingText(month);
  }

  /**
   * Select date range in date picker 3
   * @param {string} fromDate - Start date in dd-mm-yyyy format
   * @param {string} toDate - End date in dd-mm-yyyy format
   */
  selectDateRange(fromDate, toDate) {
    this.clickElement(this.datePicker3);
    const fromDay = fromDate.split("-")[0];
    const toDay = toDate.split("-")[0];
    this.clickElementUsingText(fromDay);
    this.clickElementUsingText(toDay);
  }

  /**
   * Submit the form
   */
  submitForm() {
    this.clickElement(this.submitButton);
  }

  /**
   * Reset the form
   */
  resetForm() {
    this.clickElement(this.resetButton);
  }

  /**
   * Check if form submitted successfully
   */
  isFormSubmittedSuccessfully() {
    return cy.get(this.successMessage).should("be.visible");
  }

  /**
   * Check if form validation error is displayed
   */
  isFormValidationErrorDisplayed() {
    return cy.get(this.errorMessage).should("be.visible");
  }

  /**
   * Get form field value
   * @param {string} fieldType - Type of field (name, email, phone, address)
   */
  getFormFieldValue(fieldType) {
    let locator;
    switch (fieldType.toLowerCase()) {
      case "name":
        locator = this.nameField;
        break;
      case "email":
        locator = this.emailField;
        break;
      case "phone":
        locator = this.phoneField;
        break;
      case "address":
        locator = this.addressField;
        break;
      default:
        throw new Error("Invalid field type");
    }
    return this.getInputValue(locator);
  }

  /**
   * Clear specific form field
   * @param {string} fieldType - Type of field (name, email, phone, address)
   */
  clearFormField(fieldType) {
    let locator;
    switch (fieldType.toLowerCase()) {
      case "name":
        locator = this.nameField;
        break;
      case "email":
        locator = this.emailField;
        break;
      case "phone":
        locator = this.phoneField;
        break;
      case "address":
        locator = this.addressField;
        break;
      default:
        throw new Error("Invalid field type");
    }
    this.clearInputField(locator);
  }

  /**
   * Verify form field is visible
   * @param {string} fieldType - Type of field
   */
  isFormFieldVisible(fieldType) {
    let locator;
    switch (fieldType.toLowerCase()) {
      case "name":
        locator = this.nameField;
        break;
      case "email":
        locator = this.emailField;
        break;
      case "phone":
        locator = this.phoneField;
        break;
      case "address":
        locator = this.addressField;
        break;
      default:
        throw new Error("Invalid field type");
    }
    return this.isElementDisplayed(locator);
  }
}

export default DataEntryFormPage;
