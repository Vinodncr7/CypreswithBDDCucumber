import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import DataEntryFormPage from "../../support/UILib/DataEntryFormPage.js";
import BasicAssertions from "../../support/BasicAssertions.js";

const baseUrl = "https://testautomationpractice.blogspot.com/";
const formPage = new DataEntryFormPage();
const basicAssertions = new BasicAssertions();

// Background Steps defined in common.js


// Form Filling Steps
When("User fills the form with following data:", (dataTable) => {
  const data = dataTable.rowsHash();
  formPage.fillCompleteForm(data);
});

When("User does not fill any form fields", () => {
  // No-op
});

When("User selects gender {string}", (gender) => {
  formPage.selectGender(gender);
});

When("User selects days:", (dataTable) => {
  const days = dataTable.raw().flat();
  formPage.selectMultipleDays(days);
});

When("User selects country {string}", (country) => {
  formPage.selectCountry(country);
});

When("User selects color {string}", (color) => {
  formPage.selectColor(color);
});

When("User clicks the submit button", () => {
  formPage.submitForm();
});

Then("Form should be submitted successfully", () => {
  formPage.isFormSubmittedSuccessfully();
});

Then("Form validation error should be displayed", () => {
  formPage.isFormValidationErrorDisplayed();
});

// Date Picker Steps
When("User selects date {string} in date picker 1", (date) => {
  formPage.selectDatePicker1(date);
});

When("User selects date {string} in date picker 2", (date) => {
  formPage.selectDatePicker2(date);
});

When(
  "User selects date range from {string} to {string} in date picker 3",
  (fromDate, toDate) => {
    formPage.selectDateRange(fromDate, toDate);
  }
);

Then("All dates should be selected correctly", () => {
  cy.get("input[id*='datepicker']").each(($input) => {
    basicAssertions.assertElementIsNotEmpty($input);
  });
});

// Dropdown Steps
When("User clicks on colors dropdown", () => {
  formPage.clickElement(formPage.colorsDropdown);
});

When("User selects multiple colors from scrolling list:", (dataTable) => {
  const colors = dataTable.raw().flat();
  cy.get("select[name='colors']").then(($select) => {
    if ($select.attr("multiple")) {
      colors.forEach((color) => {
        formPage.selectValueFromDropdown("select[name='colors']", color);
      });
    }
  });
});

Then("Selected colors should be displayed", () => {
  cy.get("select[name='colors']")
    .invoke("val")
    .should("have.length.greaterThan", 0);
});
